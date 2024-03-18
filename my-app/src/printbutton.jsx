import React from 'react';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PrintButton = () => {
 const handlePrint = () => {
    // Create a new window or an iframe
    const printWindow = window.open('', '_blank');
    printWindow.document.open();

    // Get the content you want to print
    const content = document.querySelector('body').innerHTML;

    // Exclude the navbar from the content
    // Assuming the navbar has an id of 'navbar'
    const navbar = document.getElementById('navbar');
    const contentWithoutNavbar = content.replace(navbar.outerHTML, '');

    // Write the content to the new window or iframe
    printWindow.document.write('<html><head><title>Print</title></head><body>' + contentWithoutNavbar + '</body></html>');

    // Print the content
    printWindow.document.close();
    printWindow.print();
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
