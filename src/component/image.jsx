import React from 'react'
import styled from "styled-components"






const Image = ({url,key}) => {
    return (
        <Img key={key} src={url} alt=""/>
        
        )
}



const Img = styled.img`
   
    width: 100%;
    height: 100%;
    border-radius: 25%;
    object-fit: cover;
    border:solid 0.4mm #a89f9f;
`

export default Image
