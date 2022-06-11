import React, { useState } from 'react'
import axios from 'axios'

const First = ({setUpdate}) => {
    const [state,setState] = useState({
        name:'',
        work:''
    })

    const [subhransu ,setSubhransu] = useState()

    // setUpdate(state)


    const changeHandler = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
        console.log(state)
        //this is a changeHandler

    }
    const sendData = async() =>{
        await axios.post('http://localhost:5000',state).then((res)=>{
            setSubhransu(res)
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
     
    }
  return (
    <div className='container my-5'>
        <div className='mt-1'>
        <input type="text" name="name"  id="" placeholder='insert name' onChange={changeHandler}/>

        </div>

        <div className='mt-1'>
        <input type="text" name="work" id="" placeholder='your work' onChange={changeHandler}/>

        </div>
        <div className="mt-1">

        <button className='btn btn-primary' onClick={sendData}>submit</button>
        </div>
    </div>
  )
}

export default First;