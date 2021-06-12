import React, { Children } from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

// Set Up Vars
const imageLink = 'https://m.media-amazon.com/images/I/51eDa4ytwpL.jpg'
const title = 'زاد المعاد في هدي خير العباد'
const author = 'ابن القيم الجوزية'

const secondBook = {
  img: {
    link: 'https://m.media-amazon.com/images/I/51p1zVCmtLL.jpg',
    alt: "Al-Da'a w Al-Dawa'a",
  },
  title: 'الداء والدواء',
  author: 'ابن القيم الجوزية',
}

const thirdBook = {
  img: {
    link: 'https://m.media-amazon.com/images/I/51eu92L2F7L.jpg',
    alt: 'Al-Bidaya w Al-Nehaya',
  },
  title: 'البداية والنهاية',
  author: 'ابن كثير',
}

const fourthBook = {
  img: {
    link: 'https://m.media-amazon.com/images/I/51sje1ZagWL.jpg',
    alt: 'تحفة العروس',
  },
  title: 'تحفة العروس',
  author: 'الإستانبولي',
}

const fifthBook = {
  img: 'https://m.media-amazon.com/images/I/51lH7TJnBiL.jpg',
  title: 'الجامع لأحكام القرآن',
  author: 'القرطبي',
}

const sixthBook = {
  img: 'https://m.media-amazon.com/images/I/51D+h4Uv5tL.jpg',
  title: 'صور ومواقف من حياة الصحابة',
  author: 'سعد يوسف أبو عزيز',
}

const seventhBook = {
  img: 'https://m.media-amazon.com/images/I/51MjnGpltxL._SY346_.jpg',
  title: 'مائة من عظماء أمة الإسلام',
  author: 'جهاد الترباني',
}

const eighthBook = {
  img: 'https://m.media-amazon.com/images/I/51eCVUc-AlL._SY346_.jpg',
  title: 'اجتماع الجيوش الإسلامية',
  author: 'ابن القيم الجوزية',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book img={imageLink} alt='Zad Al-Maad' title={title} author={author}>
        <p
          style={{
            marginTop: '0.5rem',
            fontFamily: 'Tahoma',
            color: 'brown',
            textAlign: 'start',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, illum
          architecto vitae tempora sed perferendis soluta sunt numquam ipsa
          harum?
        </p>
      </Book>

      <Book
        img={secondBook.img.link}
        alt={secondBook.img.alt}
        title={secondBook.title}
        author={secondBook.author}
      />

      <Book
        img={thirdBook.img.link}
        alt={thirdBook.img.alt}
        title={thirdBook.title}
        author={thirdBook.author}
      />

      <Book
        img={fourthBook.img.link}
        alt={fourthBook.img.alt}
        title={fourthBook.title}
        author={fourthBook.author}
      />

      <Book
        img={fifthBook.img}
        alt={fifthBook.title}
        title={fifthBook.title}
        author={fifthBook.author}
      />

      <Book
        img={sixthBook.img}
        alt={sixthBook.title}
        title={sixthBook.title}
        author={sixthBook.author}
      />

      <Book
        img={seventhBook.img}
        alt={seventhBook.title}
        title={seventhBook.title}
        author={seventhBook.author}
      />

      <Book
        img={eighthBook.img}
        alt={eighthBook.title}
        title={eighthBook.title}
        author={eighthBook.author}
      />
    </section>
  )
}

/* 
// Alternative wayes to access parameters object
// 01
const Book = (props) => {
  const { img, alt, title, author, children }
  src={img} alt={alt} title={title} author={author}
}
// 02
const Book = ({ img, alt, title, author }) => {
  src={img} alt={alt} title={title} author={author}
}
*/
const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt={props.alt} />
      <h1
        style={{
          marginTop: '0.5rem',
          fontFamily: 'Tahoma',
        }}
      >
        {props.title}
      </h1>
      <h4 style={{ marginTop: '0.5rem' }}>{props.author}</h4>
      {props.children}
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
