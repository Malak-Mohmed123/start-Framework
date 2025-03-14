import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./Pages/MainLayout/MainLayout"
import About from "./Pages/About/About"
import Portfolio from "./Pages/Portfolio/Portfolio"
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import Click from "./Components/Click/Click";
import Click2 from "./Components/Click2/Click2";
import Click3 from "./Components/Click3/Click3";
import Home from "./Pages/Home/Home";



export default function App() {

 const routes = createBrowserRouter([
    {path:'',element:<MainLayout/>,
     children:[
      {path:'*',element:<NotFound/>},
      {index:'/',element:<Home/>},
      {path:'About',element:<About/>},
      {path:'Portfolio',element:<Portfolio/>},
      {path:'Contact',element:<Contact/>},
      {path:'Click',element:<Click/>},
      {path:'Click2',element:<Click2/>},
      {path:'Click3',element:<Click3/>}
      
      

    ],
    },
]);







  return <RouterProvider router={routes}> </RouterProvider>
}







/* 
pages:
MainLayout ..
Home..
Cart..
Products..
Categories..
ProductDetails..
Login..
Register..
NotFound..

components:
Navbar..
Footer..
MainSlider..
CategorySlider..*/