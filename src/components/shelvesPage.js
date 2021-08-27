import React from 'react';
//Required import statements
import Shelves from './shelves';
import { Link } from 'react-router-dom';

class ShelvesPage extends React.Component {
    render(){
        return(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <Shelves
                  shelvesTitles={["Currently Reading", "Want to Read", "Read"]}
                  shelvesNames={["currentlyReading", "wantToRead", "read"]}
                  shelvesBooks={this.props.shelvesBooks}
                  movingAroundShelves={this.props.movingAroundShelves}/>
              </div>
              <div className="open-search">
                <div>{/*create our search page link and the navigation button*/}</div>
                <Link to="/search"><button>Add a book</button></Link>
              </div>
            </div>
        );
    }
}

export default ShelvesPage;