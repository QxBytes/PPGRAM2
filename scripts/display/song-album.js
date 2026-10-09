import SongSelector from './song-selector.js';
import SplashImage from './splash-image.js';
import { SongManager } from '../managers/index.js';

/** @typedef {import('../data/albums.js').Album} Album */

/** The song album element.
 *  @augments HTMLElement
 *  @author bloopsoup */
export default class SongAlbum extends HTMLElement {
    /** @type {HTMLHeadingElement} */
    #header
    /** @type {SongSelector} */
    #selector
    /** @type {SplashImage} */
    #image

    /** Create the element. */
    constructor() {
        super();
        this.style.display = 'contents';

        const section = document.createElement('section');
        const row = document.createElement('div');
        row.className = 'row album-row';
        const column = document.createElement('div');
        column.className = 'column';

        this.#header = document.createElement('h2');
        const tracksHeader = document.createElement('h3');
        tracksHeader.textContent = 'TRACKS';
        this.#selector = new SongSelector();

        this.#image = new SplashImage();
        this.#image.className = 'floating side-image';

        column.append(this.#header, tracksHeader, this.#selector);
        row.append(column, this.#image);
        section.appendChild(row);
        this.appendChild(section);
    }

    /** Links the album to its data and song manager.
     *  @param {SongManager} manager - The song manager.
     *  @param {Album} album - The album. */
    link(manager, album) {
        const headerID = `${album.id}-album-header`;
        const section = this.querySelector('section');
        if (section !== null) section.setAttribute('aria-labelledby', headerID);

        this.#header.id = headerID;
        this.#header.textContent = album.name;
        this.#selector.setAttribute('choices', album.songs.join(','));
        this.#selector.link(manager);
        this.#image.setAttribute('src', album.artwork);
    }
}

customElements.define('p-song-album', SongAlbum);
