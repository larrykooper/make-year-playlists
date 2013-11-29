require([
  '$api/models'
], function(models) {
    'use strict';
    
    // URI of playing-list: "spotify:user:hudsonriley:playlist:390j4i7Glni59TtWWj4Ehc";
    
    // Following statement reads in the entire TTFM list
    PlaylistMaker.readTtfmList();

    var playlistURI = "spotify:user:hudsonriley:playlist:1jR4NxQZ88Btltqybqq3bH";
    
    models.Playlist.fromURI(playlistURI).load('name','tracks').done(function(playlist) {
        // Below console statement logs the URI and name of the playlist
        console.log(playlist.uri + ': ' + playlist.name.decodeForText());
        // Below statement puts the playlist name on the screen.
        document.getElementById('plaything').innerHTML = playlist.name.decodeForHtml(); 
        console.log("Message 01");
        PlaylistMaker.getAllSpotifyTracks(playlist); 
    }); // matches 'done'

});