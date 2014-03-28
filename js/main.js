require([
  '$api/models'
], function(models) {
    var yearUri, playlistURI, yearsIHave, i, year;
    'use strict';

    yearsIHave = ["1941", "1947", "1950", "1952", "1954", "1955", "1956", "1957", "1958", "1959", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013"];

    // 'require' is discussed here:
    // https://developer.spotify.com/technologies/apps/guidelines/developer/

    // URI of playing-list: "spotify:user:hudsonriley:playlist:390j4i7Glni59TtWWj4Ehc";
    
    // Following statement reads in the ENTIRE TTFM list from JSON
    PlaylistMaker.readTtfmList();
    
    // HERE -- 
    // Read in all 50-odd Year Playlists and store each one 
    
    for (i = 0; i < yearsIHave.length; i++) {
        year = yearsIHave[i];
        PlaylistMaker.logIt("Message 54: Year="+year);
        yearUri = PlaylistMaker.yearPlaylists[year];
        models.Playlist.fromURI(yearUri).load('name', 'tracks').done(function(playlist) {
            var theYear;
            theYear = playlist.name.decodeForText();
            PlaylistMaker.logIt("Message 55: In callback function for loading year playlist; year is=" + theYear);
            PlaylistMaker.getAllYearPlaylistTracks(playlist, theYear);
        });
    }
    
    // Now we get the list of tracks on the Spotify TTFM playlist
    SpotifyTtfmPlaylistURI = "spotify:user:hudsonriley:playlist:1jR4NxQZ88Btltqybqq3bH"; 
    models.Playlist.fromURI(SpotifyTtfmPlaylistURI).load('name','tracks').done(function(playlist) {
        PlaylistMaker.getAllSpotifyTracks(playlist); 
    }); // matches 'done' on line 16

});  // matches left paren in line 1