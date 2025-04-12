import React, { useEffect, useRef, useState } from 'react'
import "./TitleCards.css"
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'
const Titlecards = ({title,category}) => {
  const [apiData,setApiData]=useState([]);
const cardsRef=useRef();
const handelwheel=(event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft+=event.deltaY;
}
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmU0Y2RkZWViNGM5YjE3Y2QzNzI0MDE3MTU4Y2QwZCIsIm5iZiI6MTc0NDI2MDQ1OS4xLCJzdWIiOiI2N2Y3NGQ2YmQzYWI3ZDdhOGJhZDI5YmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rryiMr4NQ4hnQq7uDP25JIIyFoh2PTbgfEMju1jL1Vg'
  }
};


useEffect(()=>{
  cardsRef.current.addEventListener('wheel',handelwheel)
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
},[])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="cards-list" ref={cardsRef}>{apiData.map((cards,index)=>{
              return <Link to={`/Player/${cards.id}`} className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500/`+cards.backdrop_path} alt="" />
                <p>{cards.original_title}</p>
              </Link>
      })}</div>
    </div>
  )
}

export default Titlecards   