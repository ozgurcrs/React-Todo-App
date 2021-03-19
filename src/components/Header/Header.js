import React from 'react';
import './style/style.css'
import Button from '../Custom/Button'

function Header({setShowTodo}) {
   
    return (
        <div className="header">
            <h1><i className="fab fa-atlassian"></i> TODO APP</h1>
            <img src="https://cdn.wallpapersafari.com/12/56/Kj5bWR.jpg" alt="" />
            <Button onClick={() => setShowTodo(true)} IconClassName="fas fa-plus" />
        </div>
    )
}

export default Header;