import React, { useState } from 'react';
import axios from 'axios';
import './App.css' ;
import FormComponent from './components/Formcomp';
import GeneratedCopyComponent from './components/Generatedcopycomp';
import RegenerateDropdownComponent from './components/Gendropdown';

function TextPromptForm() {
  const [tone, setTone] = useState('Casual');
  const [length, setLength] = useState('Short');
  const [features, setFeatures] = useState('');
  const [positioning, setPositioning] = useState('');
  const [response, setResponse] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const isFormValid = () => {
    return features.trim() !== '' && positioning.trim() !== '';
  };

  const handleGenerate = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5555/generate", {
        tone,
        length,
        features,
        positioning,
      });
      const generatedText = res.data.texti;  // Extract the generated text
      console.log(generatedText);
      setResponse(generatedText);
    } catch (err) {
      console.error(err);
    }
    
  };
  const handleInsert = async () => {
    const data = { tone, length, features, positioning, response };
    console.log('Sending to /insertindb:', data);
  
    try {
      const res = await axios.post('http://localhost:5555/insert', data);
      console.log('Response from /insertindb:', res.data);
      alert('Data inserted successfully!');
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };
  const handleRegenerate = async (option) => {
    try {
      const resi = await axios.post('http://localhost:5555/regenerate', {
        response,
        selectedText,
        option
      });
    const regeneratedText = resi.data.regentext;  
    console.log(regeneratedText);
    setResponse(regeneratedText);
    setShowDropdown(false);
    } catch (error) {
      console.error('Error regenerating copy:', error);
    }
  };
  const handleTextSelect = (event) => {
    const selected = window.getSelection();
    const selectedText = selected.toString();
    if (selectedText) {
      setSelectedText(selectedText);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };


    return (
      <div className=" w-full h-screen" >
        <h1 className='text-center text-3xl'>Real Estate Marketing Copy Generator</h1>
        <FormComponent
          tone={tone}
          setTone={setTone}
          length={length}
          setLength={setLength}
          features={features}
          setFeatures={setFeatures}
          positioning={positioning}
          setPositioning={setPositioning}
          handleGenerate={handleGenerate}
          handleInsert={handleInsert}
          isFormValid={isFormValid}
        />
        <GeneratedCopyComponent
          response={response}
          handleTextSelect={handleTextSelect}
        />
        <RegenerateDropdownComponent
              showDropdown={showDropdown}
              handleRegenerate={handleRegenerate}
              setShowDropdown={setShowDropdown}
        />
      </div>
    );
  }

export default TextPromptForm;
