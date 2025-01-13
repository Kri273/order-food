import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import Modal from './UI/Modal';

const Header = () => {
    const { items, totalItems } = useContext(CartContext);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="Logo" />
                <h1>React Food Order App</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleModalOpen}>Cart ({totalItems})</Button>
            </nav>
            <Modal isOpen={isModalOpen} closeModal={handleModalClose} />
        </header>
    );
};

export default Header;