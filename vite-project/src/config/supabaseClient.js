




import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aybpjreidwvimessogpa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5YnBqcmVpZHd2aW1lc3NvZ3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3OTU1NTksImV4cCI6MjAyNDM3MTU1OX0.RlsGZrd1CxeVzGATm6ZLES6tgXCcQg5xn-KtcCyWQPc'
 const supabase = createClient(supabaseUrl, supabaseKey)
 export default supabase


