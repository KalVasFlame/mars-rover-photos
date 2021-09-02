import { useState, useEffect } from "react"

import api from "./api/nasa"

import Form from "./components/Form"
import Gallery from "./components/Gallery"

function App() {
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [rov, setRov] = useState("")
  const [s, setS] = useState("")
  const [cam, setCam] = useState("")

  useEffect(() => {
    try {
      api.getPhotos(rov, cam, s, page).then((r) => setPhotos((prev) => [...prev, ...r.photos]))
    } catch (error) {
      console.log(error.message)
    }
  }, [page])

  const onFormSubmit = (e) => {
    e.preventDefault()

    const { rover, sol, camera } = e.target.elements

    setS(sol.value)
    setCam(camera.value)
    setRov(rover.value)
    setPage(1)
    try {
      api.getPhotos(rover.value, camera.value, sol.value, page).then((r) => {
        setPhotos((prev) => [...r.photos])
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  const onLoadMoreClick = () => {
    setPage((prev) => prev + 1)
  }

  return (
    <div className="App">
      <Form onFormSubmit={onFormSubmit} />
      {photos.length > 0 && <Gallery photos={photos} onLoadMoreClick={onLoadMoreClick} />}
    </div>
  )
}

export default App
