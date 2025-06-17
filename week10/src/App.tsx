import {useState} from 'react'
import './App.css'
import {Search} from "./component/Search.tsx";
import {useQuery} from "@tanstack/react-query";

function App() {
  const [value, onValueChange] = useState('')

    const {data} = useQuery({
      initialData: {

      },
      queryFn: () => {
        
      }
    })

  return (
    <>
        <Search onSubmit={(title) => console.log('search:', title)} />
    </>
  )
}

export default App
