// 
import React,{useState} from 'react'
import questions from './questions.json'
import Display from './Display'

const App = (props) => {
  let tempMarks = []
  const [marks,setMarks] = useState([]);
  const changehandler =(value,index) =>{
    tempMarks = marks
    tempMarks[index]= value;
        setMarks([...tempMarks]);
  }
  return (
    <div>
    <center>
    <h1>Quiz App</h1>
    {questions.map((question,index) =>{
      return(
        <Display question={question} index={index} changehandler={changehandler}/>
      )
    })}
    <button onClick={() => alert(marks.reduce((a,b)=> a+b,0)+'/10')}>End Quiz</button>
    </center>
    
      
    </div>
  )
}

export default App
