
import axios from "axios";
import { useEffect, useState } from "react";
const HomePage = () => {

    const [films, setFilms] = useState([]);
    useEffect(() => {


        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=adventure',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2M0ZjI1NzJkM2JlNDkzMGE1MmNlNmQ4Zjg3NzEwMyIsIm5iZiI6MTczMjEyNDgxMi40ODUxMjksInN1YiI6IjY3M2UxZmY1YWIyZTI1MGY1NzBmODA4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MFUbcuGAf544YwnSHGQdoopQgwJ-tNUyErv0OYklMBE'
            }
        };

        axios.request(config)
            .then((response) => {

                setFilms(response.data.results)
            })
            .catch((error) => {
                console.log(error);
            });

    })

    return (
        <div>
            <ul style={{
                listStyleType: 'none'
            }}>
                {films.map((film) => (
                    <li key={film.id}>
                        <div style={{
                            border: '1px solid black',
                            padding: '10px',
                            margin: '10px',
                            borderRadius: '10px',
                            shadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                        }}>
                            <p>{film.title}</p>
                            <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt="" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage