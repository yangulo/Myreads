import React, {Component} from 'react'
import './App.css'
import SearchBar from './search_bar'
import Book from './book'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class BookList extends Component{
    state={
        query:'',
        books:[]
        
    }

    componentDidMount = () => {
        BooksAPI.getAll().then((books)=>{
            this.setState({books: books})
        })
    }
    
    handleChange=(event)=>{
        this.updateQuery(event.target.value)
    }

    handleShelfChange=(event)=>{
        // console.log(event.target.id)
        // console.log(event.target.value)
        this.updateShelf(event.target.value, event.target.id)
    }

    updateShelf=(value, id)=>{
        this.state.books.filter(book => 
            book.id === id
        ).map(book => book.shelf = value)
        BooksAPI.update(id, value)
        // console.log(this.state)
        this.setState((state) => ({
             books: state.books
           }))
    }

    updateQuery = (q) => {
        this.setState({query:q.trim()})
    }

    render(){
        let showingBooks
        const { query, books } = this.state
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingBooks= this.state.books.filter((book) => 
            match.test(book.title))} 
        else {showingBooks = books}
        
        showingBooks.sort(sortBy('name'))
        return(
            <div className="app">
                <br/>
                <br/>
                <SearchBar query={this.state.query} onHandleChange={this.handleChange}/>
                <h1 className="bookshelf">My Reads</h1>
                <div className="list-books">
                    <div className="list-books-content">
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <Book showingBooks={showingBooks} shelf="currentlyReading" onHandleShelfChange={this.handleShelfChange}/>
                            </div>
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <Book showingBooks={showingBooks} shelf="wantToRead" onHandleShelfChange={this.handleShelfChange}/>
                            </div>
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <Book showingBooks={showingBooks} shelf="read" onHandleShelfChange={this.handleShelfChange}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookList