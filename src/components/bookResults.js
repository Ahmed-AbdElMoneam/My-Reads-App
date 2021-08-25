import React from 'react';
import Book from './book';

class BookResults extends React.Component {
    render(){
        return(
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  (this.props.searchBooks) && (this.props.searchBooks.length > 0) &&
                    this.props.searchBooks.map(book => {
                      return(
                        <div key={book.id}>
                          <Book 
                            key={book.id}
                            id={book.id}
                            title={book.title}
                            authors={book.authors}
                            bgImage={(book.imageLinks === undefined) ? ("https://dummyimage.com/128x193/fff/aaa") : (book.imageLinks.thumbnail)}
                            shelf="none"
                            chooseCategory={this.props.chooseCategory}/>
                        </div>
                      );
                    })
                }
              </ol>
            </div>
        );
    }
}

export default BookResults;