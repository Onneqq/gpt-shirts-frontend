import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLoginButton from './components/login';


  const handleLoginSuccess = () => {
    // Do something when the user successfully logs in to Google...
    console.log('User logged in!');
  };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <GoogleLoginButton
          buttonText="Log in with Google"
          onLoginSuccess={handleLoginSuccess}
        />
      </header>
    </div>
  );
};

export default App;