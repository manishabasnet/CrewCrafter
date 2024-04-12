import { createClient } from '@supabase/supabase-js'


const REACT_APP_SUPABASE_URL="https://kmdhrlhgdjtrodsxvrby.supabase.co"
const REACT_APP_SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttZGhybGhnZGp0cm9kc3h2cmJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MjM5NzYsImV4cCI6MjAyNzk5OTk3Nn0.PT3i7usU59pMUeDnxPw_PPE0rGUY7qXDFuVm3RD13zo"
        
export const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_KEY)