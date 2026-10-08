-- Offer requests (modal + contact section) and newsletter signups.
-- Written only by the Next.js route handlers using the publishable (anon) key.
-- Anon can INSERT and nothing else; reads happen from the Supabase dashboard / service role.

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text not null check (source in ('offer', 'contact')),
  name text not null check (char_length(name) between 2 and 200),
  clinic text check (char_length(clinic) <= 200),
  email text not null check (char_length(email) between 5 and 254 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  phone text check (char_length(phone) <= 40),
  work_type text check (char_length(work_type) <= 300),
  message text check (char_length(message) <= 5000),
  page_url text check (char_length(page_url) <= 500)
);

create index leads_created_at_idx on public.leads (created_at desc);

create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null check (char_length(email) between 5 and 254 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$')
);

create unique index newsletter_subscribers_email_key on public.newsletter_subscribers (lower(email));

alter table public.leads enable row level security;
alter table public.newsletter_subscribers enable row level security;

revoke all on public.leads from anon, authenticated;
revoke all on public.newsletter_subscribers from anon, authenticated;
grant insert on public.leads to anon;
grant insert on public.newsletter_subscribers to anon;

create policy leads_insert_anon on public.leads
  for insert to anon
  with check (source in ('offer', 'contact'));

create policy newsletter_insert_anon on public.newsletter_subscribers
  for insert to anon
  with check (char_length(email) > 4);
