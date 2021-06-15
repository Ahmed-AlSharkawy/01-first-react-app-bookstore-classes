import React, { Component } from 'react'
import { BookData } from './BookData'
import Book from './Book'

class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      booklist: BookData,
      isBooksShown: true,
    }
  }

  render() {
    const removeBook = (id) => {
      const newBookList = this.state.booklist.filter((book) => book.id !== id)

      this.setState({ booklist: newBookList })
    }

    const toggleBooksDisplay = () => {
      if (this.state.isBooksShown)
        this.setState({ booklist: [], isBooksShown: false })
      else this.setState({ booklist: BookData, isBooksShown: true })
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

        {this.state.isBooksShown && (
          <section className='bookitems'>
            {this.state.booklist.map((book) => {
              return (
                <div key={book.id} className='book'>
                  <Book {...book} removeBook={removeBook} />
                </div>
              )
            })}
          </section>
        )}

        <div className='button'>
          <button className='btn' onClick={toggleBooksDisplay}>
            {this.state.isBooksShown ? 'Hide all books' : 'Show all books'}
          </button>
        </div>
      </div>
    )
  }
}

export default BookList
