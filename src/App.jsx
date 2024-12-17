import './App.css'

import Header from './components/header/Header';
import AddCar from './components/car-add/CarAdd';
import CarPage from './components/car-page/CarPage';
import Home from './components/home/Home';

import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>

      <Header />

      <main>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/add-car' element={<AddCar />} />
          <Route path='/car/all' element={<CarPage />} />

        </Routes>

      </main>

    </>
  )
}

export default App
