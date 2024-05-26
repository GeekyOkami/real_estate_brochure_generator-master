import React from 'react';

function GeneratedCopyComponent({ response, handleTextSelect }) {
  return (
    <div className="flex justify-center items-center my-3">
      <h2 className='text-sm font-medium '>Generated Copy:</h2>
      <textarea class="p-2.5 w-1/2 mx-6 rounded-lg outline text-3xl" placeholder="Your Brochure will be Generated here..." rows="6" value={response} onMouseUp={handleTextSelect} readOnly style={{ width: '100%', height: '200px' }} />
    </div>
  );
}

export default GeneratedCopyComponent;
