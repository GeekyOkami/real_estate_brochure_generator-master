const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.REACT_APP_URL, process.env.REACT_APP_KEY);

module.exports = supabase;