import React, { useState , useEffect} from 'react'
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import "./Payment.css"
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [succeeded,setSuceeded] = useState(false);
  const [processing,setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret,setClientSecret] = useState(true);
  const [fees, setFees] = useState('');

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await fetch({
          method:'post',
          url:`/payments/create?total=${fees*100}`
      });
      setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  }, [fees]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
          card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {

        console.log("successful");
        console.log(paymentIntent);
        setSuceeded(true);
        setError(null);
        setProcessing(false);

        history.replace('/')

        alert('Your Payment has been Succeessfull');
    })
  }

  const handleChange = e => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  }

  return (
    <div>
      <div className='payment_details'>
        <div>
          <p><b>Enter the Fees to be Submitted :</b></p>
          <input 
            type="number"
            name="fees"
            onChange={(e) => setFees(e.target.value)}
            autoComplete="on">
          </input>
        </div>
        <br />
        <form onSubmit={handleSubmit} className="stripee">  
          <CardElement onChange={handleChange}/>
          <div className='payment_priceContainer'> 
            <CurrencyFormat 
              renderText={(value) => {
                <h3>Order Total: {value}</h3>
              }}
              decimalScale={2}
              value = {100}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <button disabled = {processing || disabled ||
            succeeded} >
              <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Payment