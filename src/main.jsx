import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function App(){
  return(
  <>
    <Header/>;
    <MovieList/>
  </>
);
}

function Header(){
  return ( <div id="header">
    <h1>Header</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam consectetur earum blanditiis minima libero delectus pariatur dolor quo, repellendus dolorem quibusdam maxime eligendi officia suscipit at unde odio illo.
    </p>
  </div>
  );
}

function MovieList(){
  return (
    <div>
      <h2>MovieList</h2>
      <div id="movie-list">
        <Movie/>
        <Movie/>
        <Movie/>
      </div>
    </div>
  );
}

function Movie(){
  // const imageurl="1.jpg";
  // const baslik="Kaptan amerika";
  // const aciklama="Güzel bir film";

  const movieObj={
    image:"1.jpg",
    title:"Kaptan amerika",
    description:"Güzel bir film",
  }
  return (
    <div className='movie'>
      <img src= {"/img"+movieObj} alt="" />
      <h3>{movieObj}</h3>
      <p>{movieObj}</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
