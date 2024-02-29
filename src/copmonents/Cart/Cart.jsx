import "./Cart.css"

import { carts } from "../../../data"
import CartProduct from "../CartProduct/CartProduct"

export default function Cart(){
    return(
        <>
        <div className="ReactModal__Content">
            <h2>Корзина</h2>
            <div className="cart-items">
                <div className="cart-products">
                    {carts.map((cart)=>(
                        <CartProduct key={cart.id} cart={cart} />
                    ))}
                </div>
                <div className="cart-info">
                    <h5>Сумма заказа</h5>
                    <div className="cart-info-price">
                        <p>Цена товара</p>
                        <h6>5400.00 ₽</h6>
                    </div>
                    <div className="cart-info-price">
                        <p>Доставка</p>
                        <h6>0 ₽</h6>
                    </div>
                    <hr />
                    <div className="cart-info-price">
                        <p>Итого</p>
                        <h6>5400.00 ₽</h6>
                    </div>
                    <div className="promo">
                        <input type="text" placeholder="Промокод" />
                        <button type="submit">Ввод</button>
                    </div>
                    <div className="buy-btn">Перейти к покупке</div>
                </div>
            </div>
        </div>
        </>
    )
}