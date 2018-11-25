import React, {Component} from 'react'

class SearchBar extends Component{
    render(){
        return(
            <div className='search-books-bar'>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title"
                        value={this.props.query}
                        onChange={this.props.onHandleChange}/>
                </div>
            </div>
        )
    }
}

export default SearchBar