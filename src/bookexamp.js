<div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {/*(this.props.num === 0) && */
                        this.state.booksAtCurrently.map(book => {
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
                        {/*(this.props.num === 1) &&*/
                        this.state.booksAtWant.map(book => {
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
                        {/*(this.props.num === 2) &&*/
                        this.state.booksAtRead.map(book => {
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


