import React, {createContext, useState, useEffect} from 'react';
////////////////////////////////////////////////////////////////
import data from '../data.json';
///////////////////////////////////////////////////////////////
import { getFirestore } from '../firebase/index'

export const ProductContext = createContext();

const getPromise = (d) => {
    return new Promise((resolve, reject) => {
        resolve(d)
    })
}

////////////////////////////////////////////////////////////////
const ProductProvider = ({children}) => {
    const [dataJson, setDataJson] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searching, setSearch] = useState('');

    const search = e => {
        setSearch(e.target.value);
    }
    
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        itemCollection.get().then((querySnapshot) => {
            setDataJson( querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))); 
        }).finally(() => {
            setTimeout(() => {
                setLoading(false)
            }, 3000)
        })
        const product = dataJson.filter(item => item.name.toLowerCase().includes(searching));
        setDataJson(d => product.length === 0 ? d : product);
        console.log('component did mount')
    },[searching]);

    return ( 
        <ProductContext.Provider
            value={{
                dataJson,
                loading,
                searching,
                setDataJson,
                setLoading,
                search
            }}
        >
            {children}
        </ProductContext.Provider>
     );
}
 
export default ProductProvider;