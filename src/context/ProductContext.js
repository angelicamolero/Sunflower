import React, {createContext, useState, useEffect} from 'react';
import data from '../data.json';

export const ProductContext = createContext();

const getPromise = (d) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(d)
        }, 3000);
    })
}

const ProductProvider = ({children}) => {
    const [dataJson, setDataJson] = useState([]);
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(true)

    const viewMore = (divID) => {
        setDetails([])
        const product = dataJson.filter(prod => prod.id === divID)
        setDetails(product)
        // setShow(true)
    }
    useEffect(() => {
        getPromise(data).then(result => {
            setLoading(false)
            setDataJson(result)
        });
    }, [dataJson])

    return ( 
        <ProductContext.Provider
            value={{
                dataJson,
                loading,
                details,
                setDataJson,
                setDetails,
                setLoading,
                viewMore,
            }}
        >
            {children}
        </ProductContext.Provider>
     );
}
 
export default ProductProvider;