import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repository/videos';
import categoriasRepository from '../../../repository/categorias';

export default function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'video padrao',
    url: 'https://www.youtube.com/watch?time_continue=497&v=hhQ3RtvmfEg&feature=emb_logo',
    categorias: 'Front End',
  });

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>

      <h1>
        Cadastro de Vídeo
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => (
          categoria.titulo === values.categoria
        ));

        videosRepository.create(
          {
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,

          },
        )
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="titulo do video"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}
