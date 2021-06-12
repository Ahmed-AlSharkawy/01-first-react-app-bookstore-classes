import React from 'react'

const Book = (props) => {
  // if you passed the object remember to use 'props.book'
  const { img, title, author } = props

  const mouseEnterHandler = (e) => {
    e.target.style.color = 'rgb(150, 5, 5)'
    e.target.style.fontSize = '125%'
  }

  const mouseOutHandler = (e) => {
    e.target.style.color = ''
    e.target.style.fontSize = ''
  }

  return (
    <article>
      <img
        src={img}
        alt={title}
        onMouseEnter={(e) => {
          e.target.style.width = '250px'
          e.target.style.height = '300px'
        }}
        onMouseOut={(e) => {
          e.target.style.width = ''
          e.target.style.height = ''
        }}
      />
      <h1
        style={{
          marginTop: '0.5rem',
          fontFamily: 'Tahoma',
        }}
        onClick={() => {
          alert('hello')
        }}
        onMouseEnter={mouseEnterHandler}
        onMouseOut={mouseOutHandler}
      >
        {title}
      </h1>
      <h4
        style={{ marginTop: '0.5rem' }}
        onMouseEnter={mouseEnterHandler}
        onMouseOut={mouseOutHandler}
      >
        {author}
      </h4>
    </article>
  )
}

export default Book
