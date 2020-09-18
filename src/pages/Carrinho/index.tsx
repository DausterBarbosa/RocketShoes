import React, {useContext} from "react";

import CartContext from "../../Context/CartContext";

import {Container, TableProduct} from "./styles";

import {MdAddCircleOutline, MdRemoveCircleOutline, MdDelete} from "react-icons/md";

function Carrinho(){
    const {cartItems, addToCart, removeToCart, deleteToCart} = useContext(CartContext);

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
                    <span>{product.priceFormatted}</span>
                    </td>
                    <td>
                        <div>
                            <button type="button" onClick={() => addToCart(product)}>
                                <MdAddCircleOutline color="#7159c1" size={20}/>
                            </button>
                            <input type="nuber" readOnly value={product.mount}/>
                            <button type="button" onClick={() => removeToCart(product)}>
                                <MdRemoveCircleOutline color="#7159c1" size={20}/>
                            </button>
                        </div>
                    </td>
                    <td>
                        <strong>{product.subtotal}</strong>
                    </td>
                    <td>
                        <button type="button" onClick={() => deleteToCart(product)}>
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