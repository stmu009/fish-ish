import React, { Component } from 'react';
import { TileMap, Body } from 'react-game-kit'

class Background extends Component {
    render() {
        return (
            <div>
                <TileMap
                    src="/images/final/backgroundCenter.png"
                    columns={3}
                    rows={1}
                    renderTile={(tile, src, styles) => {
                        return <img src={src} />;
                    }}
                    layers={[
                        [
                            1, 1, 1,
                        ]
                    ]}
                />
            </div>
        );
    }
}

export default Background;