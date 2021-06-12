import React, { Children } from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

// Set Up Vars
const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/51eDa4ytwpL.jpg',
    title: 'زاد المعاد في هدي خير العباد',
    author: 'ابن القيم الجوزية',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/51p1zVCmtLL.jpg',
    title: 'الداء والدواء',
    author: 'ابن القيم الجوزية',
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/51eu92L2F7L.jpg',
    title: 'البداية والنهاية',
    author: 'ابن كثير',
  },
  {
    id: 4,
    img: 'https://m.media-amazon.com/images/I/51sje1ZagWL.jpg',
    title: 'تحفة العروس',
    author: 'الإستانبولي',
  },
  {
    id: 5,
    img: 'https://m.media-amazon.com/images/I/51lH7TJnBiL.jpg',
    title: 'الجامع لأحكام القرآن',
    author: 'القرطبي',
  },
  {
    id: 6,
    img: 'https://m.media-amazon.com/images/I/51D+h4Uv5tL.jpg',
    title: 'صور ومواقف من حياة الصحابة',
    author: 'سعد يوسف أبو عزيز',
  },
  {
    id: 7,
    img: 'https://m.media-amazon.com/images/I/51MjnGpltxL._SY346_.jpg',
    title: 'مائة من عظماء أمة الإسلام',
    author: 'جهاد الترباني',
  },
  {
    id: 8,
    img: 'https://m.media-amazon.com/images/I/51eCVUc-AlL._SY346_.jpg',
    title: 'اجتماع الجيوش الإسلامية',
    author: 'ابن القيم الجوزية',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book
            key={book.id}
            // you can use book={book} to pass the whole object
            // or use {...book} to pass it's properties directly
            {...book}
          />
        )
      })}
    </section>
  )
}

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
    <article className='book'>
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

ReactDom.render(<BookList />, document.getElementById('root'))
