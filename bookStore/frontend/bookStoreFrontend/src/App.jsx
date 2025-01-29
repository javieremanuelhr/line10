import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import EditBook from './pages/editBook'
import CreateBook from './pages/createBook'
import DeleteBook from './pages/deleteBook'
import ShowBook from './pages/showBook'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/deleteBook" element={<DeleteBook />} />
      <Route path="/showBook" element={<ShowBook />} />
    </Routes>
  )
}

export default App