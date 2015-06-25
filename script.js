// ==UserScript==
// @name         SoundCloud Remove Reposts From Stream
// @namespace   https://github.com/superyetix/SoundCloudRemoveRepostsFromStream
// @version      1.0
// @match https://soundcloud.com/stream*
// @description  removes reposts from SoundCloud stream
// @author       superyetix
// @grant        none
// ==/UserScript==

(function() {    var skipButton = document.getElementsByClassName("skipControl playControls__icon sc-ir skipControl__next")[0];
    var skip = [];

    function repeat() {
        var posts = document.getElementsByClassName('soundList__item');
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].innerHTML.indexOf('Reposted') !== -1) {
                skip.push(posts[i].getElementsByClassName("soundTitle__title")[0].getElementsByTagName('span')[0].innerHTML);
                posts[i].parentNode.removeChild(posts[i]);
            }
        }
        var check = document.getElementsByClassName("playbackSoundBadge__titleContextContainer")[0];
        //console.log(skip);
        if (check !== undefined) {
            var curSongHolder = check.getElementsByTagName('a')[1];
            for (var i = 0; i < skip.length; i++) {
                if (skip[i] === curSongHolder.innerHTML) {
                    skipButton.click();
                }
            }
        }
        //console.log('run');
        setTimeout(repeat, 300);
    }
    repeat();
})();
