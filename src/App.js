import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './components/context/GlobalVariables'; 
import Index from './components/chat/index';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Content from './components/chat/content/content';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route path="chat/:id" element={<Content />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
