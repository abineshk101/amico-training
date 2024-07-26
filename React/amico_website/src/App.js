import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from "./utls/home/home"
import MobApp from './utls/mob_app_dev/mob_app'
import WebApp from './utls/web_app_dev/web_app'
import ErpApp from './utls/erp_app_dev/erp_app'
import Ecommerce from './utls/e_commerce_dev/e-commerce'
import DesktopApp from './utls/desktop_app_dev/desktop_app'
import Consult from './utls/consulting/consult'
import Agile from './utls/agile/agile'
import Digital from './utls/digital/digital'
import AutoTest from './utls/auto_test/auto_test'
import ManualTest from './utls/manual_test/manual_test'
import Contact from './utls/contact/contact'
import About from './utls/about/about'
import { Career } from './utls/career/career'

const router=createBrowserRouter([
{
  path:"/",
  element:<Home/>
},
{
  path:"/mob-app",
  element:<MobApp />
},
{
  path:"/web-app",
  element:<WebApp/>
},
{
  path:"/erp-app",
  element:<ErpApp />
},
{
  path:"/e-commerce",
  element:<Ecommerce />
},
{
  path:"/desktop-app",
  element:<DesktopApp />
},
{
  path:"/consulting",
  element:<Consult/>
},
{
  path:"/agile",
  element:<Agile/>
},
{
  path:"/digital",
  element:<Digital />
},
{
  path:"/auto-testing",
  element:<AutoTest />
},
{
  path:"/manual-testing",
  element:<ManualTest />
},
{
  path:"/contact-us",
  element:<Contact/>
},
{
  path:"/about",
  element:<About />
},
{
  path:"/career",
  element:<Career />
}
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
export default App;
