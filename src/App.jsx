import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Page/Home'
import Contact from './Page/Contact'
import About from './Page/About'
import Shop from './Page/Shop'
import Productdetails from './Common/Productdetails'
import MainContext from './MainContext'
import Cart from './Page/Cart'

export default function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/shop/:slug?",
            element: <Shop />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/contact",
            element: <Contact />
          },
          {
            path: "/productdetails/:id",
            element: <Productdetails />
          },
          {
            path: "/cart",
            element: <Cart/>
          }
        ]
      }
    ], {
    basename: "/shopingindia"
  }
  )
  return (
    <>
      <MainContext>
        <RouterProvider router={routes} />
      </MainContext>
    </>
  )
}

