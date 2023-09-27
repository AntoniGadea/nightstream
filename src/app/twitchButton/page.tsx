import React from 'react';

function TwitchButton() {
    return (
        <div>
            <a href="https://id.twitch.tv/oauth2/authorize?client_id=2bnnok6jeyekdwmrrpunp51juxru1f&redirect_uri=http://localhost:3000/twitchredirect&response_type=code&scope=user:edit" target="_blank" rel="noopener noreferrer">
                <button>Ir a Twitch</button>
            </a>
        </div>
    );
}

export default TwitchButton;