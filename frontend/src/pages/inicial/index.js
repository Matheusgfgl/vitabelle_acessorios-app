import  './styles.css';
import React, {useState} from 'react';
import Header from '../header';
import Footer from '../footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Inicio(){
  const [products, setproducts] = useState([]);

  return (
    <div>
      <Header/>
      
      <div className="inicial-container">
        

        <p>Vitabelle acessorios</p>
        <p>Vitabelle acessorios</p>
        <p>Vitabelle acessorios</p>
        <p>Vitabelle acessorios</p>
        <ul>
                    <li>
                    <strong>Produto:</strong>
                    <p>{products.title}</p>

                    <strong>Modelo:</strong
                    <p>{products.model}</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>{products.description}</p>

                    <strong>VALOR: </strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(products.value)}</p>
                    </li>
               ))}
            </ul>
            
      </div>
      <Footer/>
    </div>
  );
}
