import { Outlet } from "react-router-dom"

const MovieDetailPage = () => {
    return (
        <div>
            <h1>Movie Detail Page</h1>
            <Outlet />
        </div>
    )
}

export default MovieDetailPage