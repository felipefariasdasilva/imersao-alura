import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import PageDefault from '../PageDefault'
import FormField from '../FormField'


export default function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000'
    }
    const [categorias, setCategorias] = useState([])
    const [values, setValues] = useState(valoresIniciais)

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor
        })
    }

    function handleChange(event) {
        const {getAttribute, value} = event.target
        setValue(getAttribute('name'), value)
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {
                values.nome
            }</h1>

            <form onSubmit={
                function handleSubmit(event) {
                    event.preventDefault()
                    setCategorias([
                        ...categorias,
                        values
                    ])
                    setValues(valoresIniciais)
                }
            }>
                <FormField
                    label='nome da categoria' 
                    type='text'
                    name='nome'
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField 
                    label='descricao'
                    type='text'
                    name='descricao'
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField 
                    label='cor'
                    type='color'
                    name='cor'
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul> {
                categorias.map((categoria, index) => {
                    return (
                        <li key={
                            `${categoria}${index}`
                        }>
                            {
                            categoria.nome
                        } </li>
                    )
                })
            } </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}
