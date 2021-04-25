// import utils from './utils';

class Setting {
    constructor(player) {
        this.player = player;

        this.player.template.mask.addEventListener('click', () => {
            this.hide();
        });
        this.player.template.speedButton.addEventListener('click', () => {
            this.show();
        });

        // speed
        this.player.template.speed.addEventListener('click', () => {
            this.player.template.speed.classList.add('dplayer-setting-box-speed');
        });
        for (let i = 0; i < this.player.template.speedItem.length; i++) {
            this.player.template.speedItem[i].addEventListener('click', () => {
                this.player.speed(this.player.template.speedItem[i].dataset.speed);
                this.player.template.speed.dataset.speed = this.player.template.speedItem[i].dataset.speed;
                this.player.template.speedButton.innerHTML = `<span class="dplayer-icon-content">${this.player.template.speedItem[i].dataset.speed}X</span>`;
                this.hide();
            });
        }
    }

    hide() {
        this.player.template.mask.classList.remove('dplayer-mask-show');
        setTimeout(() => {
            this.player.template.speed.classList.remove('dplayer-setting-box-speed');
        }, 300);
        this.player.controller.disableAutoHide = false;
    }

    show() {
        this.player.template.speed.classList.add('dplayer-setting-box-speed');
        this.player.template.mask.classList.add('dplayer-mask-show');
        this.player.controller.disableAutoHide = true;
    }
}

export default Setting;
