import React from 'react'
import WishWallet from './WishWallet'
import './Tokens.css'


export default function Tokens() {
    return (
        <div className='token-title'>
            <WishWallet />
            <button className='button-add-token'><a href='/addtoken'>Add token</a></button>
        </div>
    )
}
