import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/login/login_top.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { patch, post } from '../../utils/axios/myaxios'
import { Toast } from 'antd-mobile'
import http from '../../utils/axios/myaxios'
import axios from 'axios'

import { useRef } from 'react'
import { useState } from 'react'
import { Axios } from 'axios'
export default function Login() {
  let navigate = useNavigate();
  let password = useRef('password')
  let username = useRef('username')
  const [psw, setpsw] = useState()
  const [user, setuser] = useState()

  // const [data, setdata] = useState({
  //   username: '',
  //   password: ''
  // })
  const data = [{
    username: '',
    password: ''
  }]
  const dataChange = (e) => {
    // const data1=[{
    //   [e.target.name]:e.target.value
    // }]
    data[0][e.target.name] = e.target.value
    console.log(data)

  }
  const login = () => {
    setpsw(password.value)
    console.log(data)
    http('post', '/users/login', data[0]).then((res) => {
      console.log(res)
      password.current.value = ''
      username.current.value = ''
      console.log(password)
      if (res.code == 200) {
        Toast.show({
          icon: 'success',
          content: res.message,
        })
        localStorage.setItem("token", res.result.token)
        navigate('/home')
      } else {
        Toast.show({
          icon: 'fail',
          content: res.message,
        })
      }
    }
      ,
      (err) => {
        console.log(err)
      }
    )
    // patch('/users/updatepassword', { password: '123456789' }).then(
    //   (response) => {
    //     console.log(response)
    //   },
    //   (err) => {
    //     console.log(err)
    //   }
    // );
  }
  return (
    <div>
      <div className='login_top'>
        <div className='login_navBar'>
          <div className='left'>
            <svg t="1685886518869" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40089" width="36" height="36"><path d="M512 1255.489906" p-id="40090" fill="#ffffff"></path><path d="M498.081951 943.76654" p-id="40091" fill="#ffffff"></path><path d="M602.774335 744.103938 359.003798 500.3334 602.774335 256.562862c8.801119-8.801119 8.801119-23.128523 0-31.827304l0 0c-8.801119-8.801119-23.128523-8.801119-31.827304 0L313.360784 482.321807c-4.912253 4.912253-7.061363 11.564261-6.447332 18.011593-0.614032 6.447332 1.535079 13.09934 6.447332 18.011593l257.586248 257.586248c8.801119 8.801119 23.128523 8.801119 31.827304 0C611.575455 767.232461 611.575455 752.905057 602.774335 744.103938z" p-id="40092" fill="#ffffff"></path></svg>
          </div>
          <div className='right'>
            Login
          </div>
        </div>

        <div className='login_card'>
          <div className='top'>Enter your account</div>

          <div className='center'>
            <div>
              <svg t="1685892056589" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="41218" data-spm-anchor-id="a313x.7781069.0.i86" width="35" height="35"><path d="M501.545417 7.225005C224.545939 7.225005 0 231.770945 0 508.770423c0 276.977803 224.545939 501.516517 501.545417 501.516517 276.992253 0 501.538192-224.538714 501.538192-501.516517C1003.08361 231.770945 778.53767 7.225005 501.545417 7.225005zM501.545417 985.830297c-263.481493 0-477.074324-213.592831-477.074324-477.059874 0-263.481493 213.592831-477.074324 477.074324-477.074324 263.488718 0 477.074324 213.592831 477.074324 477.074324C978.619742 772.244691 765.034135 985.830297 501.545417 985.830297z" fill="#F4DCCB" p-id="41219" data-spm-anchor-id="a313x.7781069.0.i82" class=""></path><path d="M757.89583 774.686742c0.4624 1.640076-0.628575 0.47685-0.180625 2.145827L757.89583 774.686742c0 8.409906-6.791505 15.186961-15.201411 15.186961-8.409906 0-15.880562-6.777055-15.880562-15.186961l0 0c-29.297396-96.706696-119.060862-167.150497-225.333465-167.150497-106.279828 0-196.484019 73.803429-225.78864 170.524575l0.411825-3.374077c0 10.078882-10.042757 15.186961-15.851662 15.186961-8.402681 0-15.194186-6.777055-15.194186-15.186961l0 0c0.4046-1.640076 0.50575-3.244027 0.968151-4.913004 0.151725-0.411825 0.21675-0.859776 0.3757-1.271601 24.817893-84.922712 90.637691-152.332012 174.780103-178.963381-64.721597-30.279997-109.64668-95.78912-109.64668-171.955126 0-104.878177 85.031087-189.945389 189.945389-189.945389 104.878177 0 189.938164 85.059987 189.938164 189.945389 0 76.166006-44.968433 141.675129-109.668355 171.940676 84.142412 26.63137 149.954985 94.055119 174.772878 178.963381C756.710929 768.899513 757.773005 774.274917 757.89583 774.686742L757.89583 774.686742zM661.030184 417.583631c0-88.116165-71.440852-159.557017-159.549792-159.557017-88.116165 0-159.549792 71.440852-159.549792 159.557017 0 88.145065 71.433627 159.549792 159.549792 159.549792C589.589332 577.140648 661.030184 505.728695 661.030184 417.583631L661.030184 417.583631zM661.030184 417.583631" fill="#FF9D4D" p-id="41220" data-spm-anchor-id="a313x.7781069.0.i85" class="selected"></path></svg>
              <input type='text' placeholder='account' ref={username} onChange={dataChange} name='username'></input>
            </div>

            <div>
              <svg t="1685942738769" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="44446" width="31" height="31"><path d="M639.9 351.9C639.9 192.9 511.1 64 352 64S64.2 192.8 64.2 351.9c0 158.9 128.8 287.9 287.9 287.9 158.9-0.1 287.8-128.9 287.8-287.9z m-367.4 16.4c-50.4 0-91.3-40.9-91.3-91.3s40.9-91.3 91.3-91.3 91.3 40.9 91.3 91.3-40.9 91.3-91.3 91.3z" p-id="44447" fill="#61D2B4"></path><path d="M930 732.3L663.8 455l-43 71.6h0.7l253.4 266.3-1.8 27.6-45.9 1.8-237.7-250.4c-39.1 46-85.6 70.5-85.6 70.5l5.5 112 53.3 58.8H706L704.2 949l126.7 11s12.9-12.9 91.9-90c78.9-77.1 7.2-137.7 7.2-137.7z" p-id="44448" fill="#61D2B4"></path></svg>
              <input type='password' placeholder='password' ref={password} onChange={dataChange} name='password'></input>
            </div>

          </div>

          <div className='bottom' onClick={login}>
            <div className='bottom_contain'>
              <svg t="1685943390532" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="45627" width="25" height="25"><path d="M925.6 559.2L152 145.6c-11.2-5.6-24.8 3.2-23.2 15.2l60 714.4c0.8 11.2 12 17.6 22.4 13.6L460.8 784l136.8 155.2c8.8 9.6 24 5.6 27.2-6.4l65.6-245.6 235.2-99.2c11.2-5.6 12-22.4 0-28.8z m-328 305.6l-72-128-368-568 488 504-48 192z" p-id="45628" data-spm-anchor-id="a313x.7781069.0.i102" class="selected" fill="#61D2B4"></path></svg>
              <div>Login</div>
            </div>
          </div>


        </div>

        <div className='line'>
        </div>

        <div className='login_ToRegister'>
          <div className='contain'>
            <div className='left'>无账号?</div>
            <NavLink to='/login/register' className='right'>注册</NavLink>
          </div>

        </div>
      </div>


      {/* <NavLink to='/login/register'>注册</NavLink> */}
    </div>
  )
}
