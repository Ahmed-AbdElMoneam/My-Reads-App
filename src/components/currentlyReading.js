import React from 'react';
import Book from './book';

class CurrentlyReading extends React.Component {
    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.Books.map(book => {
                            return(
                                (book.shelf === "currentlyReading") && (<Book 
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

export default CurrentlyReading;