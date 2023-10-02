import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import './Header.css'
function Header() {
  return (
<div className="Header">
    <section className="dashbrdhead">
        dashboard
    </section>
    <section className="overview">
        <DashboardIcon className='dashIcon'/>
        <div className='ov'>Overview</div>
        <button className="ovbtn">create new user</button>
    </section>
</div>
  )
}

export default Header