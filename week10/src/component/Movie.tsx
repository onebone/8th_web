import type {Movie as MovieModel} from "../model/Movie.ts";
import {memo} from "react";

export const Movie = memo(function Movie({
    movie
}: {
    movie: MovieModel
}) {
    return <div className="relative rounded-md shadow-md overflow-clip">
        <div className="flex flex-col">
            <img
                className="object-cover bg-gray-300 h-64"
                src={movie.imageUrl ?? null}
                alt="movie thumbnail" />

            <span className="font-bold text-lg">{movie.title}</span>
            <span className="text-gray-500">{movie.releaseDate}</span>
            <span className="line-clamp-3">{movie.description}</span>
        </div>

        <span className="absolute top-0 right-0 bg-blue-600 text-white rounded-md p-1 m-2">{movie.rating}</span>
    </div>
})
