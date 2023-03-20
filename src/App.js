import React from 'react';
//navegacion
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//css
import './App.css';
//pages
import HomePage from './pages/Home'
import ProductPage from './pages/Product';
import BlogPage from './pages/Blog'
import NotFoundPage from './pages/NotFound';
//componentes
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import FormPropsTextFields from './components/Form/Form'
import CardList from './components/Cards/CardList';
import CardDetail from './components/Cards/CardDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/productos' element={<ProductPage/>}/>
          <Route path='/login' element={<FormPropsTextFields/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/productos/:categoria' element={<CardList/>}/>
          <Route path='/productos/:categoria/:id' element={<CardDetail/>}/>
          <Route path='*' element={<HomePage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
