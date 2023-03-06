import React from 'react'
import '../styles/BurgerShow.css'

const BurgerShow = ({burger}) => {
  return (
    <div className='menuBurger'>
            <div className='image'>
                <img src={burger.image} alt="" />
            </div>

            <div className='body'>
                <h5>{burger.title}</h5>
                <p>{burger.content}</p>
                <p>{burger.price}</p>
            </div>
           
     
    </div>
  )
}

export default BurgerShow
