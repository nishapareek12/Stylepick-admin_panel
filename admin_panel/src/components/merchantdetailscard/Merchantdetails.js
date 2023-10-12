// import React from 'react';

// const MerchantDetails = ({ merchant }) => {
//   if (!merchant) {
//     return <div>Select a merchant to view details</div>;
//   }

//   return (
//     <div>
//       <h2>Merchant Details</h2>
//       <div>
//         <p>Merchant ID: {merchant.Merchant_ID}</p>
//         <p>Name: {merchant.Merchant_NAME}</p>
//         <p>Location: {merchant.Location}</p>
//         <p>Updated Date: {merchant.Updated_Date}</p>
//         <p>Created Date: {merchant.Created_DATE}</p>
//         <p>Plan Status: {merchant.Plan_STATUS}</p>
//         <p>Catalogue Upload: {merchant.Catalogue_upload}</p>
//       </div>
//     </div>
//   );
// };

// export default MerchantDetails;

// import React from 'react';
// import './Merchantdetails.css'; // Import the CSS file

// const MerchantDetails = ({ merchant }) => {
//   if (!merchant) {
//     return <div className="merchant-card empty-card">Select a merchant to view details</div>;
//   }

//   return (
//     <div className="merchant-card">
//       <h2>Merchant Details</h2>
//       <div>
//         <p><strong>Merchant ID:</strong> {merchant.Merchant_ID}</p>
//         <p><strong>Name:</strong> {merchant.Merchant_NAME}</p>
//         <p><strong>Location:</strong> {merchant.Location}</p>
//         <p><strong>Updated Date:</strong> {merchant.Updated_Date}</p>
//         <p><strong>Created Date:</strong> {merchant.Created_DATE}</p>
//         <p><strong>Plan Status:</strong> {merchant.Plan_STATUS}</p>
//         <p><strong>Catalogue Upload:</strong> {merchant.Catalogue_upload}</p>
//       </div>
//     </div>
//   );
// };

// export default MerchantDetails;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './Merchantdetails.css'; // Import the CSS file for styling

// const MerchantDetails = () => {
//   const { id } = useParams();
//   const [merchant, setMerchant] = useState(null);

//   useEffect(() => {
//     // Simulate data fetching using a timeout (replace with your actual data fetching logic)
//     setTimeout(() => {
//       const dummyMerchant = {
//         Merchant_ID: id,
//         Merchant_NAME: 'Sample Merchant',
//         Location: 'Sample Location',
//         Updated_Date: 'Sample Updated Date',
//         Created_DATE: 'Sample Created Date',
//         Plan_STATUS: 'Sample Plan Status',
//         Catalogue_upload: 'Sample Catalogue Upload',
//       };
//       setMerchant(dummyMerchant);
//     }, 1000); // Simulate a 1-second delay (adjust as needed)
//   }, [id]);

//   if (!merchant) {
//     return <div className="merchant-details">Loading...</div>;
//   }

//   return (
//     <div className="merchant-details">
//       <h2>Merchant Details</h2>
//       <div>
//         <p><strong>Merchant ID:</strong> {merchant.Merchant_ID}</p>
//         <p><strong>Name:</strong> {merchant.Merchant_NAME}</p>
//         <p><strong>Location:</strong> {merchant.Location}</p>
//         <p><strong>Updated Date:</strong> {merchant.Updated_Date}</p>
//         <p><strong>Created Date:</strong> {merchant.Created_DATE}</p>
//         <p><strong>Plan Status:</strong> {merchant.Plan_STATUS}</p>
//         <p><strong>Catalogue Upload:</strong> {merchant.Catalogue_upload}</p>
//       </div>
//     </div>
//   );
// };

// export default MerchantDetails;

// MerchantDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import './Merchantdetails.css'

const MerchantDetails = ({ merchants }) => {
  const { id } = useParams();
  const merchant = merchants.find((merchant) => merchant.Merchant_ID === id);

  if (!merchant) {
    return <div>Merchant not found</div>;
  }

  return (
    <div>
      {/* <h1>Merchant Details</h1> */}
      <div className="merchant-details-card">
        <p>Merchant ID: {merchant.Merchant_ID}</p>
        <p>Name: {merchant.Merchant_NAME}</p>
        <p>Location: {merchant.Location}</p>
        <p>Updated Date: {merchant.Updated_Date}</p>
        <p>Created Date: {merchant.Created_DATE}</p>
        <p>Plan Status: {merchant.Plan_STATUS}</p>
        <p>Catalogue Upload: {merchant.Catalogue_upload}</p>
      </div>
    </div>
  );
};

export default MerchantDetails;
