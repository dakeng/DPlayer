import Icons from './icons';
import tplPlayer from '../template/player.art';
import utils from './utils';

class Template {
    constructor(options) {
        this.container = options.container;
        this.options = options.options;
        this.index = options.index;
        this.tran = options.tran;
        this.init();
    }

    init() {
        this.container.innerHTML = tplPlayer({
            options: this.options,
            index: this.index,
            tran: this.tran,
            icons: Icons,
            mobile: utils.isMobile,
            video: {
                current: true,
                pic: this.options.video.pic,
                screenshot: this.options.screenshot,
                airplay: this.options.airplay,
                preload: this.options.preload,
                url: this.options.video.url,
                subtitle: this.options.subtitle,
            },
        });

        this.volumeBar = this.container.querySelector('.dplayer-volume-bar-inner');
        this.volumeBarWrap = this.container.querySelector('.dplayer-volume-bar');
        this.volumeBarWrapWrap = this.container.querySelector('.dplayer-volume-bar-wrap');
        this.volumeButton = this.container.querySelector('.dplayer-volume');
        this.volumeButtonIcon = this.container.querySelector('.dplayer-volume-icon');
        this.volumeIcon = this.container.querySelector('.dplayer-volume-icon .dplayer-icon-content');
        this.playedBar = this.container.querySelector('.dplayer-played');
        this.loadedBar = this.container.querySelector('.dplayer-loaded');
        this.playedBarWrap = this.container.querySelector('.dplayer-bar-wrap');
        this.playedBarTime = this.container.querySelector('.dplayer-bar-time');
        this.video = this.container.querySelector('.dplayer-video-current');
        this.bezel = this.container.querySelector('.dplayer-bezel-icon');
        this.playButton = this.container.querySelector('.dplayer-play-icon');
        this.mobilePlayButton = this.container.querySelector('.dplayer-mobile-play');
        this.videoWrap = this.container.querySelector('.dplayer-video-wrap');
        this.controllerMask = this.container.querySelector('.dplayer-controller-mask');
        this.ptime = this.container.querySelector('.dplayer-ptime');
        this.mask = this.container.querySelector('.dplayer-mask');
        this.speed = this.container.querySelector('.dplayer-speed');
        this.speedButton = this.container.querySelector('.dplayer-speed-icon');
        this.speedItem = this.container.querySelectorAll('.dplayer-setting-speed-item');
        this.dtime = this.container.querySelector('.dplayer-dtime');
        this.controller = this.container.querySelector('.dplayer-controller');
        this.browserFullButton = this.container.querySelector('.dplayer-full-icon');
        this.webFullButton = this.container.querySelector('.dplayer-full-in-icon');
        this.qualityList = this.container.querySelector('.dplayer-quality-list');
        this.camareButton = this.container.querySelector('.dplayer-camera-icon');
        this.airplayButton = this.container.querySelector('.dplayer-airplay-icon');
        this.subtitleButton = this.container.querySelector('.dplayer-subtitle-icon');
        this.subtitleButtonInner = this.container.querySelector('.dplayer-subtitle-icon .dplayer-icon-content');
        this.subtitle = this.container.querySelector('.dplayer-subtitle');
        this.qualityButton = this.container.querySelector('.dplayer-quality-icon');
        this.barWrap = this.container.querySelector('.dplayer-bar-wrap');
        this.notice = this.container.querySelector('.dplayer-notice');
        this.infoPanel = this.container.querySelector('.dplayer-info-panel');
        this.infoPanelClose = this.container.querySelector('.dplayer-info-panel-close');
        this.infoVersion = this.container.querySelector('.dplayer-info-panel-item-version .dplayer-info-panel-item-data');
        this.infoFPS = this.container.querySelector('.dplayer-info-panel-item-fps .dplayer-info-panel-item-data');
        this.infoType = this.container.querySelector('.dplayer-info-panel-item-type .dplayer-info-panel-item-data');
        this.infoUrl = this.container.querySelector('.dplayer-info-panel-item-url .dplayer-info-panel-item-data');
        this.infoResolution = this.container.querySelector('.dplayer-info-panel-item-resolution .dplayer-info-panel-item-data');
        this.infoDuration = this.container.querySelector('.dplayer-info-panel-item-duration .dplayer-info-panel-item-data');
    }
}

export default Template;
