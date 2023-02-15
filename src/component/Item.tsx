import axios from 'axios'
import { useParams } from 'react-router-dom';
import './item.css';
import { useProduct } from '../hook/product';
import { Link } from 'react-router-dom';
import { Loader } from './Loader';
import { useState } from 'react';



export function Item() {
    const [modal, setModal] = useState(false);
    const [modalComment, setModalComment] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [valueImageUrl, setImageUrl] = useState('');
    const [valueName, setName] = useState('')
    const [valueCount, setCount] = useState(Number);
    const [valueWidth, setWidth] = useState(Number);
    const [valueHeight, setHeight] = useState(Number);
    const [valueWeight, setWeight] = useState('');
    const [valueComments, setComments] = useState(Object);
    const [valueDescription, setValueDescription] = useState('');
    let newdata = useProduct();
    const { id } = useParams();


    let error = true;
    if (id == undefined) {
        error = false;
    } else {
        newdata = newdata.filter(e => e.id == +id)
        if (newdata.length == 0) {
            error = false;
        } else {
            error = true;
        }
    }


    const [imageUrlBorder, setImageUrlBorder] = useState('text-field__input');
    const [nameBorder, setNameBorder] = useState('text-field__input');
    const [countBorder, setCountBorder] = useState('text-field__input');
    const [widthBorder, setWidthBorder] = useState('text-field__input');
    const [heightBorder, setHeightBorder] = useState('text-field__input');
    const [weightBorder, setWeightBorder] = useState('text-field__input');
    const [commentBorder, setCommentBorder] = useState('text-field__input1');

    function changeImageUrl(event: any) {
        setImageUrlBorder('text-field__input');
        if (+event.target.value) {
            event.target.value = ''
        } else {
            setImageUrl(event.target.value)
        }
    }

    function changeName(event: any) {
        setNameBorder('text-field__input');
        if (+event.target.value) {
            event.target.value = ''
        } else {
            setName(event.target.value)
        }
    }

    function changeCount(event: any) {
        setCountBorder('text-field__input');
        if (+event.target.value) {
            setCount(event.target.value)
        } else if (+event.target.value == 0) {
            setCount(event.target.value)
        } else {
            event.target.value = ''
        }
    }

    function changeWidth(event: any) {
        setWidthBorder('text-field__input');
        if (+event.target.value) {
            setWidth(event.target.value)
        } else if (+event.target.value == 0) {
            setWidth(event.target.value)
        } else {
            event.target.value = ''
        }
    }

    function changeHeight(event: any) {
        setHeightBorder('text-field__input');
        if (+event.target.value) {
            setHeight(event.target.value)
        }
        else if (+event.target.value == 0) {
            setHeight(event.target.value)
        } else {
            event.target.value = ''
        }
    }

    function changeWeight(event: any) {
        setWeightBorder('text-field__input');
        setWeight(event.target.value)
    }

    function OpenModal(event: any) {
        setImageUrl(newdata[0].imageUrl)
        setName(newdata[0].name)
        setCount(newdata[0].count)
        setWidth(newdata[0].size.width)
        setHeight(newdata[0].size.height)
        setWeight(newdata[0].weight)
        setComments(newdata[0].comments)
        setModal(true)
    }

    function updateItem(event: any) {
        if (valueImageUrl == '') {
            alert('There are empty fields')
            setImageUrlBorder('text-field__input border-error')
        } else if (valueName == '') {
            alert('There are empty fields')
            setNameBorder('text-field__input border-error')
        } else if (valueCount == undefined) {
            alert('There are empty fields')
            setCountBorder('text-field__input border-error')
        } else if (valueWidth == undefined) {
            alert('There are empty fields')
            setWidthBorder('text-field__input border-error')
        } else if (valueHeight == undefined) {
            alert('There are empty fields')
            setHeightBorder('text-field__input border-error')
        } else if (valueWeight == '') {
            alert('There are empty fields')
            setWeightBorder('text-field__input border-error')
        } else {
            const data = {
                imageUrl: valueImageUrl,
                name: valueName,
                count: +valueCount,
                size: { width: +valueWidth, height: +valueHeight },
                weight: valueWeight,
                comments: valueComments
            };
            axios.put(`http://localhost:8000/data/${id}`, data)
            setModal(false)
        }
    }

    function updateComment(e: any) {
        setImageUrl(newdata[0].imageUrl)
        setName(newdata[0].name)
        setCount(newdata[0].count)
        setWidth(newdata[0].size.width)
        setHeight(newdata[0].size.height)
        setWeight(newdata[0].weight)
        setComments(newdata[0].comments)
        setModalComment(true)
    }
    function changeDescription(event: any) {
        setCommentBorder('text-field__input1');
        if (+event.target.value) {
            event.target.value = ''
        } else {
            setValueDescription(event.target.value)
        }
    }
    function addComment(e: any) {
        if (valueDescription == '') {
            alert('There are empty fields')
            setCommentBorder('text-field__input1 border-error')
        } else {
            setImageUrl(newdata[0].imageUrl)
            setName(newdata[0].name)
            setCount(newdata[0].count)
            setWidth(newdata[0].size.width)
            setHeight(newdata[0].size.height)
            setWeight(newdata[0].weight)
            setComments(newdata[0].comments)

            let specialdata = newdata[0].comments;
            if (id != undefined) {
                const dataComment = {
                    id: specialdata.length + 1,
                    productId: +id,
                    description: valueDescription,
                    date: "18:00 22.08.2021"
                }
                specialdata.push(dataComment)
                setComments(specialdata)
                const data = {
                    imageUrl: valueImageUrl,
                    name: valueName,
                    count: +valueCount,
                    size: { width: +valueWidth, height: +valueHeight },
                    weight: valueWeight,
                    comments: valueComments
                };
                axios.put(`http://localhost:8000/data/${id}`, data)
            }
        }
    }

    function openDeleteModal(e: any) {
        setImageUrl(newdata[0].imageUrl)
        setName(newdata[0].name)
        setCount(newdata[0].count)
        setWidth(newdata[0].size.width)
        setHeight(newdata[0].size.height)
        setWeight(newdata[0].weight)
        setComments(newdata[0].comments)
        setModalDelete(true)
    }

    function deleteComment(thisId: number) {
        setImageUrl(newdata[0].imageUrl)
        setName(newdata[0].name)
        setCount(newdata[0].count)
        setWidth(newdata[0].size.width)
        setHeight(newdata[0].size.height)
        setWeight(newdata[0].weight)
        setComments(newdata[0].comments)
        let specialdata = newdata[0].comments.filter(e => e.id != thisId);
        setComments(specialdata)
        const data = {
            imageUrl: valueImageUrl,
            name: valueName,
            count: +valueCount,
            size: { width: +valueWidth, height: +valueHeight },
            weight: valueWeight,
            comments: valueComments
        };
        axios.put(`http://localhost:8000/data/${id}`, data)
    }

    return (
        <>
            {error ?
                <>
                    {modal ?
                        <div className='modal'>
                            <div className='form'>

                                <div className="text-field text-field_floating-2">
                                    <input className={imageUrlBorder} type="text" placeholder=" " onChange={changeImageUrl} value={valueImageUrl} />
                                    <label className="text-field__label" htmlFor="name" >IMAGE URL</label>
                                </div>

                                <div className="text-field text-field_floating-2">
                                    <input className={widthBorder} type="text" placeholder=" " onChange={changeWidth} value={valueWidth} />
                                    <label className="text-field__label" htmlFor="name" >IMAGE WIDTH</label>
                                </div>

                                <div className="text-field text-field_floating-2">
                                    <input className={heightBorder} type="text" placeholder=" " onChange={changeHeight} value={valueHeight} />
                                    <label className="text-field__label" htmlFor="name" >IMAGE HEIGHT</label>
                                </div>

                                <div className="text-field text-field_floating-2">
                                    <input className={nameBorder} type="text" placeholder=" " onChange={changeName} value={valueName} />
                                    <label className="text-field__label" htmlFor="name" >NAME</label>
                                </div>

                                <div className="text-field text-field_floating-2">
                                    <input className={countBorder} type="text" placeholder=" " onChange={changeCount} value={valueCount} />
                                    <label className="text-field__label" htmlFor="name" >COUNT</label>
                                </div>

                                <div className="text-field text-field_floating-2">
                                    <input className={weightBorder} type="text" placeholder=" " onChange={changeWeight} value={valueWeight} />
                                    <label className="text-field__label" htmlFor="name" >WEIGHT</label>
                                </div>

                                <div className='div-for-modal-bttn'>
                                    <button onClick={updateItem}>CONFIRM</button>
                                    <button onClick={e => setModal(false)}>CANCEL</button>
                                </div>
                            </div>

                        </div>
                        : <></>}
                    <div className='item-list'>
                        <Link className='bttn-back' to={`/`}>Back</Link>
                        <div className='div-for-edit-item-bttn'><button className='edit-item-bttn' onClick={OpenModal}>EDIT</button></div>
                        <div className='item-content'>

                            <div className='item-img-container'>
                                <img className='item-img' width={newdata[0].size.width} height={newdata[0].size.height} src={newdata[0].imageUrl} />
                            </div>
                            <div className='item-content2'>
                                <h1>{newdata[0].name}</h1>
                                <p className='item-stock'>Count: <i>{newdata[0].count}</i></p>
                                <p className='item-stock'>Weight: <i>{newdata[0].weight}</i></p>
                            </div>
                        </div>
                        <div className='item-description'>
                            <p className='description'>COMMENTS</p>
                            <div className='div-comment'>
                                {modalComment ? <>
                                    <div className="text-field1 text-field_floating-2">
                                        <input className={commentBorder} type="text" placeholder=" " onChange={changeDescription} />
                                        <div className='div-for-product-bttn'>
                                            <button onClick={addComment}>SEND</button>
                                            <button onClick={e => setModalComment(false)}>CANCEL</button>
                                        </div>
                                    </div>
                                </> : <>
                                    <button onClick={updateComment}>LEAVE COMMENT</button>
                                </>}
                            </div>
                            <>&nbsp;</>
                            <button onClick={openDeleteModal}>EDIT COMMENTS</button>
                            {newdata[0].comments.map(e =>
                                <div className='comment-od' key={e.id}>
                                    {modalDelete ?
                                        <>
                                            <p>Are you sure that you whant to delete this one?</p>
                                            <button onClick={() => deleteComment(e.id)}>YES</button>
                                            <button onClick={e => setModalDelete(false)}>CANCEL</button>
                                        </> :
                                        <>
                                            <p>{e.description}</p>
                                        </>
                                    }
                                </div>)}
                        </div>
                    </div>
                </>
                : <Loader />}
        </>

    );
}


