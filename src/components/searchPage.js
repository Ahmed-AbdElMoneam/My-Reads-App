import React from 'react';
import SearchResults from './searchResults';
import { Link } from 'react-router-dom';

class SearchPage extends React.Component {
    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <div>{/*create our main page link and the navigation button*/}
                    <Link className="close-search" to="/" onClick={this.props.returningToMainPage}>Close</Link>
                    </div>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={this.props.searchHandler} 
                            value={this.props.query}/>
                    </div>
                </div>
                <div>
                    {
                        (this.props.query) &&   //To delete all results when there is no query
                        (<SearchResults
                            query={this.props.query}
                            searchBooks={this.props.searchBooks} 
                            searchToChooseCategories={this.props.searchToChooseCategories}/>)
                    }
                </div>
            </div>
        );
    }
}

export default SearchPage;