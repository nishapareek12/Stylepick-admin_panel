
// import './App.css';
// import Header from './components/Header/Header';
// // import Dashboard from './components/dashboard/Dashboard';
// import MerchantTable from './components/merchant details/MerchantTable';
// import Navbar from './components/navbar/Navbar';

// function App() {
//   return (
//     <div>
//    <Navbar/>
//    <Header/>
//    {/* <Dashboard/> */}
//    <MerchantTable/>
//    </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MerchantTable from '../src/components/merchant details/MerchantTable';
import Navbar from './components/navbar/Navbar';
import NewUserForm from './components/Create new user/NewUserForm';
import MerchantDetails from '../src/components/merchantdetailscard/Merchantdetails'; // Make sure the import path is correct
import './App.css';

const App = () => {
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
        console.log('Data received:', data);
        setMerchants(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Router>
      <div>
        {/* <h1>Merchant App</h1> */}
        <Navbar/>
        {/* <Header/> */}
        <Routes>

          <Route path="/" element={<MerchantTable merchants={merchants} />} />
          <Route path="/merchant/:id" element={<MerchantDetails merchants={merchants} />} />
          <Route path="/create-new-user" element={<NewUserForm />} /> {/* Add a route for the NewUserForm */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
