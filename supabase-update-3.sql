-- Wonder Academy update 3: pronunciation overrides and video links.
-- Run once in the Supabase SQL editor.

alter table parent_settings add column if not exists pron_overrides text not null default '{}';
alter table parent_settings add column if not exists video_map text not null default '{}';
alter table parent_settings add column if not exists honorific_mode text not null default 'full';
