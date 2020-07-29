import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../PageDefault'


export default function CadastroCategoria(){

    return (
        <PageDefault>
            
            <h1>
                Cadastro Categoria
            </h1>
            
            <Link to="/cadastro/categoria">
                Ir para a Home
            </Link>
        </PageDefault>
    )
}
  