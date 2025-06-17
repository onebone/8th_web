import {useState} from 'react'
import './App.css'
import {Search} from "./component/Search.tsx";
import {Movie as MovieComponent} from "./component/Movie.tsx";

function App() {
    const [value, onValueChange] = useState('')

    return (
        <>
            <Search onSubmit={(title) => console.log('search:', title)}/>

            <div className="grid grid-cols-5 gap-4 mt-8">
                <MovieComponent movie={{
                    title: 'test',
                    description: 'test',
                    rating: 10,
                    releaseDate: '2021-01-01',
                    imageUrl: 'https://image.tmdb.org/t/p/w500/test'
                }}/>

                <MovieComponent movie={{
                    title: 'test',
                    description: 'test',
                    rating: 10,
                    releaseDate: '2021-01-01',
                    imageUrl: 'https://image.tmdb.org/t/p/w500/test'
                }}/>
            </div>
        </>
    )
}

export default App
