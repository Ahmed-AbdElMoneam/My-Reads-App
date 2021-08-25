import React from 'react';
import CurrentlyReading from './currentlyReading';
import Read from './read';
import WantToRead from './wantToRead';
import Book from './book';

class Shelves extends React.Component {
    state = {
        
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
        }
        else if(event.target.value === "wantToRead"){
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
        }
        else if(event.target.value === "read"){
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
    }

    render(){
        return(
            <div>
                <CurrentlyReading Books={this.props.Books} chooseCategory={this.chooseCategory}/>
                <WantToRead Books={this.props.Books} chooseCategory={this.chooseCategory}/>
                <Read Books={this.props.Books} chooseCategory={this.chooseCategory}/>
            </div>
        );
    }
}

export default Shelves;