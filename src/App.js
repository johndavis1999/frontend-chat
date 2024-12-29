import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './components/context/GlobalVariables'; 
import Chat from './components/chat/index';
import Login from './components/auth/login';
import Register from './components/auth/register';
import RecentChats from './components/chat/options/recentChats';
import Contacts from './components/chat/options/contacts';
import RecentCalls from './components/chat/options/recenCalls';

function App() {
  return (
    <GlobalProvider>  {/* Envuelve todo con GlobalProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat />}>
            {/* Rutas anidadas dentro de Tabs */}
            <Route index element={<RecentChats />} />
            <Route path="calls" element={<RecentCalls />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route path="/calls" element={<RecentCalls />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
