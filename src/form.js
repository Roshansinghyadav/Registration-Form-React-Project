import React, { useState} from 'react'
import { useEffect } from 'react'
function Form(){
    const data = {name:'',email:"",passward:""}
    const [inputData,setInputData] = useState(data)
    const [flag, setFlag] = useState(false)
    useEffect(()=>{
        console.log('Registered')

    },[flag])
    function handleData(e){
        setInputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData)

    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.passward){
            alert("all fields are Mandatory")
        }
        else{
            setFlag(true)
        }

    }
    return(
        <>
        <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name},You've Registered Successfully</h2>:" "}</pre>
        <form className='container' onSubmit={handleSubmit}>
            <div className='header'>
                <h1>Registration Form</h1>
                <div>
                    <input type='text' placeholder='Enter Your Name' name='name' value={inputData.name} onChange={handleData}></input>
                </div>
                <div>
                    <input type='text' placeholder='Enter Your E-Mail' name='email' value={inputData.email} onChange={handleData}></input>
                </div>
                <div>
                    <input type='text' placeholder='Enter Your Passward' name='passward'value={inputData.passward} onChange={handleData}></input>
                </div>
                <div>
                    <button type='submit'>submit</button>
                </div>

            </div>

        </form>
        </>
    )
}
export default Form
