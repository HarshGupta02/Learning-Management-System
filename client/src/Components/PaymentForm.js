import React from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useState } from 'react'
import axios from "axios"
import "./PaymentForm.css";
import ClockLoader from 'react-spinners/SyncLoader';

export default function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const [fees, setFees] = useState('');
    const [loading, setLoading] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(1);
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type : "card",
            card : elements.getElement(CardElement)
        })
        if(!error){
            try{
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:5000/payment", {
                    amount : fees,
                    id
                })
                if(response.data.success){
                    console.log("Successful Payment");
                    setSuccess(true)
                    setLoading(2)
                }
            }catch(error){
                console.log("Error ", error)
                alert("Payment Failed, Try Again !!!")
            }
        }else{
            console.log(error.message)
            alert("Payment Failed, Try Again !!!")
        }
    }

    return (
        <div>
            {!success ? 
            <form onSubmit={handleSubmit}>
                <div className = "payment_details">
                <p><b>Enter the Fees Type :</b></p>
                <input 
                    type="text"
                    name="fees_type"
                    autoComplete="on">
                </input>
                <p><b>Enter the Fees Description :</b></p>
                <input 
                    type="text"
                    name="fees_description"
                    autoComplete="on">
                </input>
                <p><b>Enter the Fees to be Submitted :</b></p>
                <input 
                    type="number"
                    name="fees"
                    onChange={(e) => setFees(e.target.value)}
                    autoComplete="on">
                </input>
                {/* <ClockLoader className="loader" size={30} color={'#000000'}/> */}
                </div>
                <fieldset className='FormGroup'>
                    <div className='FormRow'>
                        <CardElement />
                    </div>
                </fieldset>
                {/* <div className='card_button'>
                    <button>Pay Fees</button>
                </div> */}
                {
                loading === 0 ? <div className='card_button'><button>Pay Fees</button></div>
                : loading === 1 ? <ClockLoader className="loader" size={15} color={'#000000'} loading={loading === 1}/>
                : <div className='after_payment'><h2>Your Payment Has been Successful</h2></div>
                }
            </form>
            : 
            <div className='after_payment'>
                <h2>Your Payment Has been Successful</h2>
            </div>
            }
        </div>
    )
}
