import React, { Component } from 'react'

class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isImgShown: true,
    }
  }

  render() {
    const { id, img, title, author, removeBook } = this.props

    const toggleInfoHover = (e, state) => {
      if (state === 'in') {
        e.target.style.color = 'rgb(150, 5, 5)'
        e.target.style.fontSize = '125%'
      } else if (state === 'out') {
        e.target.style.color = ''
        e.target.style.fontSize = ''
      }
    }
    const toggleImgHover = (e, state) => {
      if (state === 'in') {
        e.target.style.width = '250px'
        e.target.style.height = '300px'
      } else if (state === 'out') {
        e.target.style.width = ''
        e.target.style.height = ''
      }
    }

    return (
      <article>
        {this.state.isImgShown && (
          <img
            src={img}
            alt={title}
            onMouseEnter={(e) => toggleImgHover(e, 'in')}
            onMouseOut={(e) => toggleImgHover(e, 'out')}
          />
        )}
        <h1
          style={{
            marginTop: '0.5rem',
            fontFamily: 'Tahoma',
          }}
          onMouseEnter={(e) => toggleInfoHover(e, 'in')}
          onMouseOut={(e) => toggleInfoHover(e, 'out')}
        >
          {title}
        </h1>
        <h4
          style={{ marginTop: '0.5rem' }}
          onMouseEnter={(e) => toggleInfoHover(e, 'in')}
          onMouseOut={(e) => toggleInfoHover(e, 'out')}
        >
          {author}
        </h4>
        <div className='buttons'>
          <button
            id='toggleImage'
            className='btn'
            onClick={() =>
              this.setState({ isImgShown: !this.state.isImgShown })
            }
          >
            {this.state.isImgShown ? 'Clear Image' : 'Show Image'}
          </button>
          <button
            id='removeItem'
            className='btn'
            onClick={() => removeBook(id)}
          >
            Remove book
          </button>
        </div>
      </article>
    )
  }
}

export default Book
