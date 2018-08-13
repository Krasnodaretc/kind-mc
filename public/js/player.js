const createLink = (fileName, target = false, href) => {
    const link = document.createElement('a');

    link.download = fileName;
    link.setAttribute('target', target);
    link.href = href;

    return link;
};

const openDownloadableLink = (link) => {
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
};



class Player {
    constructor(playerContainer, controlsContainer, BEMEelementName) {
        this.playerContainer = playerContainer;
        this.audio = new Audio(playerContainer.querySelector('source').getAttribute('src'));
        this.controlsContainer = controlsContainer;
        this.BEMElementName = BEMEelementName;
        this.title = this.playerContainer.dataset.title;

        this.play.bind(this);
        this.pause.bind(this);
        this.download.bind(this);
        this.replay.bind(this);
        this.stop.bind(this);
        this.handleLoadTrack.bind(this);
        this.setControlsRoles.bind(this);
        this.getControlElementByName.bind(this);

        this.setControlsRoles();
    }

    play() {
        this.audio.play();
    };

    pause() {
        this.audio.pause();
    }

    download() {
        const source = this.playerContainer.querySelector('source');
        const url = source.getAttribute('src');

        const link = createLink(`${this.title}`, '_blank', url);
        openDownloadableLink(link);
    };

    replay() {
        this.stop();
        this.play();
    };

    stop() {
        this.pause();
        this.audio.currentTime = 0.0;
    };

    handleClick(el, handler) {
        el.addEventListener('click', handler);
    };

    handleLoadTrack(callback) {
        this.playerContainer.addEventListener('loadeddata', callback);
    };

    setControlsRoles() {
        const controlsWithRoles = [
            {
                control: this.getControlElementByName('play'),
                handler: this.play.bind(this),
            },
            {
                control: this.getControlElementByName('pause'),
                handler: this.pause.bind(this),
            },
            {
                control: this.getControlElementByName('download'),
                handler: this.download.bind(this),
            },
            {
                control: this.getControlElementByName('replay'),
                handler: this.replay.bind(this),
            },
        ];

        controlsWithRoles.map(({ control, handler }) => {
            this.handleClick(control, handler);
        });
    };

    getControlElementByName(name) {
        return this.controlsContainer.querySelector(`${this.BEMElementName}__${name}`);
    }
}


export default Player;