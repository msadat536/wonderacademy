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
