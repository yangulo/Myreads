import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import BookList from './book_list'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
          <div className="search-books">
            <Route exact path='/' component={BookList}/>
          </div>
      </div>
    )
  }
}

export default BooksApp
