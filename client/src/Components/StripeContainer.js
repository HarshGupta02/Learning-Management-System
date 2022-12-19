import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { Stripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_51KR8R1SIj9g28rKLoublcGWKYTSVVnGEqAPy2HorkcYA3er9HabaZSBZs2yV37nakwLfv7NtnOjAyETW3yOVD8iN00Wtujn5Wj"
const stripeTestPromise = loadStripe(PUBLIC_KEY);

function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm />
    </Elements>
  )
}

export default StripeContainer