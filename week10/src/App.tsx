import {useState} from 'react'
import './App.css'
import {Search} from "./component/Search.tsx";
import {Movie as MovieComponent} from "./component/Movie.tsx";
import type {Movie} from "./model/Movie.ts";
import Modal from "./component/Modal.tsx";
import {movies} from "./movies.ts";

function App() {
    const [floatingMovie, setFloatingMovie] = useState<Movie | null>(null)
    const [title, setTitle] = useState<string>('')

    const filteredMovies = movies.filter((movie) => movie.title.includes(title))

    return (
        <>
            <Search onSubmit={(title) => setTitle(title)}/>

            <div className="grid grid-cols-5 gap-4 mt-8">
                {
                    filteredMovies.map((movie) => <MovieComponent key={movie.id} movie={movie} />)
                }
            </div>

            {
                floatingMovie && <Modal>
                    <>

                    </>
                </Modal>
            }
        </>
    )
}

export default App
