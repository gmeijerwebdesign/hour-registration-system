import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jhizzwmkufsrisiqmzln.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoaXp6d21rdWZzcmlzaXFtemxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0NTQ5NzIsImV4cCI6MjA2NjAzMDk3Mn0.iahxyd9OdS9VP7fVtMI6Qr_HzpcwcIzCl_GLjGSGxTI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
