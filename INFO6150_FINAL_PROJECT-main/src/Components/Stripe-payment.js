// StripePaymentForm.js
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const StripePaymentForm = ({ amount, onSuccessfulPayment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const CARD_ELEMENT_OPTIONS = {
        style: {
          base: {
            color: "#303238",
            fontSize: "16px",
            fontFamily: "sans-serif",
            fontSmoothing: "antialiased",
            "::placeholder": {
              color: "#CFD7DF"
            }
          },
          invalid: {
            color: "#e5424d",
            ":focus": {
              color: "#303238"
            }
          }
        }
      };
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            onSuccessfulPayment();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
           <div className='text-center'>
           <button className='btn btn-primary' type="submit" disabled={!stripe}>
                Pay ${amount}
            </button>
           </div>
        </form>
    );
};

export default StripePaymentForm;