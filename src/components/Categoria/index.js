import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import PageDefault from '../PageDefault'


export default function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000'
    }
    const [categorias, setCategorias] = useState(['teste'])
    const [values, setValues] = useState(valoresIniciais)

    function setValue(chave, valor){
        setValues({
            ...values, [chave]: valor
        })
    }

    function onChangeHandler(event) {
        setValues('descricao', event.target.value)
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={
                function handleSubmit(event) {
                    event.preventDefault()
                    setCategorias([
                        ...categorias,
                        values
                    ])
                }
            }>
                <div>
                    <label>
                        Nome da Categoria:
                        <input type="text"
                            value={values.nome}
                            onChange={
                                function onChangeHandler(event) {
                                    setValue('nome', event.target.value)
                                }
                            }/>
                    </label>
            </div>

            <div>
                <label>
                    Descrição:
                    <textarea type="text"
                        value={values.descricao}
                        onChange={
                            function onChangeHandler(event) {
                                setValues('descricao', event.target.value)
                            }
                        }/>
                </label>
        </div>

        <div>
            <label>
                Cor:
                <input type="color"
                    value={values.cor}
                    onChange={
                        function onChangeHandler(event) {
                            setValues(event.target.value)
                        }
                    }/>
            </label>
    </div>

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
                {categoria} </li>
        )
    })
} </ul>

<Link to="/">
    Ir para home
</Link></PageDefault>
    )
}
