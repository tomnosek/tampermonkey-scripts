// ==UserScript==
// @name         CSFD beautification
// @namespace    https://www.csfd.cz/
// @version      0.5
// @description  Makes ČSFD, Czech/Slovak portal about movies and TV series at csfd.cz, more usable with the current design. For example, it widens the layout or displays actions without needing to click on a button.
// @author       Tomas Nosek
// @include      https://www.csfd.cz/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var $ = window.jQuery;

    // Widens the layout
    $("#page-wrapper").css("max-width", "1500px");

    // Displays the control panel right away in a movie profile, adjusts the layout accordingly, hides a couple of ads
    $(".box-rating-buttons").prepend($("#dropdown-control-panel"));
    $("#dropdown-control-panel").css({
        "visibility": "visible",
        "position": "relative",
        "box-shadow": "none",
        "top": "0px",
        "z-index": 0
    });
    $(".box-rating-buttons").css({
        "flex-direction": "column",
        "padding-top": "0px",
        "min-width": "165px"
    });
    $("aside.aside-movie-profile").css({
        "width": "23%"
    });
    $(".main-movie-profile").css({
        "width": "77%"
    });
    $(".aside-movie-control").hide();
    $(".box.box-banner.box-banner-300").hide();
    $("#bottom-banner").hide();
    $('.footer-content').css("max-width", "1500px");
    $('a#back-to-top').css("margin-left", "760px");

    // Clicking on the profile icon opens the profile's rating tab directly
    $("a.profile.initialized").on('click', function() {
        event.preventDefault();
        window.location.href = $(this).attr('href') + 'hodnoceni/';
    });

    // Clicking on the favorites icon opens the favorites' ratings directly
    $(".user-link.favorites.initialized").on('click', function() {
        event.preventDefault();
        window.location.href = $(this).attr('href');
    });

    // Hides and rearranges a couple of boxes on the homepage
    $('section.box--movies-offer').hide();
    $('section.box--homepage-motivation-middle').hide();
    $('.box--homepage-csfd-cinema').hide();
    $('.box--homepage-movie-lists').parent().parent().hide();
    $('.main-homepage header.box-header > h2:contains("Nové recenze TOP uživatelů")').parent().parent().parent().parent().hide();
    $('.main-homepage header.box-header > h2:contains("TV tipy dne")').parent().parent().parent().parent().hide();
    $('#video-slider').css("height", "");
    $('.main-homepage > .row > .column-70').css("width", "50%");
    $('.main-homepage > .row > .column-30').css("width", "50%").prepend($('h2:contains("Novinky")').parent().parent());
    $('#video-slider, .slick-list, .slick-track, .slick-slide, .slick-slide > div > figure').css("height", "403px");
    $('.slick-slide > div > figure > a').css("height", "371px");
    $('.box.box-banner.box-bannercenter, .box.box-banner.box-banner-hidetablet').hide();

    // Makes the profile's rating table more narrow so that the actual ratings are closer to the movie names
    $('.user-tab-rating #snippet--ratings > table').css("table-layout", "auto");
    $('.user-tab-rating .column-80').css("width", "auto");
})();
