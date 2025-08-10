import { useState } from "react";
import '../css/movies.css'
function Movie(){
    const [movie,setmovie]=useState("");
    const [data,setmovies]=useState(null);

    const api_key=process.env.REACT_APP_MOVIE_API;
    console.log("API key:", api_key);
const fetchapi=(e)=>{
     e.preventDefault();
   fetch(`http://www.omdbapi.com/?apikey=${api_key}&t=${movie}`)
   .then(response=> response.json())
   .then(data=>setmovies(data))
   .catch(error=>console.log(error));

}

if(data===null){
    return(<section className="wrap">
        <h1>Search Movie</h1>
        <form onSubmit={fetchapi}>
        <input value={movie} onChange={e=>setmovie(e.target.value)}/>
        <button>Search</button>
        </form>
        
    </section>);
}
return(
    <section className="Body">
       
        <form onSubmit={fetchapi}>
        <input value={movie} onChange={e=>setmovie(e.target.value)}/>
        <button>Search</button>
        </form>
        <section>
          
                <section className="movie" key={data.Title}>
                    <img src={data.Poster}/>
                    <h1>{data.Title}</h1>
                    <p>{data.Year}</p>
                    <p>Director:{data.Director}</p>
                    <p>Writer: {data.Writer}</p>
                    <p>Genre: {data.Genre}s</p>
                    <h2>{data.Released}</h2>
                    <p>{data.Runtime}</p>
                    <p>{data.Plot}</p>

                </section>
        </section>

    </section>
);

}

export default Movie