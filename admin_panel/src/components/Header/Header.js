// import React from 'react'
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import { Link } from 'react-router-dom';
// import './Header.css'
// function Header() {
//   return (
// <div className="Header">
//     <section className="dashbrdhead">
//         dashboard
//     </section>
//     <section className="overview">
//         <DashboardIcon className='dashIcon'/>
//         <div className='ov'>Overview</div>
//         <Link to="/create-new-user">
//           <button className="ovbtn">Create New User</button>
//         </Link>
//     </section>
// </div>
//   )
// }

// export default Header

import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Header.css';

function Header() {
  const navigate = useNavigate(); // Get the navigate function

  // Define a function to check the current route
  const isMerchantTablePage = () => {
    return window.location.pathname === '/';
  };

  return (
    <div className="Header">
      <section className="dashbrdhead">
        dashboard
      </section>
      <section className="overview">
        <DashboardIcon className='dashIcon' />
        <div className='ov'>Overview</div>
        {/* Conditionally render the button based on the route */}
        {isMerchantTablePage() && (
          <button
            className="ovbtn"
            onClick={() => navigate('/create-new-user')}
          >
            Create New User
          </button>
        )}
      </section>
    </div>
  );
}

export default Header;
