import React, {useContext} from "react";

import CartContext from "../../Context/CartContext";

import {Container, TableProduct} from "./styles";

import {MdAddCircleOutline, MdRemoveCircleOutline, MdDelete} from "react-icons/md";

function Carrinho(){
    const {cartItems} = useContext(CartContext);

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
                {cartItems.map(product => (
                    <tr key={product.id}>
                    <td>
                        <img src={product.image} alt={product.title}/>
                    </td>
                    <td>
                    <strong>{product.title}</strong>
                    <span>{product.price}</span>
                    </td>
                    <td>
                        <div>
                            <button>
                                <MdAddCircleOutline color="#7159c1" size={20}/>
                            </button>
                            <input type="nuber" readOnly value={product.mount}/>
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
                ))}
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