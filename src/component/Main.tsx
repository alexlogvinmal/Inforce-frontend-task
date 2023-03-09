import { useEffect, useState } from 'react';
import { Post, PostState } from '../redux/types';
import { fetchPosts } from '../redux/data/action';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import axios from 'axios'
import { Product } from './Product';
import './main.css';



export function Main() {

  const postState: PostState = useAppSelector((state: any) => state.postReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
      dispatch(fetchPosts());
  }, [dispatch]);

  const product = postState.data;
  const [modal, setModal] = useState(false);

  const [selected, setSelected] = useState('A-Z & COUNT');


  if (selected == 'A-Z & COUNT') {
    product.sort(function (a, b) {
      var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
      if (nameA < nameB)
        return -1
      if (nameA > nameB)
        return 1
      return b.count - a.count
    })
  } else if (selected == 'A-Z') {
    product.sort(function (a, b) {
      var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
      if (nameA < nameB)
        return -1
      if (nameA > nameB)
        return 1
      return 0
    })
  } else if (selected == 'COUNT') {
    product.sort(function (a, b) {
      return b.count - a.count
    })
  }

  const [valueImageUrl, setImageUrl] = useState('');
  const [valueName, setName] = useState('')
  const [valueCount, setCount] = useState('');
  const [valueWidth, setWidth] = useState('');
  const [valueHeight, setHeight] = useState('');
  const [valueWeight, setWeight] = useState('');

  const [imageUrlBorder, setImageUrlBorder] = useState('text-field__input');
  const [nameBorder, setNameBorder] = useState('text-field__input');
  const [countBorder, setCountBorder] = useState('text-field__input');
  const [widthBorder, setWidthBorder] = useState('text-field__input');
  const [heightBorder, setHeightBorder] = useState('text-field__input');
  const [weightBorder, setWeightBorder] = useState('text-field__input');

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

  function addItem(event: any) {
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
        comments: []
      };

      axios.post('http://localhost:8000/data', data);
      setModal(false)
      setImageUrl('')
      setName('')
      setCount('')
      setWidth('')
      setHeight('')
      setWeight('')
    }
  }

  return (
    <>
      {modal ?
        <div className='modal'>
          <div className='form'>

            <div className="text-field text-field_floating-2">
              <input className={imageUrlBorder} type="text" placeholder=" " onChange={changeImageUrl} />
              <label className="text-field__label" htmlFor="name" >IMAGE URL</label>
            </div>

            <div className="text-field text-field_floating-2">
              <input className={widthBorder} type="text" placeholder=" " onChange={changeWidth} />
              <label className="text-field__label" htmlFor="name" >IMAGE WIDTH</label>
            </div>

            <div className="text-field text-field_floating-2">
              <input className={heightBorder} type="text" placeholder=" " onChange={changeHeight} />
              <label className="text-field__label" htmlFor="name" >IMAGE HEIGHT</label>
            </div>

            <div className="text-field text-field_floating-2">
              <input className={nameBorder} type="text" placeholder=" " onChange={changeName} />
              <label className="text-field__label" htmlFor="name" >NAME</label>
            </div>

            <div className="text-field text-field_floating-2">
              <input className={countBorder} type="text" placeholder=" " onChange={changeCount} />
              <label className="text-field__label" htmlFor="name" >COUNT</label>
            </div>

            <div className="text-field text-field_floating-2">
              <input className={weightBorder} type="text" placeholder=" " onChange={changeWeight} />
              <label className="text-field__label" htmlFor="name" >WEIGHT</label>
            </div>

            <div className='div-for-modal-bttn'>
              <button onClick={addItem}>CONFIRM</button>
              <button onClick={e => setModal(false)}>CANCEL</button>
            </div>
          </div>

        </div>
        : <></>}
      <div className='div-for-add-bttn'>
        <div>
          <p>Sort by <select value={selected}
            onChange={(e) => setSelected(e.target.value)} className='select-css'>
            <option selected value='A-Z & COUNT'>A-Z & COUNT</option>
            <option value='A-Z'>A-Z</option>
            <option value='COUNT'>COUNT</option>
          </select></p>
        </div>
        <button onClick={e => setModal(true)} className='add-bttn'>+ADD PRODUCTS</button>
      </div>
      <div className="App">
        {product.map(e => <Product data={e} key={e.id} />)}
      </div>
    </>

  );
}

