import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Users from './pages/Users/Users';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path='/products' element={ <Products /> } />
          <Route path='/users' element={ <Users /> } />
          <Route path='*' element={<h1>404</h1>}/> {/* qualquer pagina que eu não configurei cai aqui. posso criar uma pag legal pra isso e colocar o caminho como as outras*/}
        </Routes>
    </BrowserRouter>
  );
}

export default App; 