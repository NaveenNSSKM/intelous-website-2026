
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ypyumkglypvgcsultcnf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlweXVta2dseXB2Z2NzdWx0Y25mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxMjM5MDIsImV4cCI6MjA4MTY5OTkwMn0.IbBbfueGb-hEmPOk4jn_BjLZ4n9lG0nog_uBWaOEtxI";

export const supabase = createClient(supabaseUrl, supabaseKey);
