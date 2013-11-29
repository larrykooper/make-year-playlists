var PlaylistMaker = {};

PlaylistMaker["ttfmList"] = {}

// THIS WORKED 
PlaylistMaker.readTtfmList = function() {
    var i, artistSongsAr, prop, myList, mySong;
    $.getJSON("js/ttfmlist.json", function(data) {
        PlaylistMaker["ttfmList"] = data;
    });
}

// WORKING
PlaylistMaker.getAllSpotifyTracks = function(playlist) {
    var k;
    PlaylistMaker.countArtistsNotMatched = 0;
    playlist.tracks.snapshot().done(function(s){
        // callback called after ALL Spotify tracks gotten
        for (k=0; k<s.length; k++) {
            thetrack = s.get(k);
            title = thetrack.name;
            theartists = thetrack.artists;
            artist = theartists[0].name;
            PlaylistMaker.processSpotifyTrack(title, artist, k);            
        }
        // Log stats
        PlaylistMaker.logIt("Number with Artist not matched: " + PlaylistMaker.countArtistsNotMatched);
    });    
}

PlaylistMaker.processSpotifyTrack = function(spotifyTitle, spotifyArtist, index) {
    // the ttfmTrack is a JS object (if it exists at all) or null (which means that no TTFM match was found)
    ttfmTrack = PlaylistMaker.matchTtfmTrack(spotifyTitle, spotifyArtist);
    // AFTER THIS LINE IS THE REAL CODE WE HAVE NOT ACTIVATED YET
    // if (!ttfmTrack) {
    //     PlaylistMaker.logIt(messageTtfmMatchNotFound);
    // } else {
    //     year = ttfmTrack["year"];
    //     if (PlaylistMaker.isInYearPlaylist(year, spotifyTrack)) {
    //       PlaylistMaker.logIt(messageSpotifyTrackAlreadyInYear);
    //     } else {
    //       PlaylistMaker.addToPlaylist(year, spotifyTrack);
    //       PlaylistMaker.logIt(messageTrackAddedToYear);
    //     }
    // }  
}

// Returns ttfmTrack (a song object) if match found, null it no match found
PlaylistMaker.matchTtfmTrack = function(spotifyTitle, spotifyArtist) {
    var i, myArtistSongs, mySong, spotifyArtistMod, ttfmPropertyString;
    ttfmPropertyString = spotifyArtist;
    if (!PlaylistMaker["ttfmList"].hasOwnProperty(ttfmPropertyString)) {
        // Exact artist match not found; let's try removing 'the'
        if (spotifyArtist.substr(0,4) == 'The ') {
            spotifyArtistNoThe = spotifyArtist.slice(4);
            ttfmPropertyString = spotifyArtistNoThe + ", The";
            if (!PlaylistMaker["ttfmList"].hasOwnProperty(ttfmPropertyString)) {
                // no artist match 
                PlaylistMaker.logIt("SPOTIFY ARTIST NOT MATCHED-T: " + spotifyArtist);
                PlaylistMaker.countArtistsNotMatched++;
                return null;
            }
        } else {
            PlaylistMaker.logIt("SPOTIFY ARTIST NOT MATCHED: " + spotifyArtist);
            PlaylistMaker.countArtistsNotMatched++;
            return null;
        }
    }    
    // Artist matched if we are here
    myArtistSongs = PlaylistMaker["ttfmList"][ttfmPropertyString];
    for (i = 0; i < myArtistSongs.length; i++) {
        mySong = myArtistSongs[i];
        if (mySong["title"] == spotifyTitle) {
            // match found
            PlaylistMaker.logIt("match found: " + spotifyArtist + ' - ' + spotifyTitle );
            return mySong;            
        } 
    } // for
    // match not found for title 
    PlaylistMaker.logIt("MATCH FOUND FOR ARTIST, NOT TITLE: " + spotifyArtist + ' - ' + spotifyTitle );
    return null;
}

PlaylistMaker.logIt = function(message) {
    $("#myLog").append(message + '<br>');
}