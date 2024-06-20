import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Layout from './Layout.jsx';
import NotFound from './components/NotFound/NotFound.jsx'; // Import the NotFound component
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
// import Github from './components/Github/Github.jsx';

// Create a router with routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      {/* <Route path='github' element={<Github />} /> */}
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
