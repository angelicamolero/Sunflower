import React from 'react'

const FormCheckout = () => {
    return (
        <form>
        <div class="row">
            <div class="columns">
                <label>Name:</label>
                <input class="u-full-width" type="text" id="name" placeholder="Ex: Jane Benson"/>
            </div>
         </div>
         <div class="row">
            <div class="columns">
                <label>Phone:</label>
                 <input  class="u-full-width" type="number" id="phone" placeholder="Ex: 11 55864612"/>
             </div>
         </div>
         <div class="row">
            <div class="columns">
                <label for="exampleEmailInput">Your email</label>
                <input class="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput"/>
            </div>
         </div>
        <div class="row">
            <div class="columns">
                <label for="exampleEmailInput">Repeat email</label>
                <input class="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput"/>
            </div>
         </div>
        <input class="button-primary" type="submit" value="Continue"/>     
      </form>
    );
}

export default FormCheckout;