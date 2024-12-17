import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
