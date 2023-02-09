import React, {useState} from 'react';
import './App.css';
import Input from './components/Input'

function App() {

  const [name,setName] = useState('')

  const handleClick = () => {
    console.log('sdf')
  }

  return (
    <>
    <div>
      <p>number</p>
      <p>name</p>
      <p>expiry date</p>
    </div>

    <div className='info_field'>
      <Input name='CARDHOLDER NAME'placeholder='e.g. Jane Appleseed'/>
      <Input name='CARD NUMBER' placeholder='e.g. 1234 5678 9123 0000'/>
      <div className='other'>
        <div className='exp_date'>
          <h3>EXP. DATE(MM/YY)</h3>
          <div>
          <input placeholder='MM'/>
          <input placeholder='YY'/>
          </div>
        </div>
        <div className='cvc'>
          <h3>CVC</h3>
          <input placeholder='e.g. 123'/>
        </div>
      </div>
      <button onClick={handleClick}>confirm</button>
    </div>
    </>
  );
}

export default App;
