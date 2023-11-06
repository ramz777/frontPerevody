import React from 'react';
import logo from './logowhite.png'
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo}><img src='https://www.gstou.ru/images/anons/20210422155650109.jpg' alt="" /></div>
            <div className={s.title}>Какое-то название - еще какой то текст</div>
        </div>
    );
};

export default Header;