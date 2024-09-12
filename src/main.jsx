
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Router, Route,Routes } from 'react-router-dom';
import { AppProvider } from './Context';

import "./index.css";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails'

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="about" element={<About/>} />
              <Route path="book" element={<BookList/>} />
              <Route path="/book/:id" element={<BookDetails/>} />  
            </Routes>
    </BrowserRouter>
  </AppProvider>
)
