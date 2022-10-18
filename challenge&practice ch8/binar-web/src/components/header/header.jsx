import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './header.module.scss'
import logo from '../../assets/logo.png'
import axios from '../../utils/axios'
export default function Header() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    getProfile()
  }, [])
  const getProfile = async () => {
    try {
      const { data } = await axios.get('/user/profile')
      setProfile(data)
    } catch (error) {
      setProfile(null)
    }
  }
  const handleLogout = () => {
    localStorage.removeItem('_q')
    window.location.reload()
  }
  return (
    <header className={style.root}>
      <img src={logo} alt='logo' className={style.logo} />
      <div className={style.divLink}>
        <Link to='/' className={style.link}>
          Home
        </Link>
        <Link className={style.link} onClick={(e) => {
                window.location.href = "https://github.com/zeraris?tab=repositories";
                e.preventDefault();
            }}>Work</Link>
        <Link className={style.link} onClick={(e) => {
                window.location.href = "mailto:arverix@gmail.com";
                e.preventDefault();
            }}>Contact Us</Link>
        <Link className={style.link} to="/me">About Me</Link>
        <Link className={style.link} to="/qna">Q&A</Link>
      </div>
      <div className={style.auth}>
        {profile === null ? (
          <Link to='/auth/login' className={style.link}>
            Sign In
          </Link>
        ) : (
          <>
            <span className={style.nama}>{profile.nama}</span>
            <span className={style.logout} onClick={handleLogout}>
              Logout
            </span>
          </>
        )}
      </div>
    </header>
  )
}
