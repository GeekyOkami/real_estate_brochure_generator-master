import React, { useEffect } from 'react';

function RegenerateDropdownComponent({ showDropdown, handleRegenerate ,setShowDropdown}) {
  useEffect(() => {
    const handleDocumentClick = (e) => {
      const selection = window.getSelection();
      if (!selection.toString()) {
        handleDropdownClose();
      }
    };

    document.body.addEventListener('mouseup', handleDocumentClick);

    return () => {
      document.body.removeEventListener('mouseup', handleDocumentClick);
    };
  });

  const handleDropdownClose = () => {
    // Close the dropdown
    setShowDropdown(false);
  };

  const handleOptionClick = (option) => {
    handleRegenerate(option);
    handleDropdownClose();
  };

  return (
    <>
      {showDropdown && (
        <div className="regenerate-dropdown">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleOptionClick("longer")}>Elaborate</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleOptionClick("shorter")}>Explain in Few Words</button>
        </div>
      )}
    </>
  );
}

export default RegenerateDropdownComponent;