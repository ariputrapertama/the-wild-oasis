import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lihlcoqmjxkabesrluyh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpaGxjb3FtanhrYWJlc3JsdXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwNTkyNjYsImV4cCI6MjAzOTYzNTI2Nn0.ZUhk8i1kuSvY70TjdumjoIZkgOLCnEO7OwbHuGWZYN4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
