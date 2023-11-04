// ==UserScript==
// @name         Twitter Circles iOS Safari
// @namespace    https://stay.app/
// @version      0.1
// @description  Template userscript created by Stay
// @author       gurbs2_
// @match        *twitter.*
// @grant        none

// Credit to @_adryd on Twitter / https://gist.github.com/adryd325 for the code
// Credit to @chaoticvibing on Twitter / https://gist.github.com/busybox11/d0530e396bd4597a62587032ee55d214
// for demonstrating this could work
// This was all their work, I just repackaged one line into a "Stay for Safari" friendly file

// ==/UserScript==
(function () {
    'use strict';
    document.cookie="ab_decider=trusted_friends_consumption_enabled=true&trusted_friends_tweet_creation_enabled=true";
})();
