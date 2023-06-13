import Home from "../pages/Home"
import CityList from "../pages/CityList"
import { Navigate } from "react-router-dom"
import News from "../pages/News"
import Profile from "../pages/Profile"
import Index from "../pages/Index"
import HouseList from "../pages/HouseList"
import Login_Home from "../pages/Login/Login_Home"
import Login from "../pages/Login/Login"
import Regist from "../pages/Login/Regist"
import List from '../pages/List/List'
import Private from "../utils/admin/Private"

export default [
  {
    path: '/home',
    element: <Private><Home /></Private>,
    children: [
      {
        path: '',
        element: <News />
      },
      {
        path: 'index',
        element: <Index />
      },
      {
        path: 'list',
        element: <List />
      },
      {
        path: 'profile',
        element: <Profile />
      },
    ]
  },
  {
    path: '/login',
    element: <Login_Home />,
    children: [
      {
        path: '',
        element: <Login />
      },
      {
        path: 'register',
        element: <Regist />
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to='/login' />,
  }
]
