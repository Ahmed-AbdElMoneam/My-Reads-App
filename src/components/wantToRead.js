import React from 'react';
import Book from './book';

class WantToRead extends React.Component {
    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.Books.map(book => {
                            return(
                                (book.shelf === "wantToRead") && (<Book 
                                    key={book.id}
                                    title={book.title}
                                    authors={book.authors}
                                    bgImage={(book.imageLinks === undefined) ? ("https://dummyimage.com/128x193/fff/aaa") : (book.imageLinks.thumbnail)}
                                    shelf={book.shelf}
                                    chooseCategory={this.props.chooseCategory}/>)
                            );
                        })}
                    </ol>
                </div>
            </div>
        );
    }
}

export default WantToRead;