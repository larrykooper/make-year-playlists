var PlaylistMaker = {};

PlaylistMaker["ttfmList"] = {};
PlaylistMaker["yearTracks"] = {};

PlaylistMaker.yearPlaylists = {
    "1941": "spotify:user:hudsonriley:playlist:21rAcNQZoiOS0kMWImOufP",
    "1947": "spotify:user:hudsonriley:playlist:6TfFrmot9r6vl5h77j2Z6Q",
    "1950": "spotify:user:hudsonriley:playlist:5xy8Us00htHLRcfRtbe3T1",
    "1952": "spotify:user:hudsonriley:playlist:3yfNUqLpUhopMsOKBMPDKY",
    "1954": "spotify:user:hudsonriley:playlist:7bBVGVOc0kfLkfXuCWWMMz",
    "1955": "spotify:user:hudsonriley:playlist:1NMmE8kF1hvqPuIA27H46j",
    "1956": "spotify:user:hudsonriley:playlist:0fCZitJbgfqojkyv2d61AC",
    "1957": "spotify:user:hudsonriley:playlist:2jLBOijztwAyEEgK3utabt",
    "1958": "spotify:user:hudsonriley:playlist:1BDHTVmZDalL45Anscav8z",
    "1959": "spotify:user:hudsonriley:playlist:6S7K60JwZZm3v5IVI6GlHM",
    "1960": "spotify:user:hudsonriley:playlist:18PdvGTdblXAnVibd2xwJM",
    "1961": "spotify:user:hudsonriley:playlist:3gwLE9XYufKxkvGphC3zb1",
    "1962": "spotify:user:hudsonriley:playlist:0FzX1CprlltxK3aYXRmPwG",
    "1963": "spotify:user:hudsonriley:playlist:55NCVt0ua2yltsPLD2kSlR",
    "1964": "spotify:user:hudsonriley:playlist:2gsJuzHQ1YailVHugH5TCd",
    "1965": "spotify:user:hudsonriley:playlist:5ZE41uZ2vy794puczAwzqp",
    "1966": "spotify:user:hudsonriley:playlist:4fJqvPvH27a8WY045C3x5G",
    "1967": "spotify:user:hudsonriley:playlist:4qs18svtAzib1qq5cIuJWW",
    "1968": "spotify:user:hudsonriley:playlist:5YAdHcXFcYc5YjATWrshJA",
    "1969": "spotify:user:hudsonriley:playlist:3uexdw8i7RfAgParfxQQOI",
    "1970": "spotify:user:hudsonriley:playlist:1lU0OkGuD66tfR76CbJGD3",
    "1971": "spotify:user:hudsonriley:playlist:3chy7uuv7Or777KlcKvKWZ",
    "1972": "spotify:user:hudsonriley:playlist:0i93IZN9OB0lt6qPeajaGl",
    "1973": "spotify:user:hudsonriley:playlist:7wRf3rBNirXstoQrXz0Gi2",
    "1974": "spotify:user:hudsonriley:playlist:6OaGCHM84WBBJULWfZL0BA",
    "1975": "spotify:user:hudsonriley:playlist:0jqiwdUa5g1rVZVyopz0tK",
    "1976": "spotify:user:hudsonriley:playlist:0ReTSRCtepXBnn9Q5GMg36",
    "1977": "spotify:user:hudsonriley:playlist:4SsxMtXeae8NAgW4XPfQpm",
    "1978": "spotify:user:hudsonriley:playlist:3xFqS28OlWflVWbwMEpfZN",
    "1979": "spotify:user:hudsonriley:playlist:4znatDnEatMwl5ehNUZdAZ",
    "1980": "spotify:user:hudsonriley:playlist:52ksyMHO9r0w5CCWQvqPsH",
    "1981": "spotify:user:hudsonriley:playlist:2Wbfg0PnltKQyrxShlKwng",
    "1982": "spotify:user:hudsonriley:playlist:4f1L1GB1aw5RftBQ7gMuBJ",
    "1983": "spotify:user:hudsonriley:playlist:6fNMctCLjLnks98Xd3bCbm",
    "1984": "spotify:user:hudsonriley:playlist:1TXYPFzQnSGwjXG5AlTBcp",
    "1985": "spotify:user:hudsonriley:playlist:26TQC8OwXwQ3LoVgXBN1FE",
    "1986": "spotify:user:hudsonriley:playlist:2dGQ97et8rTU1HNoqaYiTj",
    "1987": "spotify:user:hudsonriley:playlist:1vXG3BjJLqoEdS5RLXzI0p",
    "1988": "spotify:user:hudsonriley:playlist:6FbFFlO3LNeJWhpVyLH6Ae",
    "1989": "spotify:user:hudsonriley:playlist:3nhryXJIFI8xwV2Ms853Xi",
    "1990": "spotify:user:hudsonriley:playlist:3MCVhoCbhoFwZhkUiSrBhA",
    "1991": "spotify:user:hudsonriley:playlist:7kcObw2EUxvEkhkSnKCqoa",
    "1992": "spotify:user:hudsonriley:playlist:0A02J8T0kPPEyLmmxDqLWK",
    "1993": "spotify:user:hudsonriley:playlist:5b4vHdomPohRaiFGJ85FAT",
    "1994": "spotify:user:hudsonriley:playlist:0twuh7dRw6q4bNnAWnh48i",
    "1995": "spotify:user:hudsonriley:playlist:3XtMEAmiazsdFbBKMOgDhp",
    "1996": "spotify:user:hudsonriley:playlist:0XNp2mwEMmnPUopRV8hm61",
    "1997": "spotify:user:hudsonriley:playlist:5OqKQymNlWMUB1MBq8xsZr",
    "1998": "spotify:user:hudsonriley:playlist:6shMJMZauD7Dvw1IIpXakW",
    "1999": "spotify:user:hudsonriley:playlist:1KR4vDQMwp7WZGF8soQhuu",
    "2000": "spotify:user:hudsonriley:playlist:0StLRJ81q8PV2c3L8Vm8pc",
    "2001": "spotify:user:hudsonriley:playlist:7xzeoO9bWtaY6YJEFALGKw",
    "2002": "spotify:user:hudsonriley:playlist:6nH7qvdNCDezpfLpck4Swe",
    "2003": "spotify:user:hudsonriley:playlist:3tdai3izIh0xREFM1jV2N6",
    "2004": "spotify:user:hudsonriley:playlist:1plPLD6o6eHVwFmDWExZ7Z",
    "2005": "spotify:user:hudsonriley:playlist:6m9DpUyeDvbv4KuQAOgIWH",
    "2006": "spotify:user:hudsonriley:playlist:1diZsIHK3yt4tzwzVTH2RO",
    "2007": "spotify:user:hudsonriley:playlist:3rXnXGIVantSzrr6JtV78R",
    "2008": "spotify:user:hudsonriley:playlist:2w3YoCZQkrjkCTa9rVjdoD",
    "2009": "spotify:user:hudsonriley:playlist:0kWVEWeKOaHT1fIDkz6EX3",
    "2010": "spotify:user:hudsonriley:playlist:7i9bGPwugS4kU4z74utrLK",
    "2011": "spotify:user:hudsonriley:playlist:5jbHrlmjuP8bRB3QQr4ifl",
    "2012": "spotify:user:hudsonriley:playlist:7FBXAvFUNdrzzdXZlK8tSB",
    "2013": "spotify:user:hudsonriley:playlist:6v1ixAvI7GBaKMrOeYESts"
};

