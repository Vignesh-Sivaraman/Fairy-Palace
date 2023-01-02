import { useState, FormEvent } from "react";
import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from "./payment-form.styles";
import { useNavigate } from "react-router-dom";

const PaymentForm = ({ emptyTheCart }) => {
  const navigate = useNavigate();
  //   const stripe = useStripe();
  //   const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  //   const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();

  //     if (!stripe || !elements) {
  //       return;
  //     }

  //     setIsProcessingPayment(true);

  //     const response = await fetch("/.netlify/functions/create-payment-intent", {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ amount: amount * 100 }),
  //     }).then((res) => res.json());

  //     const {
  //       paymentIntent: { client_secret },
  //     } = response;

  //     const cardDetails = elements.getElement(CardElement);

  //     if (!ifValidCardElement(cardDetails)) return;

  //     const paymentResult = await stripe.confirmCardPayment(client_secret, {
  //       payment_method: {
  //         card: cardDetails,
  //         billing_details: {
  //           name: currentUser ? currentUser.displayName : "Guest",
  //         },
  //       },
  //     });

  //     setIsProcessingPayment(false);

  //     if (paymentResult.error) {
  //       alert(paymentResult.error);
  //     } else {
  //       if (paymentResult.paymentIntent.status === "succeeded") {
  //         alert("Payment Successful");
  //       }
  //     }
  //   };

  const stripePromise = loadStripe(
    "pk_test_51K11LVSEPEmhN4c2o2qQmMK7N07mPHzJMmSy5CpwXb9mgbTRotBNrxl9lnWiY6qkbEVz3PQbIqNKdwhyqMhTGwLw003V1gclUL"
  );
  async function handlePay(e, elements, stripe) {
    e.preventDefault();
    if (!stripe || !elements) return;
    setIsProcessingPayment(true);
    const cardElement = elements.getElement(CardElement);
    // eslint-disable-next-line
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    setIsProcessingPayment(false);
    if (error) alert("Something wrong, check card credentials");
    else {
      alert("success");
      emptyTheCart();
      navigate("/");
    }
  }

  return (
    <Elements stripe={stripePromise}>
      <PaymentFormContainer>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <FormContainer
              onSubmit={(e) => handlePay(e, elements, stripe)}
              className="stripe-elements"
            >
              <h2>Credit Card Payment: </h2>
              <CardElement />
              <PaymentButton
                isLoading={isProcessingPayment}
                buttonType={BUTTON_TYPE_CLASSES.inverted}
              >
                Pay now
              </PaymentButton>
            </FormContainer>
          )}
        </ElementsConsumer>
      </PaymentFormContainer>
    </Elements>
  );
};

export default PaymentForm;
