import axios from 'axios'
import { IProduct } from '../models';
import { useEffect, useState } from 'react';

export function useProduct() {

    const [product, setProduct] = useState<IProduct[]>([])

    async function fetchProduct() {
        const response = await axios.get('http://localhost:8000/data')
        setProduct(response.data)
    }
    useEffect(() => {
        fetchProduct()
    }, [product])

    return (product)
}