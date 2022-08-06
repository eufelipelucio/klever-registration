import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WishWallet from "./WishWallet";
import './EditToken.css';

export default function editToken() {

    const {id} = useParams();
    const history = useNavigate();

    const valores = JSON.parse(localStorage.getItem('items')) || [];
    const token = valores.find(item => item.id === id);

    const [tokenName, setTokenName] = useState(token.token);
    const [balance, setBalance] = useState(token.balance);

    console.log(tokenName)
    console.log(balance)

   const editItems=()=> {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        const index = items.findIndex(i => i.id === id);
        items[index].token = tokenName;
        items[index].balance = balance;
        localStorage.setItem('items', JSON.stringify(items));
        history('/');
    }
    const removeItem = ()=> {
        const conf = window.confirm('Deseja remover esse token?'); 
        if(conf === true){
            const items = JSON.parse(localStorage.getItem('items')) || [];
            const index = items.findIndex(i => i.id === id);        
            
            items.splice(index, 1);
            localStorage.setItem('items', JSON.stringify(items));
            back();
        }
    }
    const back = () => {
        history('/');
    }

    return (
        <div className="edit-token-div">
            <WishWallet />
            <div className='edit-token-title'>
                <h2>Edit Token</h2>
                <button onClick={back}>Voltar</button>
            </div>
            <form className="form-edit">
                <label>Token</label>
                <input  onChange={(e)=>{
                    setTokenName(e.target.value)
                }} defaultValue={tokenName}  type="text" id='token' name='token' required  />
                <label>Balance</label>
                <input onChange={(e)=>{
                    setBalance(e.target.value)
                }} defaultValue={balance} type="number" id='balance' pattern="^[+-]?(d+|d{1,3}(.d{3})*)(,d*)?$" name='balance' required/>
                <div className="buttons-edit">
                    <button className="btn-edit" onClick={editItems} type='submit'>Save</button>
                    <button className="btn-remove" onClick={removeItem} type='submit'>Remove</button>
                </div>
            </form>
        </div>
    );
}