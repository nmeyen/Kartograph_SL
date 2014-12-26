$( document ).ready(function() {
		var map = kartograph.map('#map',1200,800);
		map.loadMap('map_sl.svg', function(){
	    map.addLayer('mylayer', {
            styles: {
                stroke: '#aaa',
                fill: '#f6f4f2'
				},
                mouseenter: function(d, path) {
                    path.attr('fill', Math.random() < 0.5 ? '#006400' : '#04c');
                },
                mouseleave: function(d, path) {
                    path.animate({ fill: '#f6f4f2' }, 1000);
                }
			});
		});
	});
	
