import { Routes, Route } from "react-router-dom"

import MoviesPage from "./pages/MoviesPage"

import MovieCast from "./pages/MovieCast"

import NotFound from "./pages/NotFound"
import React, { Suspense, useEffect } from "react"
import Fallback from "./pages/Fallback"
import axios from "axios"

const LazyHome = React.lazy(() => import("./pages/HomePage"))
const LazyMovieDetail = React.lazy(() => import("./pages/MovieDetailPage"))
const LazyMovieReviews = React.lazy(() => import("./pages/MovieReviews"))

function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<Suspense fallback={<Fallback />}>
          <LazyHome />
        </Suspense>} />
        <Route index path="/movies" element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<Suspense fallback={<Fallback />}><LazyMovieDetail /></Suspense>} >
          <Route index path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<Suspense fallback={<Fallback />}><LazyMovieReviews /></Suspense>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
