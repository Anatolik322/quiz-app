import React, { useState } from 'react';
import Header from '../header';
import AdminForm from '../adminForm';
import Game from '../game';
import Result from '../result';
import AdminPanel from '../adminPanel';
import './App.css'

function App() {

  const [data, setData] = useState([{
    title: 'яка висота Говерли?',
    variants: ['2061м', '3022м', '1675м'],
    correct: 0
  },
  {
    title: '2+2*2 = ',
    variants: ['6', '8', '16'],
    correct: 0
  },
  {
    title: 'Питання 3',
    variants: ['Відп 1', 'Відп 2', 'Відп 3'],
    correct: 2
  },
  

  ])
  const [adminClick, setAdminClick] = useState(false)
  const [step, setStep] = useState(0);
  const [correctAns, setcorrectAns] = useState(0);
  const [passwordInp, setPasswordInp] = useState('')
  const [passwordIs, setPasswordIs] = useState(false);
  const password = 'admin'
  const qestion = data[step];
  const allQestionLength = data.length;
  let percentage = Math.round(step/allQestionLength * 100);
  
  const onClickVariant = (id) =>{
    console.log(id)
    if(id === qestion.correct){
      setcorrectAns(correctAns + 1);
    }
    setStep(step + 1);
  }

  const onTryAgain = () => {
    setStep(0);
    setcorrectAns(0);
  }

  return(
   <div className='App'>
    <Header
     setAdminClick = {setAdminClick}
     setPasswordIs = {setPasswordIs} />
    {
      adminClick &&  
       <AdminForm
        data={data}
        passwordInp = {passwordInp}
        setPasswordInp = {setPasswordInp}
        setPasswordIs = {setPasswordIs}
        passwordIs = {passwordIs}
        password = {password}
      />
    }
    {
      passwordIs && <AdminPanel data = {data} setData = {setData}/>
    } 
    {
      step !== data.length && !adminClick && <Game
      percentage = {percentage}
      qestion = {qestion} 
      onClickVariant = {onClickVariant}/>
    }
    {  
      step === data.length && !adminClick && <Result
      correctAns = {correctAns}
      allQestion = {allQestionLength}
      onTryAgain = {onTryAgain}  />
    }
    
   </div>
    
  )
}

export default App;