PlaylistMaker.readTtfmList = function() {
    $.getJSON("js/ttfmlist.json", function(data) {
        PlaylistMaker["ttfmList"] = data;
    });
};

// Returns true if titles match, false if not
PlaylistMaker.titlesMatch = function(ttfmTitle, spotifyTitle) {
    var piecesAr, firstPieceSpot;
    var ttfmCurr, spotifyCurr, re;
    // Look for exact match
    if (ttfmTitle == spotifyTitle) {       
        PlaylistMaker.countTitleExactMatch++;
        return true;
    }
    piecesAr = spotifyTitle.split(' - ');
    firstPieceSpot = piecesAr[0];
    // Split on dash, to remove "Remastered" etc
    if (ttfmTitle.trim() == firstPieceSpot.trim()) {
        PlaylistMaker.countTitleMatchAfterSplitDash++;
        return true;
    } 
    // Downcase to avoid case mismatch
    ttfmCurr = ttfmTitle.trim().toLowerCase();
    spotifyCurr = firstPieceSpot.trim().toLowerCase();
    if (ttfmTitle.trim().toLowerCase() == firstPieceSpot.trim().toLowerCase()) {
        PlaylistMaker.countTitleMatchAfterDowncase++;
        return true;
    }
    // Now let's strip out all but alphanumeric and underscore
    re = /[^\w]/g;
    ttfmCurr = ttfmCurr.replace(re, "");
    spotifyCurr = spotifyCurr.replace(re, "");
    if (ttfmCurr == spotifyCurr) {
        PlaylistMaker.countTitleMatchAfterClean1++;        
        return true;
    }
    return false;
};

