import axios from 'axios'
import { IProduct } from '../models';
import './product.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface ProductProps {
    data: IProduct
}


export function Product({ data }: ProductProps) {
    const [deletemodal, setDeletemodal] = useState(false);
    function dleteItem(event: any) {
        axios.delete(`http://localhost:8000/data/${data.id}`)
        setDeletemodal(false);
    }

    return (
        <>
            <div className='div-for-del-bttn'><button onClick={e => setDeletemodal(true)} >DELETE</button></div>
            {deletemodal ?
                <div className='product-list-deletemodal'>
                    <p>Are you sure that you whant to delete <b>{data.name}</b>?</p>
                    <div className='div-for-product-bttn'>
                        <button onClick={dleteItem}>Yes</button>
                        <button onClick={e => setDeletemodal(false)}>No</button>
                    </div>
                </div>
                :
                <Link key={data.id} to={`item/${data.id}`}>
                    <div className='product-list'>
                        <div className='img-container'>
                            <img className='product-img' width={data.size.width} height={data.size.height} src={data.imageUrl} />
                        </div>
                        <div className='content-container'>
                            <p className='product-name'>{data.name}</p>
                            <p>Count: <i>{data.count}</i></p>
                        </div>
                    </div>
                </Link>
            }

        </>
    );
}


