import { useLocation, Navigate } from "react-router-dom";
import { Toast } from "antd-mobile";
function Private(props) {
  let token = localStorage.getItem("token");

  let location = useLocation();

  if (token) {

    console.log(props)
    return <>{props.children}</>
  } else {
    Toast.show({
      icon: 'fail',
      content: '身份信息失效请重新登录',
    })
    return <Navigate to={{ 'pathname': '/login' }} ></Navigate>
  }
}

export default Private;