PlaylistMaker.getAllSpotifyTracks = function(playlist) {
    var k;
    PlaylistMaker.countArtistsNotMatched = 0;
    PlaylistMaker.countTitlesNotMatched = 0;
    PlaylistMaker.countTitleExactMatch = 0;
    PlaylistMaker.countTitleMatchAfterSplitDash = 0;
    PlaylistMaker.countTitleMatchAfterDowncase = 0;
    PlaylistMaker.countTitleMatchAfterClean1 = 0;
    playlist.tracks.snapshot().done(function(s) {
        // callback called after ALL Spotify TTFM-list tracks gotten
        for (k=0; k<s.length; k++) {
            thetrack = s.get(k);
            title = thetrack.name;
            theartists = thetrack.artists;
            artist = theartists[0].name;
            if (k < 3) {  // DEBUG
                PlaylistMaker.processSpotifyTrack(thetrack, title, artist, k);
            }  // DEBUG 
        }
        // Log stats
        PlaylistMaker.logIt(" ");
        PlaylistMaker.logIt("Number with Artist not matched: " + PlaylistMaker.countArtistsNotMatched);
        PlaylistMaker.logIt("Number with Title not matched: " + PlaylistMaker.countTitlesNotMatched);
        PlaylistMaker.logIt("Number of titles that matched exactly: "+ PlaylistMaker.countTitleExactMatch);
        PlaylistMaker.logIt("Number of titles that matched after split on dash: " +  PlaylistMaker.countTitleMatchAfterSplitDash);
        PlaylistMaker.logIt("Number of titles that matched after split on dash and downcase: " + PlaylistMaker.countTitleMatchAfterDowncase);
        PlaylistMaker.logIt("Number of titles that matched after strip all but alphanumeric and underscore: " + PlaylistMaker.countTitleMatchAfterClean1);
    });  // end of callback called after ALL 1800 Spotify tracks gotten
};

PlaylistMaker.getAllYearPlaylistTracks = function(yearPlaylist, year) {
    var k, tracksOfYear;
    PlaylistMaker.logIt("Message 53: Year= " + year);
    PlaylistMaker.yearTracks[year] = [];
    yearPlaylist.tracks.snapshot().done(function(snapshot) {
        PlaylistMaker.logIt("Message 61: I am in callback");
        PlaylistMaker.logIt("Year is=" + year);
        tracksOfYear = snapshot.toArray();
        PlaylistMaker.logIt("Length of tracks arr: " + tracksOfYear.length);
        PlaylistMaker["yearTracks"][year] = tracksOfYear;
    });
};

PlaylistMaker.isInYearPlaylist = function(year, spotifyTrack) {
    var i;    
    PlaylistMaker.logIt("Message 51");
    for (i = 0; i < PlaylistMaker["yearTracks"][year].length; i++) {
        PlaylistMaker.logIt("Message 52");
        if (PlaylistMaker["yearTracks"][year][i].name == spotifyTrack.name) {
            return true;            
        }
    }
    return false;
};

PlaylistMaker.processSpotifyTrack = function(spotifyTrack, spotifyTitle, spotifyArtist, index) {
    PlaylistMaker.logIt(" ");
    PlaylistMaker.logIt("From TTFM Spotify List: Processing: " + spotifyArtist + " - " + spotifyTitle);
    // Is there a TTFM match for the Spotify track?
    ttfmTrack = PlaylistMaker.matchTtfmTrack(spotifyTitle, spotifyArtist); 
    // the ttfmTrack is a JS object (if it exists at all) or null (which means that no TTFM match was found)
    if (!ttfmTrack) {
        PlaylistMaker.logIt("Match not found for: " + spotifyArtist + " - " + spotifyTitle);
    } else {
        year = ttfmTrack["year"];
        PlaylistMaker.logIt("Matching TTFM track found.")
        PlaylistMaker.logIt("The year is:  " + year);
        if (PlaylistMaker.isInYearPlaylist(year, spotifyTrack)) {
            PlaylistMaker.logIt("The Spotify track is already in the year playlist.");
        } else {
            PlaylistMaker.logIt("I am ready to add song to the playlist");
        // TO BE UNCOMMENTED LATER
        //PlaylistMaker.addToPlaylist(year, spotifyTrack);
        //PlaylistMaker.logIt(messageTrackAddedToYear);
        }
    }    
};

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
                //PlaylistMaker.logIt("SPOTIFY ARTIST NOT MATCHED-T: " + spotifyArtist);
                PlaylistMaker.countArtistsNotMatched++;
                return null;
            }
        } else {
            //PlaylistMaker.logIt("SPOTIFY ARTIST NOT MATCHED: " + spotifyArtist);
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
            //PlaylistMaker.logIt("match found: " + spotifyArtist + ' - ' + spotifyTitle );
            return ttfmSong;            
        } 
    } // for
    // match not found for title 
    PlaylistMaker.logIt("MATCH FOUND FOR ARTIST, NOT TITLE: " + spotifyArtist + ' - ' + spotifyTitle );
    PlaylistMaker.countTitlesNotMatched++;    
    return null;
};

PlaylistMaker.logIt = function(message) {
    $("#myLog").append(message + '<br>');
};