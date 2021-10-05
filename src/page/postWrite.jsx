import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const PostWrite = (props) => {
  return (
    <div>
      <Test to= '/recipe'>Favorite</Test>
      <FaSearch />
    </div>
  )
}
const Test = styled(NavLink)`
width : 200px;
text-decoration : none;
color : black;
`
export default PostWrite
