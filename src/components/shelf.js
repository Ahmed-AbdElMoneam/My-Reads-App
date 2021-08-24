import React from 'react';
import Book from './book';

class Shelf extends React.Component {
    state = {
        booksAtCurrently: [
            {
                industryIdentifiers: [{identifier: Math.random().toString(36).substr(-8)}, 3],
                title: "To Kill a Mockingbird",
                authors: ["Harper Lee"],
                sliderValue: "currentlyReading",
                imageLinks: { thumbnail: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api" }
            },
            {
                industryIdentifiers: [{identifier: Math.random().toString(36).substr(-8)}, 3],
                title: "Ender's Game",
                authors: ["Orson Scott Card"],
                sliderValue: "currentlyReading",
                imageLinks: { thumbnail: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api" }
            }
        ],
        booksAtWant: [
            {
                industryIdentifiers: [{identifier: Math.random().toString(36).substr(-8)}, 3],
                title: "1776",
                authors: ["David McCullough"],
                sliderValue: "wantToRead",
                imageLinks: { thumbnail: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api" }
            },
            {
                industryIdentifiers: [{identifier: Math.random().toString(36).substr(-8)}, 3],
                title: "Harry Potter and the Sorcerer's Stone",
                authors: ["J.K. Rowling"],
                sliderValue: "wantToRead",
                imageLinks: { thumbnail: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api" }
            }
        ],
        booksAtRead: [
            {
                industryIdentifiers: [{identifier: Math.random().toString(36).substr(-8)}, 3],
                title: "The Hobbit",
                authors: ["J.R.R. Tolkien"],
                sliderValue: "read",
                imageLinks: { thumbnail: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api" }
            },
            {
                industryIdentifiers: [{identifier: Math.random().toString(36).substr(-8)}, 3],
                title: "Oh, the Places You'll Go!",
                authors: ["Seuss"],
                sliderValue: "read",
                imageLinks: { thumbnail: "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api" }
            },
            {
                industryIdentifiers: [{identifier: Math.random().toString(36).substr(-8)}, 3],
                title: "The Adventures of Tom Sawyer",
                authors: ["Mark Twain"],
                sliderValue: "read",
                imageLinks: { thumbnail: "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api" }
            }
        ]
    }
    chooseCategory = (event) => {
        const notModifiedUrl =  event.target.parentElement.parentElement.childNodes[0].style.backgroundImage;
        const modifiedUrl = notModifiedUrl.substring(5, notModifiedUrl.length-2);
        const bookTitle = event.target.parentElement.parentElement.parentElement.childNodes[1].innerText;
        const bookAuthors = [event.target.parentElement.parentElement.parentElement.childNodes[2].innerText];
        if(event.target.value === "currentlyReading"){
            this.setState( prevState => ({
                booksAtCurrently: [...prevState.booksAtCurrently,
                    {
                        industryIdentifiers: [{identifier: Math.random().toString(36).substr(-8)}, 3],
                        title: bookTitle,
                        authors: bookAuthors,
                        sliderValue: "currentlyReading",
                        imageLinks: { thumbnail: modifiedUrl }
                    }
                ]
            }));
            this.state.booksAtWant.map((book, index) => {
                if(bookTitle === book.title){
                    this.state.booksAtWant.splice(index, 1);
                }
            });
            this.state.booksAtRead.map((book, index) => {
                if(bookTitle === book.title){
                    this.state.booksAtRead.splice(index, 1);
                }
            });
        }else if(event.target.value === "wantToRead"){
            this.setState( prevState => ({
                booksAtWant: [...prevState.booksAtWant,
                    {
                        industryIdentifiers: [{identifier: Math.random().toString(36).substr(-8)}, 3],
                        title: bookTitle,
                        authors: bookAuthors,
                        sliderValue: "wantToRead",
                        imageLinks: { thumbnail: modifiedUrl }
                    }
                ]
            }));
            this.state.booksAtCurrently.map((book, index) => {
                if(bookTitle === book.title){
                    this.state.booksAtCurrently.splice(index, 1);
                }
            });
            this.state.booksAtRead.map((book, index) => {
                if(bookTitle === book.title){
                    this.state.booksAtRead.splice(index, 1);
                }
            });
        }else if(event.target.value === "read"){
            this.setState( prevState => ({
                booksAtRead: [...prevState.booksAtRead,
                    {
                        industryIdentifiers: [{identifier: Math.random().toString(36).substr(-8)}, 3],
                        title: bookTitle,
                        authors: bookAuthors,
                        sliderValue: "read",
                        imageLinks: { thumbnail: modifiedUrl }
                    }
                ]
            }));
            this.state.booksAtCurrently.map((book, index) => {
                if(bookTitle === book.title){
                    this.state.booksAtCurrently.splice(index, 1);
                }
            });
            this.state.booksAtWant.map((book, index) => {
                if(bookTitle === book.title){
                    this.state.booksAtWant.splice(index, 1);
                }
            });
        }
        //console.log(event);
    }

    render(){
        /*console.log(this.state.booksAtCurrently);
        console.log(this.state.booksAtWant);
        console.log(this.state.booksAtRead);*/
        return(
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.state.booksAtCurrently.map((book,index) => {
                                return(
                                    <Book 
                                        key={book.industryIdentifiers[0].identifier}
                                        title={book.title}
                                        authors={book.authors}
                                        bgImage={book.imageLinks.thumbnail}
                                        sliderValue={book.sliderValue}
                                        booksPerShelf={this.state.booksAtCurrently}
                                        chooseCategory={this.chooseCategory}/>
                                );
                            })}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.state.booksAtWant.map((book,index) => {
                                return(
                                    <Book 
                                        key={book.industryIdentifiers[0].identifier}
                                        title={book.title}
                                        authors={book.authors}
                                        bgImage={book.imageLinks.thumbnail}
                                        sliderValue={book.sliderValue}
                                        booksPerShelf={this.state.booksAtWant}
                                        chooseCategory={this.chooseCategory}/>
                                );
                            })}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.state.booksAtRead.map((book,index) => {
                                return(
                                    <Book 
                                        key={book.industryIdentifiers[0].identifier}
                                        title={book.title}
                                        authors={book.authors}
                                        bgImage={book.imageLinks.thumbnail}
                                        sliderValue={book.sliderValue}
                                        booksPerShelf={this.state.booksAtRead}
                                        chooseCategory={this.chooseCategory}/>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shelf;