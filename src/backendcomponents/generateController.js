const fetch = require('node-fetch');
require('dotenv').config();

async function generateCopy (req, res)  {
    const { tone, length, features, positioning } = req.body;
    const prompt = `
    You are a copywriter at a marketing agency working on a brochure for a real estate developer.
    Generate a narrative flow for the real estate brochure keeping in mind the brand positioning and features of the property.
    
    <BRAND POSITIONING>
    ${positioning}
    </BRAND POSITIONING> 
    
    <FEATURES>
    ${features}
    </FEATURES>
    
    
    Keep the tone of the narrative ${tone}
    Also make sure that the length of the copy is ${length}
    `
  //   console.log(prompt);  // Log the prompt from the front-end
  //   console.log(typeof(prompt));
    if (!prompt) {
      return res.status(400).send('No prompt provided.');
    }
  
    const url = 'https://api.edenai.run/v2/text/generation';
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Bearer ${process.env.REACT_APP_EDEN_API_KEY}`
      },
      body: JSON.stringify({
        providers: ['openai'],
        text: prompt, 
        max_tokens: 2000,
        temperature: 0.4,
        fallback_providers: ['google']
      })
    };
  
    fetch(url, options)
    .then(res => res.json())
    .then(json => res.status(200).json({texti:json.openai.generated_text}))
    .catch(err => res.status(500).json({ error: 'An error occurred' }));
  };
  module.exports = generateCopy;