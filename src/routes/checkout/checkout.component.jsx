import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import { emptyAllCart } from "../../store/cart/cart.action";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const emptyTheCart = () => dispatch(emptyAllCart());

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
      {cartTotal > 0 ? (
        <Fragment>
          {" "}
          <div style={{ marginTop: "30px", fontSize: "1.5rem", color: "red" }}>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 04/24 - CVV: 123 -ZIP: 42424
          </div>
          <PaymentForm emptyTheCart={emptyTheCart} />
        </Fragment>
      ) : (
        ""
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
