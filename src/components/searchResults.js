import React from 'react';
import Book from './book';

class BookResults extends React.Component {
    render(){
        return(
          /**
           * Here We will loop through the books which will be displayed 
           * in search results. and we have created a condition to prevent
           * any search term outside the search terms attached from crashing
           * the application. 
           * Also we will pass the required props for <Book /> to
           * be displayed correctly.
           */
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  (this.props.searchBooks.length === 20) &&
                  (this.props.searchBooks.map(book => {
                    return(
                      <div key={book.id}>
                        <Book 
                          key={book.id}
                          id={book.id}
                          title={book.title}
                          authors={book.authors}
                          bgImage={(book.imageLinks === undefined) ?
                            ("https://dummyimage.com/128x193/fff/aaa") :
                            (book.imageLinks.thumbnail)}
                          shelf={book.shelf ? book.shelf : "none"}
                          selectHandler={this.props.searchToChooseCategories}/>
                      </div>
                    );
                  }))
                }
                {
                  (this.props.searchBooks.length === 1) && (this.props.query) &&
                  ( <h2>Loading... Please Check that you have entered valid search term.</h2> )
                }
              </ol>
            </div>
        );
    }
}

export default BookResults;