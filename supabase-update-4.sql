-- Wonder Academy update 4: log every quiz attempt.
-- Run once in the Supabase SQL editor.

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
