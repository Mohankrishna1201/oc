
import './App.css';
import  { useState, useRef} from 'react';


const handleSubmit =async() => {


   const payload = {
    language :'cpp',
    code
   }

}

function App() {
  const[code, setCode] =useState('');
  console.log(code);
  return (
    <>
     <div className ="container">
<select className='select-box btn'> 
<option value='cpp'> C++</option>
<option value='c'> C</option>
<option value='java'> Java</option>
<option value='js'> Javascript</option>

</select>
<h1 className="head"> Mohan online Code Compiler</h1>

<textarea rows='20' cols='75' className ='textArea' value ={code}
onChange = { (e) => {setCode(e.target.value); }}
></textarea>

<br/>
<button   onClick ={handleSubmit} className='btn1'> Submit</button>
     </div>

    </>

);
}

export default App;
