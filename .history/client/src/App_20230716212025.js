
import './App.css';

function App() {
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

<textarea rows='20' cols='75' className ='textArea'></textarea>

<br/>
<button className='btn'> Submit</button>
     </div>

    </>

);
}

export default App;
