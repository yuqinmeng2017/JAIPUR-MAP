
mapboxgl.accessToken = 'pk.eyJ1IjoieXVxaW5tZW5nMjAxNyIsImEiOiJjamc4ZnBpdjcxMDRmMnhxbDN0bHRiamNpIn0.8dW5tp4Ek1dn7GJvSchfqg'; 
var map = new mapboxgl.Map({
	container: 'map',   
	style: 'mapbox://styles/yuqinmeng2017/ck1xxatee24861cn0sjbktk2d',

});

    $("#about").on('click', function() { // Click event handler for the About button in jQuery, see https://api.jquery.com/click/
        $("#screen").fadeToggle(); // shows/hides the black screen behind modal, see https://api.jquery.com/fadeToggle/
        $(".modal").fadeToggle(); // shows/hides the modal itself, see https://api.jquery.com/fadeToggle/
    });

    $(".modal>.close-button").on('click', function() { // Click event handler for the modal's close button
        $("#screen").fadeToggle();
        $(".modal").fadeToggle();
    });


// See example tutorial at https://docs.mapbox.com/help/tutorials/choropleth-studio-gl-pt-2/#create-arrays-of-intervals-and-colors

  map.on('load', function() {
  	
  var layers = [ // an array of the possible values you want to show in your legend
        'Civic Spaces', // Civic Spaces.png
        'Community Park', // Community Park.png
        'Neighborhood Park', // Neighborhood Park.png
        'Cemetery',
        'Urban Park',
        'Regional Park'
    ];

    var colors = [ // an array of the color values for each legend item
        '#800000',
        '#800030',
        '#800060',
        '#80006c',
        '#800090',
        '#80009c'
    ];

     for (i=0; i<layers.length; i++) {
        var layer =layers[i]; // name of the current legend item, from the layers array
        var color =colors[i]; // color value of the current legend item, from the colors array 
        
        var itemHTML = "<div><span class='legend-key'></span><span>" + layer + "</span></div>"; // create the HTML for the legend element to be added

        var item = $(itemHTML).appendTo("#legend"); // add the legend item to the legend
        var legendKey = $(item).find(".legend-key"); // find the legend key (colored circle) for the current item
        legendKey.css("background", color); // change the background color of the legend key
    }

});
