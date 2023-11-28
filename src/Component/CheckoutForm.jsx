
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { CompareCollection, Usercollection } from "../Hook/Utilises";
import { axiospublic } from "../Hook/useAxios";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { data } from "autoprefixer";
import toast from "react-hot-toast";


const CheckoutForm = ({ item, month, year }) => {
    console.log(month, year)
    const { user } = useAuth()
    const [error, seterror] = useState('')
    const [clienSecret, setclienSecret] = useState('')
    const [trantisionid, settrantisionid] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [User, refetch] = Usercollection()
    const totalprice = (item.salary)
    const price = parseInt(totalprice)
    // console.log(price);
    const navigate = useNavigate()
    const Compare = CompareCollection(item.email)
    console.log(Compare)


    useEffect(() => {
        if (price > 0) {
            axiospublic.post('/create-payment-intent', { price: price })
                .then(res => {
                    console.log(res.data)
                    setclienSecret(res.data?.clientSecret)
                })
        }
    }, [price])
    // console.log(month);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        if (Compare.find((items) => parseInt(items?.Month) == month)) {

            return seterror("Please Month change this Month salary paid")
        }

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            seterror(error.message)
        }

        else {
            console.log('[PaymentMethod]', paymentMethod);
            seterror('')
        }

        const { paymentIntent, error: confirmerror } = await stripe.confirmCardPayment(clienSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName,
                    email: user?.email
                }
            }
        })
        if (confirmerror) {
            console.log('taka asehe ni', confirmerror)
        }
        else {
            console.log("succeful", paymentIntent)
            if (paymentIntent.status == 'succeeded') {
                settrantisionid(paymentIntent.id)
                console.log(item)
                // database same the payment deaitls
                const payment = {
                    price: price,
                    email: item?.email,
                    transactionID: paymentIntent?.id,
                    date: new Date(),
                    Month: month,
                    Year: year
                }
                const res = await axiospublic.post('/payment', payment)
                console.log(res.data);

            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-secondary my-3 text-xl  btn-sm " type="submit">
                Pay
            </button>
            {
                error && <p className=" text-red-600">{error}</p>
            }
            {
                trantisionid && <p>your succefull payment and your transation id : {trantisionid}</p>
            }

        </form>
    );


    // Make sure to call `loadStripe` outside of a component’s render to avoid
    // recreating the `Stripe` object on every render.
    // const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

};

export default CheckoutForm;