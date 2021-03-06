import React from 'react';
import YouTube from 'react-youtube';

class Youtube extends React.Component {
    render() {
        const opts = {
            height: '570',
            width: '100%',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
            },
        };

        return <YouTube videoId="BQJxC-mmb2M" opts={opts} onReady={this._onReady} />;
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default Youtube;