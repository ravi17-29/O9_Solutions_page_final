import React from 'react';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PrintButton = () => {
 const handlePrint = () => {
    window.print();
 };

 return (
    <button
      className="text-xl text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
      onClick={handlePrint}
    >
      <FontAwesomeIcon icon={faPrint} />
    </button>
 );
};

export default PrintButton;
