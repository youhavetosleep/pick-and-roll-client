import React, {useState} from 'react'
import styled from 'styled-components'

const Category = (props) => {

  const [selected, setSelected] = useState("");

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };


  return (
    <Wrap>
    
    <ListWrap>
    <List>Korean</List>
    <List>Western</List>
    <List>Chinese</List>
    <List>Janpanese</List>
    <List>etc</List>
    </ListWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
width : 100%;
height : 50px;
display : flex;
justify-content: center;
border-bottom : solid 1px rgb(243, 200, 18);
`
const ListWrap = styled.div`
display : flex;
`
const DropBox = styled.div`

`

const List = styled.div`
font-size : 20px;
margin-right : 15px;
display : flex;
align-items: center;
border-bottom : 10px;
:hover {
  border-bottom : solid 6px rgb(243, 200, 18);
}
`

export default Category
