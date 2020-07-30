import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../PageDefault';
import FormField from '../FormField';
import Button from '../Button';

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setValue(name, value);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : '';

    fetch(URL)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategorias([...response]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {
                values.nome
            }
      </h1>

      <form onSubmit={
                function handleSubmit(event) {
                  event.preventDefault();
                  setCategorias([
                    ...categorias,
                    values,
                  ]);
                  setValues(valoresIniciais);
                }
            }
      >
        <FormField
          label="nome da categoria"
          type="text"
          name="nome"
          value={
                        values.nome
                    }
          onChange={handleChange}
        />

        <FormField
          label="descricao"
          type="textarea"
          name="descricao"
          value={
                        values.descricao
                    }
          onChange={handleChange}
        />

        <FormField
          label="cor"
          type="color"
          name="cor"
          value={
                        values.cor
                    }
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <div>
        loading...
      </div>

      <ul>
        {
                categorias.map((categoria) => (
                  <li key={
                        `${
                          categoria.nome
                        }`
                    }
                  >
                    {
                        categoria.nome
                    }
                  </li>
                ))
            }

      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}
