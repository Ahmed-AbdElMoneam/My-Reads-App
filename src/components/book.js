import React from 'react';

class Book extends React.Component {
    render(){
        return(
            /**
             * We used the props sent from the parent in the right places to
             * fully control the book and extract useful data when required 
             * from it.
             */
            <li>
                <div className="book" id={this.props.id}>
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.bgImage}")`}}></div>
                        <div className="book-shelf-changer">
                            <select onChange={this.props.selectHandler} defaultValue={this.props.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">
                        {
                            (this.props.authors) && (this.props.authors.join())
                        }
                    </div>
                </div>
            </li>
        );
    }
}

export default Book;