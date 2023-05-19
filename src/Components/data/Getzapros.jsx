import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import CircleLoader from 'react-spinners/CircleLoader'
import Loading from '../ui/Loading'
// import Button from './Button'

const Getzapros = () => {
    const [get, setGet] = useState(false)
const [array,setArray]= useState([])


const getHandler = ()=>{
    setGet((prev)=>{
        return !prev
    })
}

const getRequest = async()=>{
    try{
        const res = await fetch ("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        setArray(data)
    }catch(error){
        console.log(error);
    }
}




useEffect(() => {
    setTimeout(() => {
      setGet(false)
      getRequest()

    }, 3000);
    })


  return (
    <div>
        
      
      <ButtonStyle onClick={getHandler} >GETDATA</ButtonStyle>
      {get && <Loading/> }
      {array.map((el)=>{
    return(
        <StyledMap key={el.id}>
        <h1>{el.title}</h1>,
        </StyledMap>
    )
})}
      
      

    </div>
  )
}

const StyledMap= styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid red;
  width:800px;
  margin:auto;
  background-color: green;
  margin-top: 30px;
`




const ButtonStyle= styled.button`
  --c: #fff;
 /* text color */
  background: linear-gradient(90deg, #0000 33%, #fff5, #0000 67%) var(--_p,100%)/300% no-repeat,
    #004dff;
 /* background color */
  color: #0000;
  border: none;
  transform: perspective(500px) rotateY(calc(20deg*var(--_i,-1)));
  text-shadow: calc(var(--_i,-1)* 0.08em) -.01em 0   var(--c),
    calc(var(--_i,-1)*-0.08em)  .01em 2px #0004;
  outline-offset: .1em;
  transition: 0.3s;

&:hover,
&:focus-visible {
  --_p: 0%;
  --_i: 1;
}

&:active {
  text-shadow: none;
  color: var(--c);
  box-shadow: inset 0 0 9e9q #0005;
  transition: 0s;
}

  font-family: system-ui, sans-serif;
  font-weight: bold;
  font-size: 2rem;
  margin: 0;
  cursor: pointer;
  padding: .1em .3em;

`


export default Getzapros
