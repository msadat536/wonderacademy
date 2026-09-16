-- Wonder Academy - run this once in the Supabase SQL editor.

create table if not exists kid_profiles (
  id uuid primary key default gen_random_uuid(),
  family_code text not null,
  name text not null,
  age int not null,
  avatar text not null default '🦁',
  created_at timestamptz default now()
);

create table if not exists kid_progress (
  id uuid primary key default gen_random_uuid(),
  family_code text not null,
  profile_id uuid not null references kid_profiles(id) on delete cascade,
  category text not null,
  concept_id text not null,
  cycle int not null default 1,
  best_score int not null default 0,
  stars int not null default 0,
  updated_at timestamptz default now(),
  unique (profile_id, category, concept_id, cycle)
);

alter table kid_profiles enable row level security;
alter table kid_progress enable row level security;

-- Open policies scoped by usage. This is a family app: anyone with the anon key
-- can read/write these two tables, and rows are grouped by family_code.
-- Do not store anything sensitive here beyond first name, age, and quiz scores.
create policy "profiles select" on kid_profiles for select using (true);
create policy "profiles insert" on kid_profiles for insert with check (true);
create policy "progress select" on kid_progress for select using (true);
create policy "progress insert" on kid_progress for insert with check (true);
create policy "progress update" on kid_progress for update using (true);
