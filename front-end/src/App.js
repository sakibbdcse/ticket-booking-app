import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
// import DemoNavbar from './components/practice/dmo';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <DemoNavbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
