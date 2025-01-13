import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import { useContext, useEffect } from 'react'
import CartContext from '../store/CartContext'

const Header = () => {
    const { items, totalItems } = useContext(CartContext)
    useEffect(() => {
        console.log('Current Cart Contents:', items);
    }, [items]); 
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly >Cart ({totalItems})</Button>
            {console.log(totalItems)}
            </nav>
        </header>
    )
}

export default Header