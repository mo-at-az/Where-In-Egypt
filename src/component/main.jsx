import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Center from './Center.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Tripplanner from './tripplanner.jsx'
import Destinations from './Destinations.jsx'


const routes = createBrowserRouter([
    { path: '/', element: <App />, children: [
        { path: '/', element: <Center /> },
        { path: '/about', element: <About/> },
        { path: '/contact', element: <Contact /> },
        { path: '/tripplanner', element: <Tripplanner /> },
        { path: '/destinations', element: <Destinations /> },
    ] }
    
]);

createRoot(document.getElementById('root')).render(
      <RouterProvider router={routes} />
)
