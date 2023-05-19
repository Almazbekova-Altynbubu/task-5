import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners'
import styled from 'styled-components'


const Loading = () => {
  return (
    <DivStyle>
      <h1>LOADING</h1>
      <ClimbingBoxLoader color="#36d7b7"  />
    </DivStyle>
  )
}

const DivStyle= styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`





export default Loading
