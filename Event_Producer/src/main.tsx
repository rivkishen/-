import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Users } from './Component/users';
import { Producer } from './Component/producer';
import { Menu } from './Component/menu.tsx';
import { Outlet } from 'react-router-dom';
import { EventProvider } from './context/event.context.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <BrowserRouter>
   
    <EventProvider>
      <Menu />
        <Routes>
          <Route path="producer" element={<Producer />} />
          <Route path="users" element={<Users />} />
        </Routes>
        <Outlet />
      </EventProvider>
      </BrowserRouter>
  </StrictMode>,
)
