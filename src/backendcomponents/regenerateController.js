const fetch = require('node-fetch');
require('dotenv').config();

async function regenerateCopy(req, res){
    const { response , selectedText , option} = req.body;
    const prompt = `
    Please regenerate the narrative flow by modifying ONLY the selection portion of the complete text.
    Do not regenerate any other aspect of the complete text and ONLY give the output.
    
    <COMPLETE TEXT>
    ${response}
    </COMPLETE TEXT> 
    
    <SELECTED PORTION>
    ${selectedText}
    </SELECTED PORTION>
    
    Please make the text of the selection portion ${option}
    by smaller i mean way smaller like summarize within 50 words
    by larger i mean elaborate it heavily.
    Generate and return the complete text containing the modification, without providing any other information or sentences.
    
    `
    console.log(prompt);  // Log the prompt from the front-end
    console.log(typeof(prompt));
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
    .then(json => res.status(200).json({regentext:json.openai.generated_text}))
    // res.status(200).json({texti:json.openai.generated_text})
    .catch(err => res.status(500).json({ error: 'An error occurred' }));
  };
  module.exports = regenerateCopy;