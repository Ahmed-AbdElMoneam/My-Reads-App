import React from 'react'
// import * as BooksAPI from './BooksAPI'
import * as BooksAPI from './BooksAPI';
import './App.css';
import Shelves from './components/shelves';
import BookResults from './components/bookResults';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    Books: [],
    searchBooks: [],
    query: ''
  }

  componentDidUpdate(){
    if(this.state.query.length){
      BooksAPI.search(this.state.query)
      .then((response) => {
        this.setState((Prev) => ({
          searchBooks: response
        }))
      })
    }
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then((res) => {
        this.setState(() => ({
          Books: res
        }))
      })
  }

  inputField = (event) => {
    this.setState({ query: event.target.value });
    /*BooksAPI.search(this.state.query)
      .then((response) => {
        this.setState({ query: event.target.value, Books: response });
      })*/
  }

  chooseCategory = (event) => {
    const bookId =  event.target.parentElement.parentElement.parentElement.id;
    if(event.target.value === "currentlyReading"){
      this.state.searchBooks.map(book => {
        if(bookId === book.id){
          book.shelf = "currentlyReading";
          this.setState((prevState) => ({
            Books: [...prevState.Books, book]
          }));
          BooksAPI.update(book, "currentlyReading")
            .then((res) => {
              this.setState((prev) => ({
                res
              }))
            })
        }
      });
    }
    else if(event.target.value === "wantToRead"){
      this.state.searchBooks.map(book => {
        if(bookId === book.id){
          book.shelf = "wantToRead";
          this.setState((prevState) => ({
            Books: [...prevState.Books, book]
          }));
          BooksAPI.update(book, "wantToRead")
            .then((res) => {
              this.setState((prev) => ({
                res
              }))
            })
        }
      });
    }
    else if(event.target.value === "read"){
      this.state.searchBooks.map(book => {
        if(bookId === book.id){
          book.shelf = "read";
          this.setState((prevState) => ({
            Books: [...prevState.Books, book]
          }));
          BooksAPI.update(book, "read")
            .then((res) => {
              this.setState((prev) => ({
                res
              }))
            })
        }
      });
    }
  }

  render() {
    //console.log(this.state.Books);
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={this.inputField} /*value={this.state.query}*//>

              </div>
            </div>
            <BookResults searchBooks={this.state.searchBooks} chooseCategory={this.chooseCategory}/>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <Shelves Books={this.state.Books}/>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
