import React from 'react';
import Shelf from './shelf';

class Shelves extends React.Component {
    render(){
        return(
            <div>
                <Shelf
                    shelfTitle={this.props.shelvesTitles[0]}
                    shelfName={this.props.shelvesNames[0]}
                    shelvesBooks={this.props.shelvesBooks}
                    movingAroundShelves={this.props.movingAroundShelves}/>
                <Shelf
                    shelfTitle={this.props.shelvesTitles[1]}
                    shelfName={this.props.shelvesNames[1]}
                    shelvesBooks={this.props.shelvesBooks}
                    movingAroundShelves={this.props.movingAroundShelves}/>
                <Shelf
                    shelfTitle={this.props.shelvesTitles[2]}
                    shelfName={this.props.shelvesNames[2]}
                    shelvesBooks={this.props.shelvesBooks}
                    movingAroundShelves={this.props.movingAroundShelves}/>
            </div>
        );
    }
}

export default Shelves;