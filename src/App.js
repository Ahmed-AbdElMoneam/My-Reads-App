import React from 'react'
// import * as BooksAPI from './BooksAPI'
import * as BooksAPI from './BooksAPI';
import './App.css';

import SearchPage from './components/searchPage';
import ShelvesPage from './components/shelvesPage';

import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    shelvesBooks: [], //Array for books in main page.
    searchBooks: [],  //Array for books in search page.
    query: '' //Search query
  }

  /**
   * With componentDidUpdate() I can fetch the results
   * that match my search query.
   */
  componentDidUpdate(){
    if(this.state.query){
      BooksAPI.search(this.state.query)
      .then((response) => {
        this.setState({ searchBooks: response })
      })
    }
  }

  /**
   * Here I have fetched the set of books which will
   * be shown in the main page  for the first time
   */
  componentDidMount(){
    BooksAPI.getAll()
      .then((res) => {
        this.setState({ shelvesBooks: res })
      });
  }

  /**
   * 
   * @param {event} event 
   * @todo: adding what we search for in query
   */
  searchHandler = (event) => {
    this.setState({ query: event.target.value });
  }

  /**
   * To clear input in order not to fetch any other requests
   */
  returningToMainPage = () => {
    this.setState({ query: '' });
  }
  
  /**
   * 
   * @param event 
   * @function it moves the book we choose to the correct shelf
   * in the main page
   */
  searchToChooseCategories = (event) => {
    const currentBookId =  event.target.parentElement.parentElement.parentElement.id; //Get current book ID
    if(event.target.value === "currentlyReading"){  //Check User choice
      BooksAPI.get(currentBookId) //To get the book
      .then((book) => {
        book.shelf = "currentlyReading";
        BooksAPI.update(book, "currentlyReading");  //Update book's shelf
        /**
         * Currently we are trying to make the array which will
         * be used to show the books in our shelves. 
         */
        let desiredShelvesArray = this.state.shelvesBooks;
        this.state.shelvesBooks.map((bookInShelf, shelfIndex) => {
          if(bookInShelf.id === book.id){
            desiredShelvesArray.splice(shelfIndex, 1);
          }
        });
        desiredShelvesArray.push(book);
        /*
        * Here we will set the array we made to shelvesBooks 
        * array which will show the shelves in the main page.
        */
        this.setState({ shelvesBooks: desiredShelvesArray });
      })
    }
    /**
     * The rest of the function will be the same but only the 
     * condition will vary.
     */
    else if(event.target.value === "wantToRead"){  
      BooksAPI.get(currentBookId)
      .then((book) => {
        book.shelf = "wantToRead";
        BooksAPI.update(book, "wantToRead");
        let desiredShelvesArray = this.state.shelvesBooks;
        this.state.shelvesBooks.map((bookInShelf, shelfIndex) => {
          if(bookInShelf.id === book.id){
            desiredShelvesArray.splice(shelfIndex, 1);
          }
        });
        desiredShelvesArray.push(book);
        this.setState({ shelvesBooks: desiredShelvesArray });
      })
    }else if(event.target.value === "read"){
      BooksAPI.get(currentBookId)
      .then((book) => {
        book.shelf = "read";
        BooksAPI.update(book, "read");
        let desiredShelvesArray = this.state.shelvesBooks;
        this.state.shelvesBooks.map((bookInShelf, shelfIndex) => {
          if(bookInShelf.id === book.id){
            desiredShelvesArray.splice(shelfIndex, 1);
          }
        });
        desiredShelvesArray.push(book);
        this.setState({ shelvesBooks: desiredShelvesArray });
      })
    }else if(event.target.value === "none"){
      BooksAPI.get(currentBookId)
      .then((book) => {
        book.shelf = "none";
        BooksAPI.update(book, "none");
        let desiredShelvesArray = this.state.shelvesBooks;
        this.state.shelvesBooks.map((bookInShelf, shelfIndex) => {
          if(bookInShelf.id === book.id){
            desiredShelvesArray.splice(shelfIndex, 1);
          }
        });
        this.setState({ shelvesBooks: desiredShelvesArray });
      })
    }
  }

  /**
   * 
   * @param event 
   * @function This function will help to change the book's shelves.
   * 
   */
  movingAroundShelves = (event) => {
    const currentBookId =  event.target.parentElement.parentElement.parentElement.id; //Get current book ID
    if(event.target.value === "currentlyReading"){  //Check User choice
      this.state.shelvesBooks.map((book, index) => {
        if(currentBookId === book.id){  //The condition which generate the book we need
          BooksAPI.update(book, "currentlyReading");  //Update book's shelf
          /**
           * Currently we are trying to make the array which will
           * be used to put the books in the correct shelves. 
           */
          book.shelf = "currentlyReading";
          let desiredShelvesArray = this.state.shelvesBooks;
          desiredShelvesArray.push(book);
          desiredShelvesArray.splice(index, 1);
          this.setState({ shelvesBooks: desiredShelvesArray });
        }
      })
    }
    /**
     * The rest of the function will be the same but only the 
     * condition will vary.
     */
    else if(event.target.value === "wantToRead"){
      this.state.shelvesBooks.map((book, index) => {
        if(currentBookId === book.id){
          BooksAPI.update(book, "wantToRead");
          book.shelf = "wantToRead";
          let desiredShelvesArray = this.state.shelvesBooks;
          desiredShelvesArray.push(book);
          desiredShelvesArray.splice(index, 1);
          this.setState({ shelvesBooks: desiredShelvesArray });
        }
      })
    }
    else if(event.target.value === "read"){
      this.state.shelvesBooks.map((book, index) => {
        if(currentBookId === book.id){
          BooksAPI.update(book, "read");
          book.shelf = "read";
          let desiredShelvesArray = this.state.shelvesBooks;
          desiredShelvesArray.push(book);
          desiredShelvesArray.splice(index, 1);
          this.setState({ shelvesBooks: desiredShelvesArray });
        }
      })
    }
    else if(event.target.value === "none"){
      this.state.shelvesBooks.map((book,index) => {
        if(currentBookId === book.id){
          BooksAPI.update(book, "none");
          let desiredShelvesArray = this.state.shelvesBooks;
          desiredShelvesArray.splice(index, 1);
          this.setState({ shelvesBooks: desiredShelvesArray });
        }
      })
    }
  }

  render() {
    return (  /*Browser Router & Route will help us to make 
                different pages(combine different components together to make new pages)*/
      <BrowserRouter> 
        <div className="app">
            <Route path="/search" render={() => (
              <SearchPage //Passing the required props
                query={this.state.query}
                searchBooks={this.state.searchBooks} 
                searchToChooseCategories={this.searchToChooseCategories}
                searchHandler={this.searchHandler}
                returningToMainPage={this.returningToMainPage} />
            )} />
            <Route exact path="/" render={() => (
              <ShelvesPage //Passing the required props
                shelvesBooks={this.state.shelvesBooks} 
                movingAroundShelves={this.movingAroundShelves} />
            )} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
