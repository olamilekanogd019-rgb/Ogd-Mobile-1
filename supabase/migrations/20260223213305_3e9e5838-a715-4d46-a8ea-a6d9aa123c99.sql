
-- Daily deals table for storing cheap data alerts
CREATE TABLE public.daily_deals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  network TEXT NOT NULL,
  plan_name TEXT NOT NULL,
  data_amount TEXT NOT NULL,
  price TEXT NOT NULL,
  validity TEXT NOT NULL,
  buy_link TEXT DEFAULT '#',
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.daily_deals ENABLE ROW LEVEL SECURITY;

-- Public read access (everyone can see deals)
CREATE POLICY "Anyone can view daily deals"
ON public.daily_deals
FOR SELECT
USING (true);

-- Enable realtime for live updates
ALTER PUBLICATION supabase_realtime ADD TABLE public.daily_deals;
