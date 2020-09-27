import React, {createContext, useState, useEffect} from 'react';
////////////////////////////////////////////////////////////////
import data from '../data.json';
///////////////////////////////////////////////////////////////

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
        console.log('component did mount')
        getPromise(data).then(result => {
            setTimeout(() => {
                setLoading(false)
            }, 3000)
            const product = result.filter(item => item.name.toLowerCase().includes(searching));
            setDataJson(product.length === 0 ? result : product);
        });
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