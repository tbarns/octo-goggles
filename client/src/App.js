import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home />;
    } else if (currentPage === 'contact') {
      return <Contact/>;
    }
    // Add more conditions for other pages you create
  };
  return (
    <div className="App">
      <Header setCurrentPage={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
