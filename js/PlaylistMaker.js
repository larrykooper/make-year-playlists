var PlaylistMaker = {};

PlaylistMaker["ttfmList"] = {}

// THIS WORKED 
PlaylistMaker.readTtfmList = function() {
    $.getJSON("js/ttfmlist.json", function(data) {
        PlaylistMaker["ttfmList"] = data;
    });
}

// Returns true if titles match, false if not
PlaylistMaker.titlesMatch = function(ttfmTitle, spotifyTitle) {
    var piecesAr, firstPieceSpot;
    if (ttfmTitle == spotifyTitle) {
        PlaylistMaker.logIt("following title matched exactly");
        return true;
    }
    piecesAr = spotifyTitle.split(' - ');
    firstPieceSpot = piecesAr[0];
    if (ttfmTitle.trim() == firstPieceSpot.trim()) {
        PlaylistMaker.logIt("following title - firstPieceSpot matched");
        PlaylistMaker.logIt("firstPieceSpot: "+firstPieceSpot);
        return true;
    } 
    if (ttfmTitle.trim().toLowerCase() == firstPieceSpot.trim().toLowerCase()) {
        PlaylistMaker.logIt("following title - matched after downcase");
        PlaylistMaker.logIt("firstPieceSpot: "+firstPieceSpot);
        return true;
    }
    return false;
}

// WORKING
PlaylistMaker.getAllSpotifyTracks = function(playlist) {
    var k;
    PlaylistMaker.countArtistsNotMatched = 0;
    PlaylistMaker.countTitlesNotMatched = 0;
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
        PlaylistMaker.logIt("Number with Title not matched: " + PlaylistMaker.countTitlesNotMatched);
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
    var i, myArtistSongs, ttfmSong, spotifyArtistMod, ttfmPropertyString;
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
    // Now we try to match the title
    myArtistSongs = PlaylistMaker["ttfmList"][ttfmPropertyString];
    for (i = 0; i < myArtistSongs.length; i++) {
        ttfmSong = myArtistSongs[i];
        if (PlaylistMaker.titlesMatch(ttfmSong["title"], spotifyTitle)) {
            // match found
            PlaylistMaker.logIt("match found: " + spotifyArtist + ' - ' + spotifyTitle );
            return ttfmSong;            
        } 
    } // for
    // match not found for title 
    PlaylistMaker.logIt("MATCH FOUND FOR ARTIST, NOT TITLE: " + spotifyArtist + ' - ' + spotifyTitle );
    PlaylistMaker.countTitlesNotMatched++;
    return null;
}

PlaylistMaker.logIt = function(message) {
    $("#myLog").append(message + '<br>');
}