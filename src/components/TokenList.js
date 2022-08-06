import React from "react"
import './TokenList.css'
import IconEdit from './../assets/icon-edit.png'


export default function TokenList() {

    const valores = JSON.parse(localStorage.getItem('items')) || [];

    const [id, setId] = React.useState();

    
    
console.log(valores)
console.log(setId)
   
    return (
      <div className="table-token">
        {valores.map(valor => (
            <table key={valor.id}>
                <tr  className="title-table">
                    <th>Token</th>
                    <th>Balance</th>
                </tr>
                <tr className="info-table">
                    <td>
                        <a onClick={(e)=>{
                                setId(e.target.id)
                            }}  href={`/editToken/${id}`}>
                            <img className="img-edit-token" id={valor.id} src={IconEdit} alt="Edit Token"/>
                        </a>
                        {valor.token}</td>
                    <td>{valor.balance}</td>
                </tr>
            </table>
        ))}
      </div>
    )
  }