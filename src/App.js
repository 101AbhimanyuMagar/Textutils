import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enable","success");
      
      // setInterval(()=>{
      //   document.title = "TextUtils is Amazing Mode";
      // },2000);
      // setInterval(()=>{
      //   document.title = "TextUtils is TextUtils Now";
      // },1500);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enable","success");
      // document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes>
          <Route exact path="/about" 
            element={<About/>}>
          </Route>
          <Route exact path="/"
            element = {}> */}<TextForm showAlert={showAlert} heading="Eneter the text to analyze below" mode={mode}/>
          {/* </Route>
        </Routes> */}
        
        {/* <About/> */}
      </div>
    {/* </Router>   */}
    </>
  );
}

export default App;
