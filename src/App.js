
import './App.css';
import { BrowserRouter, HashRouter, NavLink, Route, Routes } from "react-router-dom";
import Maincomponent from './components/Maincomponent';
import About from './components/Abort';
import DashBoard from './components/DashBoard';
import CreateBGC from './components/BGC/CreateBGC';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import { useState } from 'react';
import cn from 'classnames';

function App() {

  const [toggle, setToggle] = useState(false);

  const classess = cn('pusher', 'bottom', { 'dimmed': toggle })

  function toggleMenu() {
    setToggle(!toggle);
  }
  return (
    <div className="App">
      <div className="header" />
      <Header onToggleMenu={toggleMenu} />
      <BrowserRouter>
        <div className='ui attached pushable' style={{ height: '500px' }}>
          <SideMenu toggleMenu={toggle} />
          <div className={classess}>
            <div className="App-header">

              {/* <div className="ui div-tab">
            <NavLink to="/">
              Home
            </NavLink>

            <NavLink
              to="/about"
            >
              &nbsp; |  About
            </NavLink>
          </div> */}
              <br />


              <Routes>
                <Route exact path="/" element={<DashBoard />} />
                <Route exact path="/home" element={<DashBoard />} />
                <Route path="/about" element={<About />} />
                <Route path="/createBGC" element={<CreateBGC />} />
              </Routes>

            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
