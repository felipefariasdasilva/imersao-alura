import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home/Home';
import CadastroVideo from './pages/cadastro/video';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './components/Categoria';

const Pagina404 = () => (<div>pagina 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
