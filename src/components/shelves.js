import React from 'react';
import Shelf from './shelf';

class Shelves extends React.Component {
    render(){
        return(
            this.props.Shelves.map((shelf, index) => (
                <Shelf key={index} Books={this.props.Books} shelfTitle={this.props.Shelves[index]}/>
            ))
        );
    }
}

export default Shelves;