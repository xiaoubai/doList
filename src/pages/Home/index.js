import { Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import { useRoutes, Routes, Route } from 'react-router-dom'
import routers from '../../router/index'
import { Badge, TabBar, NavBar, Switch } from 'antd-mobile'
import '../../css/home/home.css'
import { useLocation, useNavigate } from 'react-router-dom'

import Add_ from '../../iconfont/iconpng/jia.png'

import { Jihua, JihuaActive, Rc, RcActive, Gl, GlActive, Tj, TjActive, Add } from '../../iconfont/icon/icon'

import '../../iconfont/iconfont/iconfont.css'

// import MyTabBar from '../../components/myTabBar'

const Bottom = () => {
  const [activeKey, setActiveKey] = useState('/home/list');
  const navigate = useNavigate()
  const location = useLocation()
  // 将'home/'前缀去掉
  const pathname = location.pathname.slice(6)


  const setRouteActive = (value) => {
    setActiveKey(pathname)
    // console.log(pathname)
    navigate(value)
  }
  // const element = useRoutes(routers)
  const tabs = [
    {
      key: '',

      icon: (active) =>
        active ? <JihuaActive /> : <Jihua />,
      badge: Badge.dot,

    },
    {
      key: 'index',

      icon: (active) =>
        active ? <RcActive /> : <Rc />,
      badge: '5',

    },
    {
      key: location.pathname,
      icon: <Add />,

    },
    {
      key: 'list',

      icon: (active) =>
        active ? <GlActive /> : <Gl />,
      badge: '99+',
    },
    {
      key: 'profile',

      icon: (active) =>
        active ? <TjActive /> : <Tj />,
    },
  ]

  // const [activeKey, setActiveKey] = useState('todo')
  return (
    <div className='home_contain' >

      <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} ></TabBar.Item>
        ))}


      </TabBar>
      <div className='add'>
        <img src={Add_}></img>
      </div>
    </div >
  )

}

export default () => {
  return (
    <div>

      <Outlet />
      <Bottom />
    </div>
  )
}

