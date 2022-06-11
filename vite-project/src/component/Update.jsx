import React,{useState} from 'react'

const Update = () => {
    const [state,setState] = useState({
        name:'',
        work:''
    })


 
    const changeHandler = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
        console.log(state)

    }
  return (
    <div className='container my-5'>
        <div className='mt-1'>
        <input type="text" name="name"  id="" placeholder='insert name' />

        </div>

        <div className='mt-1'>
        <input type="text" name="work" id="" placeholder='your work' />

        </div>
        <div className="mt-1">

        <button className='btn btn-primary' >update</button>
        </div>
    </div>
  )
}

export default Update;