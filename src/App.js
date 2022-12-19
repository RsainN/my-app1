import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const [switchText, setswitchText] = useState('Dark Mode')
  const [alert, setAlert] = useState(null)
  const toggleModee = () => {
    if (mode === 'light') {
      setMode('dark')
      setswitchText('Light Mode')
      document.body.style.backgroundColor = '#050e2a';
      showAlert('Dark mode has been enabled', 'success')
    }
    else {
      setMode('light')
      setswitchText('Dark Mode')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success')
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={toggleModee} switchtext={switchText} />            {/*By giving values*/}
        {/* <Navbar /> */}                                                      {/*By default values*/}
        {/* <Navbar /> */}                                                      {/*will give error because both values are required */}
        <Alert putalert={alert} />
        <div className="container my-2">
          <Routes>
            <Route path='/About' element ={<About />} />
            <Route path='/' element={<TextForm heading="Enter the text to analyze below" mode={mode} showalert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
