import React, { Component } from 'react';
import Cat from '../../../images/Cat';
import { Masonry } from "masonic";
import ShowLikeImage from './ShowLikeImage';
import "./LikeThis.css";

class LikeThis extends Component {
    render() {
        const items = (
            Array.from(Array(5000), () => ({
                id: i++,
                src: randomChoice(Cat)
            }))
        );

        return (
            <div className="">
                <div className="content-body">
                    <Masonry
                        // Provides the data for our grid items
                        items={items}
                        // Adds 8px of space between the grid cells
                        columnGutter={8}
                        // Sets the minimum column width to 172px
                        columnWidth={220}
                        // Pre-renders 5 windows worth of content
                        overscanBy={5}
                        // This is the grid item component
                        render={ShowLikeImage}
                    />
                </div>
            </div>
        );
    }
}

const randomChoice = items => items[Math.floor(Math.random() * items.length)];
let i = 0;

export default LikeThis;