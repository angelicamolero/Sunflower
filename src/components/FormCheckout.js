import React, {useContext} from 'react';
import {OrderContext} from '../context/OrderContext';
import {Link} from 'react-router-dom';

const FormCheckout = () => {
    const orderContext = useContext(OrderContext);
    const { error, nameInput, phoneInput, mailInput, repeatedMailInput, handleInput, handleSubmit, btnSubmit } = orderContext
    return (
        <form className="formcheckout"
            onSubmit={handleSubmit}
        >
        {error ? <p className='u-full-width'>ALL FIELDS MUST BE COMPLETED</p> : null}
        <div className="row">
            <div className="columns">
                <label>Full Name:</label>
                <input 
                    ref={nameInput}
                    className="u-full-width" 
                    type="text" 
                    id="name" 
                    placeholder="Ex: Jane Benson"
                    name='name'
                    onInput={handleInput}
                />
            </div>
         </div>
         <div className="row">
            <div className="columns">
                <label>Phone:</label>
                 <input
                    ref={phoneInput} 
                    className="u-full-width" 
                    type="number" 
                    id="phone" 
                    placeholder="Ex: 11 55864612"
                    name='phone'
                    onInput={handleInput}
                />
             </div>
         </div>
         <div className="row">
            <div className="columns">
                <label htmlFor="exampleEmailInput">Your email</label>
                <input
                    ref={mailInput} 
                    className="u-full-width" 
                    type="email" 
                    placeholder="test@mailbox.com" 
                    id="exampleEmailInput"
                    name='mail'
                    onInput={handleInput}
                />
            </div>
         </div>
        <div className="row">
            <div className="columns">
                <label htmlFor="exampleEmailInput">Repeat email</label>
                <input
                    ref={repeatedMailInput} 
                    className="u-full-width" 
                    type="email" 
                    placeholder="test@mailbox.com" 
                    id="exampleEmailInput"
                    name='repeatedMail'
                    onInput={handleInput}
                />
            </div>
         </div>
        <Link to='/order'><button ref={btnSubmit} disabled className="button-primary" type="submit" value="Continue">Continue</button></Link>
      </form>
    );
}

export default FormCheckout;