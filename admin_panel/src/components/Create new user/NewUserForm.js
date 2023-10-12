import React, { useState } from 'react';
import './NewUserForm.css';

const NewUserForm = () => {
  const [formData, setFormData] = useState({
    Merchant_ID: '',
    Merchant_NAME: '',
    Location: '',
    Updated_Date: '',
    Created_DATE: '',
    Plan_STATUS: '',
    Catalogue_upload: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = value === '' ? 'No Upload' : value;
    setFormData({ ...formData, [name]: newValue });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can make a POST request to your API
    fetch('http://localhost:3006/const_merchantData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Handle success
          alert('New user added successfully!');
        } else {
          // Handle error
          alert('Failed to add a new user');
        }
      });
  };

  return (
    <div>
    <div className="NewUserForm">
      <h1>Create New User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Merchant_ID">Merchant ID:</label>
          <input type="text" id="Merchant_ID" name="Merchant_ID" value={formData.Merchant_ID} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="Merchant_NAME">Merchant Name:</label>
          <input type="text" id="Merchant_NAME" name="Merchant_NAME" value={formData.Merchant_NAME} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="Location">Location:</label>
          <input type="text" id="Location" name="Location" value={formData.Location} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="Updated_Date">Updated Date:</label>
          <input type="text" id="Updated_Date" name="Updated_Date" value={formData.Updated_Date} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="Created_DATE">Created Date:</label>
          <input type="text" id="Created_DATE" name="Created_DATE" value={formData.Created_DATE} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="Plan_STATUS">Plan Status:</label>
          <input type="text" id="Plan_STATUS" name="Plan_STATUS" value={formData.Plan_STATUS} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="Catalogue_upload">Catalogue Upload:</label>
          <input type="text" id="Catalogue_upload" name="Catalogue_upload" placeholder="No Upload" value={formData.Catalogue_upload} onChange={handleChange} />

        </div>

        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default NewUserForm;




