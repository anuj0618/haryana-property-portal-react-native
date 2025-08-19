import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dludsnifbiuaarvmjaaa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsdWRzbmlmYml1YWFydm1qYWFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNjAzMzUsImV4cCI6MjA2NTYzNjMzNX0.k2QbvhS1DXneqoKI2HywK6JQs3ienf5e20bRsvlhW84';

export const supabase = createClient(supabaseUrl, supabaseKey);