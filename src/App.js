import './App.css';
import Input from './components/Input'

function App() {
  return (
    <div className='info_field'>
      <Input name='CARDHOLDER NAME'placeholder='e.g. Jane Appleseed'/>
      <Input name='CARD NUMBER' placeholder='e.g. 1234 5678 9123 0000'/>
    </div>
  );
}

export default App;
