const supabase = require('./supabase');
async function insertData(req, res) {
    const { tone, length, features, positioning, response } = req.body;
  
    try {
      const { data, error } = await supabase
        .from('Prompts')
        .insert([
          { Tone: tone, Length: length, Features: features, Positioning: positioning, Output: response }
        ]);
  
      if (error) {
        console.error('Supabase insert error:', error.message); // Log detailed error message
        throw error;
      }
  
      res.json({ success: true });
    } catch (error) {
      console.error('Error inserting data:', error); // Log catch block error
      res.status(500).json({ error: 'Error inserting data' });
    }
  };
  module.exports = insertData;