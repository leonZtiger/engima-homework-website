import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.js'
import About from './pages/about/About.js'
import Text_Gen from './pages/text-generation/Text_Gen.js'
import MainLayout from './layouts/main/MainLayout.js';
import TextEditor from './pages/text-editor/TextEditor.js'
import WritingLayout from './layouts/writing/WritingLayout.js';
import Profile from './pages/profile/Profile.js';
import AuthContext from './components/AuthContext.js';
import Login from './pages/authentication/Login.js'
import Signup from './pages/authentication/Signup.js'



function App() {

  return (
  <AuthContext>
    <BrowserRouter>

      <Routes>

        <Route
          path='/'
          index
          element={<MainLayout><Home /></MainLayout>}
        />
        <Route
          path='/about'
          element={<MainLayout><About /></MainLayout>}
        />
        <Route
          path='/writing'
          element={<MainLayout><Text_Gen /></MainLayout>}
        />
        <Route
          path='/profile'
          element={<MainLayout><Profile /></MainLayout>}
        />

        <Route
          path='/writing/text-editor/:type'
          element={<WritingLayout><TextEditor /></WritingLayout>}
        />
        <Route
          path='/signup'
          element={<MainLayout><Signup /></MainLayout>}
        />
        <Route
          path='/login'
          element={<MainLayout><Login /></MainLayout>}
        />
      </Routes>


    </BrowserRouter> </AuthContext>
  );
}

export default App;
