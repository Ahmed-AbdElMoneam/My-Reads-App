import React from 'react';
import Book from './book';

class WantToRead extends React.Component {
    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            /**
                             * Here We will loop through the books which will be put 
                             * only in Want to Read Shelf.
                             * Also we will pass the required props for <Book /> to
                             * be displayed correctly.
                             */
                            this.props.shelvesBooks.map(book => {
                                return(
                                    (book.shelf === "wantToRead") &&
                                    (<Book
                                        key={book.id}
                                        id={book.id}
                                        title={book.title}
                                        authors={book.authors}
                                        bgImage={(book.imageLinks === undefined) ?
                                            ("https://dummyimage.com/128x193/fff/aaa") :
                                            (book.imageLinks.thumbnail)}
                                        shelf={book.shelf}
                                        selectHandler={this.props.movingAroundShelves}/>
                                    )
                                );
                            })
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default WantToRead;