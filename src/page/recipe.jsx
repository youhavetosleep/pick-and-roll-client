import React, {useState,useEffect} from "react"

import Image from "../component/image"
import Loading from "../component/loading"
import axios from "axios"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import InfiniteScroll from "react-infinite-scroll-component"

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    }

    body {
    font-family: sans-serif;
    }
    `

    const WrapperImage = styled.section`
    max-width: 70rem;
    margin: 3rem auto;
    display: grid;
    grid-gap: 2.5em;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 300px;
    `

    function Recipe() {
    const [images, setImages] =useState([])
    const [pageNumber, setPageNumber] = useState(1)


        
//   &page=${pageNumber}&per_page=10
    const fetchImages =()=>{
        console.log(pageNumber)
        axios.get(`https://api.unsplash.com/photos/random?client_id=bIq30-SkiyHZW9ZmQcG8Ndn4KNn5Ii_m9We-bKdXOlE&count=10`)
    .then(res=>{
        
        setImages(photo =>[...photo, ...res.data])
        
        })
        setPageNumber(pageNumber+1)
    }

    useEffect(() => {
        
        fetchImages();
        
            },[])

    return (
    <div className="App">
        
        <GlobalStyle></GlobalStyle>
        <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loading />}

        >
        
        <WrapperImage >
        {images.map(image=>(
            <div key={image.id} >
        <Image url={image.urls.thumb} />
        </div>
        ))}
        </WrapperImage>
        </InfiniteScroll>
        
    </div>
    );
}

export default Recipe;

