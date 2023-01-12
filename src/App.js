import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Result from './components/Result';


function App() {
  const [number, setNumber] = useState(0)

      const tambah = () => {
          setNumber(number+1)
      }
      const kurang = () => {

        setNumber(number-1)
      }
  return (
    <div>
      
      <h1>{number}</h1>
  
      <button onClick={tambah}>Tambah</button>
  
      <button onClick={kurang}>Kurang</button>

      <Result />

    </div>
  )}

export default App;
