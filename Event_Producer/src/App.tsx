import './App.css'
import { Outlet } from 'react-router'
import { Menu } from './Component/menu'
import { Users } from './Component/users';
import { Producer } from './Component/producer';
import { AddProducer } from './Component/ProducerComponent/addProducer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChehProducer } from './Component/ProducerComponent/chekProducer';
function App() {

  return (
    <>
   
    <Router>
      <h1>הפקת ארועים</h1>
      <Menu />
      <Routes>
        <Route path="/producer" element={<Producer />} />
        <Route path="/users" element={<Users />} />
        <Route path="/AddProducer" element={<AddProducer />} /> {/* הוספת Route זה */}
        <Route path="/ChekProducer" element={<ChehProducer />} /> {/* הוספת Route זה */}

      </Routes>
    </Router>

    </>
  )
}

export default App
