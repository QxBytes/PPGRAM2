/**
 * @typedef {Object} Album
 * @property {string} id - The album ID.
 * @property {string} name - The album name.
 * @property {string} artwork - The album artwork path.
 * @property {string[]} songs - The album songs.
 */

/** @type {Album[]} */
const albums = [
    {
        id: 'peace',
        name: 'PEACE',
        artwork: 'images/git-doge/pp.png',
        songs: ['fallen', 'lullaby', 'away2', 'yune3', 'waken', 'relax', 'sol', 'lime', 'frame', 'hello']
    },
    {
        id: 'up',
        name: '/\\/\\/\\',
        artwork: 'images/bloopsoup/up.png',
        songs: ['mint', 'north', 'rot', 'crawl', 'clap', 'crash', 'yikes', 'think']
    },
    {
        id: 'classic',
        name: 'cLASSIc',
        artwork: 'images/bloopsoup/classic.png',
        songs: ['cee', 'reach', 'suim', 'walk', 'pin', 'wound']
    },
    {
        id: 'discount',
        name: 'disCOUNT',
        artwork: 'images/bloopsoup/asleep.png',
        songs: ['incense', 'banjo', 'waken1', 'relax1']
    }
];

export default albums;
