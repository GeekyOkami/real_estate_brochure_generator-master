import React from 'react';

function FormComponent({ tone, setTone, length, setLength, features, setFeatures, positioning, setPositioning, handleGenerate, handleInsert, isFormValid }) {
  return (
    <form onSubmit={handleGenerate} className="text-prompt-form">
      {/* Form inputs */}
      <div className=' flex justify-center'>
      <div className=" flex flex-nowrap justify-center px-5 py-5 m-5 space-x-4">
        <div className="col-md-6 flex flex-nowrap mr-2">
          <div className=" space-x-2">
            <label htmlFor="tone" className=' outline px-3 py-1'>Tone</label>
            <select
              id="tone"
              className="form-control"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option value="Casual">Casual</option>
              <option value="Formal">Formal</option>
              <option value="Grandiose">Grandiose</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="length" className=' outline px-3 py-1'>Length</label>
            <select
              id="length"
              className="form-control"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            >
              <option value="Short">Short (4-6 sentences)</option>
              <option value="Medium">Medium (8-10 sentences)</option>
              <option value="Long">Long (15-20 sentences)</option>
            </select>
          </div>
        </div>
      </div>
      <div className=" flex flex-nowrap justify-center px-5 py-5 m-5 space-x-7">
        <div className="col-md-6 mr-4">
          <div className="form-group space-x-3 flex flex-col space-y-2">
            <label htmlFor="features" className=' outline px-2 py-1'>Features</label>
            <textarea
              id="features"
              className="form-control outline"
              rows="3"
              value={features}
              placeholder='Write your features'
              onChange={(e) => setFeatures(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <div>
          <div className="col-md-6">
          <div className="form-group space-x-3 flex flex-col space-y-2">
            <label htmlFor="positioning" className=' outline px-3 py-1'>Brand Positioning</label>
            <textarea
              id="positioning"
              className="form-control outline"
              rows="3"
              value={positioning}
              onChange={(e) => setPositioning(e.target.value)}
              placeholder='Write Your Brand Positioning'
              required
            ></textarea>
          </div>
        </div>
        </div>
      </div>
      </div>
      {/* Buttons */}
      <div className="row flex flex-nowrap justify-center space-x-3">
        <div className="col-md-6">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={!isFormValid()}>
            Generate
          </button>
        </div>
        <div className="col-md-6">
          <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleInsert} disabled={!isFormValid()}>
            Insert in DB
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormComponent;
