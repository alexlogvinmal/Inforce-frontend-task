import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Main } from './component/Main';
import { Item } from './component/Item';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="item/:id" element={<Item/>}/>
        <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Routes>
    </>
  );
}

export default App;
