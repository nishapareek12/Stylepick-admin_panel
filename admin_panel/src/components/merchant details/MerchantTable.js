import React, { useEffect, useState } from 'react';
import './merchant.css';
// import  api from "../api/contacts";

const MerchantTable = () => {
  const [merchants, setMerchants] = useState([]);

  useEffect(() => {
    // Fetch data from your JSON server API
    fetch('http://localhost:3006/const_merchantData')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data received:', data); // Add this line for debugging
        setMerchants(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Merchant Table</h1>
      <table>
        <thead>
          <tr>
            <th>Merchant ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Updated Date</th>
            <th>Created Date</th>
            <th>Plan Status</th>
            <th>Catalogue Upload</th>
          </tr>
        </thead>
        <tbody>
          {merchants.map((merchant) => (
            <tr key={merchant.Merchant_ID}>
              <td>{merchant.Merchant_ID}</td>
              <td>{merchant.Merchant_NAME}</td>
              <td>{merchant.Location}</td>
              <td>{merchant.Updated_Date}</td>
              <td>{merchant.Created_DATE}</td>
              <td>{merchant.Plan_STATUS}</td>
              <td>{merchant.Catalogue_upload}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MerchantTable;
