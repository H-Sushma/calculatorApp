import React,{useState} from 'react'

export default function Home(props) {
    const [number1, setNumber1] = useState(0);  
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(0);
    const Addition=()=>{
       setTotal(Number(number1) + Number(number2));
    }
    const Substraction=()=>{
        setTotal(number1-number2);
    }
    const Multiplication=()=>{
        setTotal(number1*number2);
    }
    const clear=()=>{
        setTotal("","");
        setNumber2("");
        setNumber1("");

    }
  return (
    <>
    <div>
    <nav className="navbar navbar-dark bg-dark ">
  <div className="container-fluid d-flex justify-content-center align-items-center">
    <span className="navbar-brand mb-0 h1 text-center"><strong>{props.title}</strong></span>
  </div>
</nav>
      <div className="mx-0 my-4 container-fluid d-flex justify-content-center align-items-center">

  <input
        className="mx-2" 
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
</div>
<div className='container-fluid d-flex justify-content-center align-items-center'>
    <button className="btn btn-primary mx-2" onClick={Addition}>Addition</button>
<button className="btn btn-primary mx-2" onClick={Substraction}>Substraction</button>
<button className="btn btn-primary mx-2" onClick={Multiplication}>Multiplication</button>
<button className="btn btn-primary mx-2" onClick={clear}>Clear</button>
</div>

    </div>

    <h2 className='d-flex justify-content-center align-items-center my-3'>Total: {total}</h2>
    </>
  )
}
