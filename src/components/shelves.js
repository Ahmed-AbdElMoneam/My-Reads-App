import React from 'react';
import CurrentlyReading from './currentlyReading';
import WantToRead from './wantToRead';
import Read from './read';

class Shelves extends React.Component {
    render(){
        return(
            <div>
                <CurrentlyReading
                    shelvesBooks={this.props.shelvesBooks}
                    movingAroundShelves={this.props.movingAroundShelves}/>
                <WantToRead
                    shelvesBooks={this.props.shelvesBooks}
                    movingAroundShelves={this.props.movingAroundShelves}/>
                <Read
                    shelvesBooks={this.props.shelvesBooks}
                    movingAroundShelves={this.props.movingAroundShelves}/>
            </div>
        );
    }
}

export default Shelves;