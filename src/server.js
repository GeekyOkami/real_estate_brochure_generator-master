
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
// const fetch = require('node-fetch');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();
const generateCopy=require('./backendcomponents/generateController');
const insertData = require('./backendcomponents/insertController');
const regenerateCopy = require('./backendcomponents/regenerateController');

// const supabaseurl= process.env.REACT_APP_URL;
// const supabasekey= process.env.REACT_APP_KEY;
// const supabase= createClient(process.env.REACT_APP_URL,process.env.REACT_APP_KEY);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.post('/generate', generateCopy);
app.post('/insert', insertData);
app.post('/regenerate', regenerateCopy);
const port = 5555;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
