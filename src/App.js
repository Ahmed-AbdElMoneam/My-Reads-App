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
   * Here I have fetched the set of books which will
   * be shown in the main page  for the first time
   */
  async componentDidMount(){
    const response = await BooksAPI.getAll();
    this.setState({ shelvesBooks: response });
  }

  /**
   * 
   * @param {event} event 
   * @todo: adding what we search for in query
   */
  searchHandler = (event) => {
    this.setState({ query: event.target.value }, () => { this.updateSearchResults() })
  }

  updateSearchResults = async () => {
    if(this.state.query){
      let response = await BooksAPI.search(this.state.query);
      this.handleComingResponse(response);
    }
  }

  handleComingResponse = async (response) => {
    console.log(response);
    if(response.length > 0){
      response.map(responseBook => {
        const book = this.state.shelvesBooks.find(shelfBook => shelfBook.id===responseBook.id)
        if(book){
          responseBook.shelf=book.shelf;
          this.updateBooksAPI(responseBook, book.shelf);
        }else{
          responseBook.shelf="none";
          this.updateBooksAPI(responseBook, "none");
        }
      });
      this.setState({ searchBooks: response });
    }
    else{
      this.setState({ searchBooks: ["Not Valid Search"] }, () => console.log(this.state.searchBooks));
    }
  }
  
  updateBooksAPI = async (response, bookShelf) => {
    await BooksAPI.update(response, bookShelf);
  }

  /**
   * To clear input in order not to fetch any other requests
   */
  returningToMainPage = () => {
    this.setState({ query: '' });
  }

  updateMainPageShelves = async (currentBookId, shelfName) => {
    //To get the book
    const book = await BooksAPI.get(currentBookId);
    book.shelf = shelfName;
    BooksAPI.update(book, shelfName);  //Update book's shelf
    this.setState((prevState) => ({
      shelvesBooks: [...prevState.shelvesBooks.filter(shelfBook => shelfBook.id !== currentBookId), book]
    }));
  }

  chooseNoneShelf = (currentBookId) => {
    BooksAPI.get(currentBookId)
      .then((book) => {
        book.shelf = "none";
        BooksAPI.update(book, "none");
        this.setState((prevState) => ({
          shelvesBooks: [...prevState.shelvesBooks.filter(shelfBook => shelfBook.id !== currentBookId)]
        }));
      })
  }
  
  /**
   * 
   * @param event 
   * @function it moves the book we choose to the correct shelf
   * in the main page
   * 
   */
  addBookToCorrectShelf = (event) => {
    const currentBookId =  event.target.parentElement.parentElement.parentElement.id; //Get current book ID
    //Check User choice
    if(event.target.value === "currentlyReading"){ this.updateMainPageShelves(currentBookId, "currentlyReading") }
    /**
     * The rest of the function will be the same but only the condition will vary.
     */
    else if(event.target.value === "wantToRead"){ this.updateMainPageShelves(currentBookId, "wantToRead") }
    else if(event.target.value === "read"){ this.updateMainPageShelves(currentBookId, "read") }
    else if(event.target.value === "none"){ this.chooseNoneShelf(currentBookId) }
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
                searchToChooseCategories={this.addBookToCorrectShelf}
                searchHandler={this.searchHandler}
                returningToMainPage={this.returningToMainPage} />
            )} />
            <Route exact path="/" render={() => (
              <ShelvesPage //Passing the required props
                shelvesBooks={this.state.shelvesBooks} 
                movingAroundShelves={this.addBookToCorrectShelf} />
            )} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
