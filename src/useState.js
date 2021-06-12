import React from 'react'
import './index.css'
import { books } from './books'
import Book from './Book'

const map = new Map()
const UseStateArray = () => {
  const [booklist, setBooks] = React.useState(books)

  const clickHandler = (id) => {
    let remainBooks = booklist.filter((book) => book.id !== id)

    if (remainBooks.length > 0) setBooks(remainBooks)
    else document.getElementById('content').remove()
  }

  const clkHandler = (event, id) => {
    let val = event.target.innerText.toLowerCase()
    if (val === 'clear image') {
      booklist.forEach((book) => {
        if (book.id === id) {
          map.set(id, book.img)
          book.img = ''
        }
      })
      setBooks([...booklist])
      event.target.innerText = 'Show Image'
    } else {
      setBooks((prevState) => {
        prevState.forEach((book) => {
          if (book.id === id) book.img = map.get(id)
        })
        return [...prevState]
      })
      event.target.innerText = 'Clear Image'
    }
  }
  return (
    <div id='content' className='booklist'>
      <h1
        style={{
          textAlign: 'center',
          color: 'blanchedalmond',
          letterSpacing: '2pt',
          fontSize: '2.5rem',
          lineHeight: '6rem',
        }}
      >
        Islamic Books
      </h1>
      <section className='bookitems'>
        {booklist.map((book) => {
          return (
            <div className='book'>
              <Book key={book.id} {...book} />
              <div className='buttons'>
                <button
                  id='toggleImage'
                  className='btn'
                  onClick={(event) => clkHandler(event, book.id)}
                >
                  clear image
                </button>
                <button
                  id='removeItem'
                  className='btn'
                  onClick={() => clickHandler(book.id)}
                >
                  Remove book
                </button>
              </div>
            </div>
          )
        })}
      </section>

      <div className='button'>
        <button
          className='btn'
          onClick={
            (() => setBooks([]),
            () => {
              document.getElementById('content').remove()
            })
          }
        >
          Remove all books
        </button>
      </div>
    </div>
  )
}

export default UseStateArray
