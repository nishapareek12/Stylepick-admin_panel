import React from 'react';
import {Link} from 'react-scroll';
import './Navbar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderIcon from '@mui/icons-material/Folder';
import CodeIcon from '@mui/icons-material/Code';
function Navbar() {
  return (
    <nav className='navbar'>
    <img className='logo' src="" alt="" />
    <div className='link'>
        <Link className='dashbrd'><DashboardIcon className='icon'/>Dashboard</Link>
        <Link className='merchantdet'><FolderIcon className='icon'/>Merchant Details</Link>
        {/* <Link className='integrations'> <CodeIcon className='icon'/>integrations</Link> */}
    </div>
</nav>
  )
}

export default Navbar