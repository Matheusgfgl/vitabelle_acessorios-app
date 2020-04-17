
import React, {useState} from 'react';
import Header from '../header'
import Foto1 from '../../assets/1.png';

export default function Inicial(){
  const [products, setproducts] = useState([]);

  return (
    <div>
     
      <div >
        <h1>Vitabelle Acessórios</h1>
        <ul>
          {products.map( products => (
            <li>
              <strong>Produto 02</strong>
              <img src = {Foto1} width="400" alt="Vitabelle"/> 
            </li>

          ))}
        </ul>

      </div>
    </div>

  );
}