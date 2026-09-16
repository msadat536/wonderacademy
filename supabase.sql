-- Wonder Academy - run this once in the Supabase SQL editor.
-- If you ran an earlier version of this file, uncomment the three drops first:
-- drop table if exists kid_progress;
-- drop table if exists kid_profiles;
-- drop table if exists parent_settings;

create table if not exists parent_settings (
  owner_id uuid primary key references auth.users(id) on delete cascade,
  pin_hash text not null,
  updated_at timestamptz default now()
);

create table if not exists kid_profiles (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  name text not null,
  age int not null,
  avatar text not null default '🦁',
  created_at timestamptz default now()
);

create table if not exists kid_progress (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  profile_id uuid not null references kid_profiles(id) on delete cascade,
  category text not null,
  concept_id text not null,
  cycle int not null default 1,
  best_score int not null default 0,
  stars int not null default 0,
  updated_at timestamptz default now(),
  unique (profile_id, category, concept_id, cycle)
);

alter table parent_settings enable row level security;
alter table kid_profiles enable row level security;
alter table kid_progress enable row level security;

-- Every row belongs to the signed-in parent account. Nobody else can read or write it.
create policy "own settings" on parent_settings
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "own profiles" on kid_profiles
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "own progress" on kid_progress
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

-- Money rewards (update 2)
alter table parent_settings add column if not exists star_cents int not null default 0;
alter table parent_settings add column if not exists badge_cents int not null default 0;
alter table parent_settings add column if not exists trophy_cents int not null default 0;
alter table parent_settings add column if not exists currency text not null default '$';

create table if not exists kid_ledger (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  profile_id uuid not null references kid_profiles(id) on delete cascade,
  kind text not null,
  amount_cents int not null,
  note text,
  created_at timestamptz default now()
);
alter table kid_ledger enable row level security;
drop policy if exists "own ledger" on kid_ledger;
create policy "own ledger" on kid_ledger
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

-- Pronunciation overrides and video links (update 3)
alter table parent_settings add column if not exists pron_overrides text not null default '{}';
alter table parent_settings add column if not exists video_map text not null default '{}';
alter table parent_settings add column if not exists honorific_mode text not null default 'full';

-- Quiz attempt log (update 4)
create table if not exists kid_attempts (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  profile_id uuid not null references kid_profiles(id) on delete cascade,
  category text not null,
  concept_id text not null,
  concept_title text,
  cycle int not null default 1,
  tier text not null default 'older',
  score int not null default 0,
  total int not null default 10,
  missed text not null default '[]',
  seconds int not null default 0,
  created_at timestamptz default now()
);
create index if not exists kid_attempts_profile_idx on kid_attempts (profile_id, created_at desc);
alter table kid_attempts enable row level security;
drop policy if exists "own attempts" on kid_attempts;
create policy "own attempts" on kid_attempts
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
