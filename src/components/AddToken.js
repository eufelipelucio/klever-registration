import React from 'react'
import WishWallet from './WishWallet'
import './AddToken.css';
import crypto from 'crypto';
import { useNavigate } from 'react-router-dom';


export default function AddToken() {

  const history = useNavigate()

  const [tokenName, setTokenName] = React.useState('');
  const [balance, setBalance] = React.useState('');

  const setItems = () => {
    const items = JSON.parse(localStorage.getItem('items')) || [];

    const token = items.map(item => item.token === tokenName ? true: false);
    
    

    tokenName.length > 0 && balance.length > 0 ?
    token.includes(true) ? alert('Token já existe') :
      items.push({
        id: crypto.randomBytes(30).toString('hex'),
        token: tokenName,
        balance: balance,
      }) && back() : alert('Preencha todos os campos');

    localStorage.setItem('items', JSON.stringify(items));
  }

  const back = () => {
    history('/');
  }

  return (
    <div className='add-token-div'>
      <WishWallet />
      <div className='add-token-title'>
        <h2>Add Token</h2>
        <button onClick={back}>Voltar</button>
      </div>
      <form className='form-add'>
        <label>Token</label>
        <input onChange={(e) => {
          setTokenName(e.target.value.toUpperCase())
        }} type="text" id='token' name='token' required />

        <label>Balance</label>
        <input onChange={(e) => {
          setBalance(e.target.value.toUpperCase())
        }} type="number"  id='balance' name='balance' required />

        <button onClick={setItems} type='submit'>Save</button>
      </form>


    </div>
  )
}
