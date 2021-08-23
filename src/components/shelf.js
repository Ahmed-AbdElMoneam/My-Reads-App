import React from 'react';
import Book from './book';

class Shelf extends React.Component {
    state = {
        booksPerShelf: [
            {
                industryIdentifiers: [{identifier: 0}, 3],
                title: "Ender's Game",
                authors: ["Orson Scott Card"],
                imageLinks: { thumbnail: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api" }
            },
            {
                industryIdentifiers: [{identifier: 1}, 3],
                title: "Ender's Game",
                authors: ["Orson Scott Card"],
                imageLinks: { thumbnail: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api" }
            },
        ],
        selection: ''
    }

    chooseCategory = (event) => {
        this.setState({ 
            selection: event.target.value,
        });
        console.log(event);
    }

    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.state.booksPerShelf.map(book => {
                            return(
                                <Book 
                                    key={book.industryIdentifiers[0].identifier}
                                    title={book.title}
                                    authors={book.authors}
                                    bgImage={book.imageLinks.thumbnail}
                                    booksPerShelf={this.state.booksPerShelf}
                                    chooseCategory={this.chooseCategory}/>
                            );
                        })}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Shelf;