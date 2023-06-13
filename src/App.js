import { Button } from "antd-mobile";
import { BrowserRouter, Route, Link, useRoutes } from "react-router-dom";
import routers from './router/index'


function App() {
  const element = useRoutes(routers)
  return (

    <div className="App">

      {/* 菜单导航 */}

      {/* 导入路由 */}
      {element}
    </div>

  );
}

export default App;
