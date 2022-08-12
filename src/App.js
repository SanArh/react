import './App.css';
import Header from './components/Header/Header';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Pizza from './pages/Pizza/Pizza';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/:id" element={<Pizza />} />
      </Routes>
    </div>
  );
}

export default App;
