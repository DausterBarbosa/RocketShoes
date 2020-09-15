import React from "react";

import {Container, TableProduct} from "./styles";

import {MdAddCircleOutline, MdRemoveCircleOutline, MdDelete} from "react-icons/md";

function Carrinho(){
    return (<Container>
        <TableProduct>
            <thead>
                <tr>
                    <th/>
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                    <th/>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1586961574&ims=326x" alt="tenis"/>
                    </td>
                    <td>
                        <strong>Tênis muito massa</strong>
                        <span>R$122,80</span>
                    </td>
                    <td>
                        <div>
                            <button>
                                <MdAddCircleOutline color="#7159c1" size={20}/>
                            </button>
                            <input type="nuber" readOnly value={2}/>
                            <button>
                                <MdRemoveCircleOutline color="#7159c1" size={20}/>
                            </button>
                        </div>
                    </td>
                    <td>
                        <strong>R$155,90</strong>
                    </td>
                    <td>
                        <button>
                            <MdDelete color="#7159c1" size={20}/>
                        </button>
                    </td>
                </tr>
            </tbody>
        </TableProduct>
        <footer>
            <button>
                Finalizar pedido
            </button>

            <div>
                <span>total</span>
                <strong>R$1234,90</strong>
            </div>
        </footer>
    </Container>);
}

export default Carrinho;