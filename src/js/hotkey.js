class HotKey {
    constructor(player) {
        if (player.options.hotkey) {
            document.addEventListener('keydown', (e) => {
                if (player.focus) {
                    const tag = document.activeElement.tagName.toUpperCase();
                    const editable = document.activeElement.getAttribute('contenteditable');
                    if (tag !== 'INPUT' && tag !== 'TEXTAREA' && editable !== '' && editable !== 'true') {
                        const event = e || window.event;
                        let percentage;
                        switch (event.keyCode) {
                            case 32:
                                event.preventDefault();
                                player.toggle();
                                break;
                            case 37:
                                event.preventDefault();
                                player.seek(player.video.currentTime - 5);
                                player.controller.setAutoHide();
                                break;
                            case 39:
                                event.preventDefault();
                                player.seek(player.video.currentTime + 5);
                                player.controller.setAutoHide();
                                break;
                            case 38:
                                event.preventDefault();
                                percentage = player.volume() + 0.1;
                                player.volume(percentage);
                                break;
                            case 40:
                                event.preventDefault();
                                percentage = player.volume() - 0.1;
                                player.volume(percentage);
                                break;
                        }
                    }
                }
            });
        }

        document.addEventListener('keydown', this.cancelFullScreenHandler);
    }

    doHotKey(e) {
        if (this.player.focus) {
            const tag = document.activeElement.tagName.toUpperCase();
            const editable = document.activeElement.getAttribute('contenteditable');
            if (tag !== 'INPUT' && tag !== 'TEXTAREA' && editable !== '' && editable !== 'true') {
                const event = e || window.event;
                let percentage;
                switch (event.keyCode) {
                    case 32:
                        event.preventDefault();
                        this.player.toggle();
                        break;
                    case 37:
                        event.preventDefault();
                        if (this.player.options.live) {
                            break;
                        }
                        this.player.seek(this.player.video.currentTime - 5);
                        this.player.controller.setAutoHide();
                        break;
                    case 39:
                        event.preventDefault();
                        if (this.player.options.live) {
                            break;
                        }
                        this.player.seek(this.player.video.currentTime + 5);
                        this.player.controller.setAutoHide();
                        break;
                    case 38:
                        event.preventDefault();
                        percentage = this.player.volume() + 0.1;
                        this.player.volume(percentage);
                        break;
                    case 40:
                        event.preventDefault();
                        percentage = this.player.volume() - 0.1;
                        this.player.volume(percentage);
                        break;
                }
            }
        }
    }

    cancelFullScreen(e) {
        const event = e || window.event;
        switch (event.keyCode) {
            case 27:
                if (this.player.fullScreen.isFullScreen('web')) {
                    this.player.fullScreen.cancel('web');
                }
                break;
        }
    }

    destroy() {
        if (this.player.options.hotkey) {
            document.removeEventListener('keydown', this.doHotKeyHandler);
        }
        document.removeEventListener('keydown', this.cancelFullScreenHandler);
    }
}

export default HotKey;
