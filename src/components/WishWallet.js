import React from 'react';
import Star from '../assets/star.png';
import './WishWallet.css';

export default function WishWallet() {
    return (
        <div className="wallet-div">
            <div className="title-wallet">
                <img src={Star} alt="Shooting Star" />
                <h2 className="title-wallet">Wish Wallet</h2>
            </div>
        </div>
    )
}