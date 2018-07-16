import Player from './player';
import $ from "jquery";

$(document).ready(() => {
    const players = [...document.querySelectorAll('.track')];

    players.forEach(item => {
        const playerContainer = item.querySelector('.audio');
        const playerControlsContainer = item.querySelector('.controls');

        const audioPlayer = new Player(playerContainer, playerControlsContainer);
        debugger;
    });
});
