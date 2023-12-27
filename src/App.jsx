
import React from 'react';
import Header from './components/Header.jsx'; 
// import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const sampleData = "Sample Data";

  return (
    <div className="app">
      <Header />
      {/* <Main data={sampleData} /> */}
      <Footer />
    </div>
  );
}

export default App;
