-- Wonder Academy: ALL database updates in one file. Safe to run more than once.
-- Run this in Supabase > SQL Editor > New query > Run. It creates anything missing
-- and leaves existing data untouched.

-- Core tables (update 1)
create table if not exists parent_settings (
  owner_id uuid primary key references auth.users(id) on delete cascade,
  pin_hash text not null,
  updated_at timestamptz default now()
);
create table if not exists kid_profiles (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  name text not null, age int not null, avatar text not null default '🦁',
  created_at timestamptz default now()
);
create table if not exists kid_progress (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  profile_id uuid not null references kid_profiles(id) on delete cascade,
  category text not null, concept_id text not null, cycle int not null default 1,
  best_score int not null default 0, stars int not null default 0,
  updated_at timestamptz default now(),
  unique (profile_id, category, concept_id, cycle)
);

-- Money rewards (update 2)
alter table parent_settings add column if not exists star_cents int not null default 0;
alter table parent_settings add column if not exists badge_cents int not null default 0;
alter table parent_settings add column if not exists trophy_cents int not null default 0;
alter table parent_settings add column if not exists currency text not null default '$';
create table if not exists kid_ledger (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  profile_id uuid not null references kid_profiles(id) on delete cascade,
  kind text not null, amount_cents int not null, note text,
  created_at timestamptz default now()
);

-- Pronunciation and videos (update 3)
alter table parent_settings add column if not exists pron_overrides text not null default '{}';
alter table parent_settings add column if not exists video_map text not null default '{}';
alter table parent_settings add column if not exists honorific_mode text not null default 'full';

-- Quiz attempt log (update 4)
create table if not exists kid_attempts (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  profile_id uuid not null references kid_profiles(id) on delete cascade,
  category text not null, concept_id text not null, concept_title text,
  cycle int not null default 1, tier text not null default 'older',
  score int not null default 0, total int not null default 10,
  missed text not null default '[]', seconds int not null default 0,
  created_at timestamptz default now()
);
create index if not exists kid_attempts_profile_idx on kid_attempts (profile_id, created_at desc);

-- Lesson schedule (update 5)
create table if not exists kid_schedule (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  profile_id uuid not null references kid_profiles(id) on delete cascade,
  days text not null default '1,2,3,4,5',     -- 0=Sunday .. 6=Saturday
  time_of_day text not null default '17:00',  -- HH:MM local
  category text not null default 'any',
  remind_minutes int not null default 15,
  enabled boolean not null default true,
  created_at timestamptz default now()
);
alter table parent_settings add column if not exists sfx_on boolean not null default false;

-- Security: every row belongs to the signed-in parent
alter table parent_settings enable row level security;
alter table kid_profiles enable row level security;
alter table kid_progress enable row level security;
alter table kid_ledger enable row level security;
alter table kid_attempts enable row level security;
alter table kid_schedule enable row level security;

drop policy if exists "own settings" on parent_settings;
create policy "own settings" on parent_settings for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
drop policy if exists "own profiles" on kid_profiles;
create policy "own profiles" on kid_profiles for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
drop policy if exists "own progress" on kid_progress;
create policy "own progress" on kid_progress for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
drop policy if exists "own ledger" on kid_ledger;
create policy "own ledger" on kid_ledger for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
drop policy if exists "own attempts" on kid_attempts;
create policy "own attempts" on kid_attempts for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
drop policy if exists "own schedule" on kid_schedule;
create policy "own schedule" on kid_schedule for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

-- Parent voice recordings (update 6)
create table if not exists kid_recordings (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  category text not null,
  concept_id text not null,
  tier text not null,
  page_index int not null,
  path text not null,
  seconds int not null default 0,
  created_at timestamptz default now(),
  unique (owner_id, category, concept_id, tier, page_index)
);
alter table kid_recordings enable row level security;
drop policy if exists "own recordings" on kid_recordings;
create policy "own recordings" on kid_recordings for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

-- Private storage bucket for the audio files
insert into storage.buckets (id, name, public)
  values ('recordings', 'recordings', false)
  on conflict (id) do nothing;

drop policy if exists "own recording files read" on storage.objects;
create policy "own recording files read" on storage.objects for select
  using (bucket_id = 'recordings' and (storage.foldername(name))[1] = auth.uid()::text);
drop policy if exists "own recording files write" on storage.objects;
create policy "own recording files write" on storage.objects for insert
  with check (bucket_id = 'recordings' and (storage.foldername(name))[1] = auth.uid()::text);
drop policy if exists "own recording files update" on storage.objects;
create policy "own recording files update" on storage.objects for update
  using (bucket_id = 'recordings' and (storage.foldername(name))[1] = auth.uid()::text);
drop policy if exists "own recording files delete" on storage.objects;
create policy "own recording files delete" on storage.objects for delete
  using (bucket_id = 'recordings' and (storage.foldername(name))[1] = auth.uid()::text);

-- Cloud narration cache and settings (update 7)
insert into storage.buckets (id, name, public)
  values ('tts-cache', 'tts-cache', false)
  on conflict (id) do nothing;
alter table parent_settings add column if not exists voice_engine text not null default 'device';
alter table parent_settings add column if not exists cloud_voice_id text not null default '';

-- Free voice library bucket (update 8)
insert into storage.buckets (id, name, public)
  values ('voice-library', 'voice-library', false)
  on conflict (id) do nothing;
drop policy if exists "own library read" on storage.objects;
create policy "own library read" on storage.objects for select
  using (bucket_id = 'voice-library' and (storage.foldername(name))[1] = auth.uid()::text);
alter table parent_settings add column if not exists library_voice text not null default '';
