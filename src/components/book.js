import React from 'react';

class Book extends React.Component {
    render(){
        return(
            <li>
                <div className="book" id={this.props.id}>
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.bgImage}")`}}></div>
                        <div className="book-shelf-changer">
                            <select onChange={this.props.chooseCategory} defaultValue={this.props.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{
                        (this.props.authors) && 
                        (this.props.authors.map((author,index) => {
                            if(index < this.props.authors.length-1){ return author+", " }
                            else{ return author }
                        }))
                    }</div>
                </div>
            </li>
        );
    }
}

export default Book;