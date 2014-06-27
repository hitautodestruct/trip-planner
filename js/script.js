var mapCtrl = (function () {

    var initRoute = function ( route ){
    
        route.forEach(function( item ){
        
            if ( item.type === 'marker' ){
            
                console.log( item );
                
                gmap.setMarker( item.options );
                
            }
            
        });
        
    };
    
    var initialize = function (){
        
        var mapOptions = {
            zoom: 8,
            center: gmap.latLng( 32.000733, 34.870728 )
        }, map;
    
        // Start the map
        map = gmap.init( document.querySelector('#map'), mapOptions );

        var tripRoute = [
            {
                type: 'marker',
                options: {
                    position: gmap.latLng( 32.000733, 34.870728 ),
                    map: map,
                    title: 'Ben Gurion Airport'
                }
            }
        ];
        
        initRoute( tripRoute );
        
    };
    
    return {
        
        init: function (){
            
            google.maps.event.addDomListener(window, 'load', initialize);
            
        }

    };
 
})();

mapCtrl.init();