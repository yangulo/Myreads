import React, {Component} from 'react'

class Book extends Component{
    render(){
        return(
            <div className="books-grid">
                {this.props.showingBooks.filter((book)=>
                    book.shelf===this.props.shelf).map((book)=>
                    <div key={book.id} className="book">
                        <img className="book-cover" style={{ width: 128, height: 193, 
                            }} src={book.imageLinks.thumbnail} alt="Book"></img>
                        <p className="book-title">{book.title}</p>
                        <p className="book-authors">{book.authors}</p>
                        <select id={book.id} onChange={this.props.onHandleShelfChange}>
                            <option value="move" disabled>Move to...</option>
                            <option value="none">None</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                        </select>
                    </div>)
                }
            </div>
        )
    }
}

export default Book