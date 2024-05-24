import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Weather from './Components/Weather.jsx'
import Prayer from './Components/Prayer.jsx'
import Calender from './Components/Calender.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/vite-react-router/' element={<App />}>
      <Route index element={<Home />} />
      <Route
        path='weather/:city'
        element={<Weather />}
        loader={async ({ params }) => {
          const key = '3d979c83a3f95778d1e908fc96d75805';
          let URL = `https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=${key}`;
          const res = await fetch(URL);
          const data = await res.json();
          return data;
        }}
      />
      <Route path='prayer' element={<Prayer />} />
      <Route path='calender' element={<Calender />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
