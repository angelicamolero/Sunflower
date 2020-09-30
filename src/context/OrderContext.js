import React, {createContext, useState, useRef} from 'react';

export const OrderContext = createContext();

const OrderProvider = ({children}) => {
    const [orderSummary, setOrderSummary] = useState({
        name: '',
        phone: '',
        mail: '',
        repeatedMail: ''
    });
    const [error, setError] = useState(false);

    const nameInput = useRef('');
    const phoneInput = useRef('');
    const mailInput = useRef('');
    const repeatedMailInput = useRef('');
    const btnSubmit = useRef(null)
    const { name, phone, mail, repeatedMail } = orderSummary;

    const handleInput = (e) => {
        setOrderSummary({
            ...orderSummary,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(name.trim() === '' || phone.trim() === '' || mail.trim() === '' || repeatedMail.trim() === '' || mail !== repeatedMail){
            setError(true);
            (name === '') ? nameInput.current.style.border = '1px solid red' : nameInput.current.style.border = '';
            (phone === '') ? phoneInput.current.style.border = '1px solid red' : phoneInput.current.style.border = '';
            (mail === '') ? mailInput.current.style.border = '1px solid red' : mailInput.current.style.border = '';
            (repeatedMail === '') ? repeatedMailInput.current.style.border = '1px solid red' : repeatedMailInput.current.style.border = '';
            return;
        }
        setError(false);
        nameInput.current = '';
        phoneInput.current = '';
        mailInput.current = '';
        repeatedMailInput.current = '';
    }
    return (
        <OrderContext.Provider
            value={{
                orderSummary,
                error,
                nameInput,
                phoneInput,
                mailInput,
                repeatedMailInput,
                btnSubmit,
                handleInput,
                handleSubmit
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}

export default OrderProvider