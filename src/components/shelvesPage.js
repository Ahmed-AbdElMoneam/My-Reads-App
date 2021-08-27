import React from 'react';
//Required import statements
import Shelves from './shelves';
import { Link } from 'react-router-dom';

const ShelvesPage = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Shelves
          shelvesTitles={["Currently Reading", "Want to Read", "Read"]}
          shelvesNames={["currentlyReading", "wantToRead", "read"]}
          shelvesBooks={props.shelvesBooks}
          movingAroundShelves={props.movingAroundShelves}/>
      </div>
      <div className="open-search">
        <div>{/*create our search page link and the navigation button*/}</div>
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}
 
export default ShelvesPage;