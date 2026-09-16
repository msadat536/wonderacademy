-- Wonder Academy update 2: money rewards ledger and reward rates.
-- Run this once in the Supabase SQL editor if you already ran supabase.sql before.

alter table parent_settings add column if not exists star_cents int not null default 0;
alter table parent_settings add column if not exists badge_cents int not null default 0;
alter table parent_settings add column if not exists trophy_cents int not null default 0;
alter table parent_settings add column if not exists currency text not null default '$';

create table if not exists kid_ledger (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  profile_id uuid not null references kid_profiles(id) on delete cascade,
  kind text not null,               -- earn, bonus, redeem
  amount_cents int not null,        -- positive for earn/bonus, negative for redeem
  note text,
  created_at timestamptz default now()
);

alter table kid_ledger enable row level security;
drop policy if exists "own ledger" on kid_ledger;
create policy "own ledger" on kid_ledger
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
