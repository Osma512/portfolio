import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'remixicon/fonts/remixicon.css'
import Layout from './layout.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import About from './components/About/About.jsx'
import App from './App.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <div>An error occurred, please try again.</div>,
  children:[
    {
      path:"",
      element:<App/>
    },
    {
      path:"about",
      element:<AboutMe/>
    }
  ]
  },
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
