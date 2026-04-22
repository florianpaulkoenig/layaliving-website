-- Laya Living website — recommendations schema
--
-- Public-read, admin-write. Anon users (website visitors) can only SELECT
-- published rows; writes are restricted to the service_role key (Supabase
-- Table Editor uses service_role, so the admin can still edit from the
-- dashboard).

create extension if not exists "pgcrypto";

create table if not exists recommendations (
  id                   bigserial primary key,
  slug                 text not null,
  category             text not null check (category in (
    'eat', 'drink', 'hike', 'bike', 'culture',
    'daytrips', 'family', 'gems'
  )),

  -- content
  name                 text not null,
  tagline              text,
  description          text,
  why_we_love_it       text,

  -- location
  address              text,
  lat                  numeric(9,6),
  lng                  numeric(9,6),

  -- practical info
  website              text,
  phone                text,
  opening_hours        jsonb,          -- { mon: "10-18", tue: "closed", ... } or freeform
  price_range          integer check (price_range between 1 and 4),
  walk_time_min        integer,        -- from Triangolo (Nidfeldstrasse 2G)
  bike_time_min        integer,
  bus_route            text,

  -- meta
  season               text[] default array[]::text[],   -- subset of ['spring','summer','autumn','winter']
  tags                 text[] default array[]::text[],   -- ['vegetarian','romantic','view','hidden-gem',...]
  image_url            text,
  image_credit         text,
  source_url           text,

  published            boolean not null default true,
  sort_order           integer not null default 0,

  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now(),

  constraint unique_slug_per_category unique (category, slug)
);

create index if not exists recommendations_category_idx
  on recommendations (category) where published;
create index if not exists recommendations_sort_idx
  on recommendations (sort_order, name);
create index if not exists recommendations_tags_gin
  on recommendations using gin (tags);
create index if not exists recommendations_season_gin
  on recommendations using gin (season);

-- ------------------------------------------------------------------
-- RLS — locked down by default, explicit allow for anon SELECT of
-- published rows only.
-- ------------------------------------------------------------------
alter table recommendations enable row level security;

drop policy if exists "public read published" on recommendations;
create policy "public read published"
  on recommendations
  for select
  using (published = true);

-- No INSERT / UPDATE / DELETE policies for anon:
-- only the service_role key (Supabase dashboard + server-side code) can write.

-- ------------------------------------------------------------------
-- Trigger: keep updated_at fresh
-- ------------------------------------------------------------------
create or replace function set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists recommendations_updated_at on recommendations;
create trigger recommendations_updated_at
  before update on recommendations
  for each row execute function set_updated_at();
