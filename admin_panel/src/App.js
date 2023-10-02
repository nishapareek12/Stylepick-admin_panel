
import './App.css';
import Header from './components/Header/Header';
// import Dashboard from './components/dashboard/Dashboard';
import MerchantTable from './components/merchant details/MerchantTable';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
   <Navbar/>
   <Header/>
   {/* <Dashboard/> */}
   <MerchantTable/>
   </div>
  );
}

export default App;
