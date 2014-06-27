// Helper for interfacing with google maps api
var gmap = (function () {
 
    var makeLatLng = function ( lat, lng ){
    
        return new google.maps.LatLng( lat, lng )
        
    };
    
    var makeNewMap = function ( domElement, mapOptions ) {
            
        return new google.maps.Map( domElement, mapOptions);
        
    };
    
    var setMarker = function ( options ){
    
        return new google.maps.Marker( options );
        
    };
    
    return {
        
        newMap: makeNewMap,
        
        latLng: makeLatLng,
        
        setMarker: setMarker,
        
        init: function ( domElement, mapOptions ) {
    
            return makeNewMap( domElement, mapOptions );
          
        }
      
    };
 
})();