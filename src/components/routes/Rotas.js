import React from "react"
import AddToken from '../AddToken';
import Title from '../Title';
import Tokens from '../Tokens';
import TokenList from '../TokenList';
import EditToken from '../EditToken';
import { Routes, Route } from "react-router-dom";

export default function Rotas() {
return (
    <>
        <Title />
        <Routes>
            <Route path="/" exact>
                <Route path="/" element={<><Tokens /><TokenList /></>} />
            </Route>
            <Route path="/editToken/:id" element={<EditToken />} />
            <Route path="/addToken" element={<AddToken />} />
        </Routes>
    </>
)
}