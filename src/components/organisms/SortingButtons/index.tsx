//import hooks
import { useState, useEffect } from 'react'


//import lib for fetching data
import axios from 'axios'

//import material ui components
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'


const SortingButtons = () => {
  const [type, setType] = useState(0)
  const [genre, setGenre] = useState([])


  //async function for fetching data
  async function fetchGenre () {
    const genreData = await axios.get('http://localhost:4000/genres')
    setGenre(genreData.data)
  }

  //called the fetchGenre
  useEffect(() => {
    fetchGenre()
  }, [])


  return (
    <ButtonGroup
      color='error'
      aria-label='medium secondary button group'
    >
      {genre.map((genre: any) => {
        return <Button variant={type === genre.id ? "contained" : "outlined"}>{genre.name}</Button>
      })}
    </ButtonGroup>
  )
}

export default SortingButtons
