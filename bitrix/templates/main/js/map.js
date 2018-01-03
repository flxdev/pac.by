'use strict';

function initYandexMap() {
	ymaps.ready(function () {
		var infoMap = $('#map').data("map");
		var myMap = new ymaps.Map('map', {
				center: [infoMap.x, infoMap.y],
				zoom: 17
			}, {
				searchControlProvider: 'yandex#search'
			}),
			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: "<div class='scsdcsdc'>" + infoMap.description + "</div>"
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/balun.png',
				iconImageSize: [43, 65],
				iconImageOffset: [-15, -60]
			});

		var position = myMap.getGlobalPixelCenter();
		myMap.setGlobalPixelCenter([position[0] + 250, position[1]]);

		//
		// myMap.setCenter(myMap.converter.localPixelsToCoordinates(
		//
		//     map.converter.coordinatesToLocalPixels(map.getCenter()).moveBy(new YMaps.Point(0, 50))
		//
		// ));

		myMap.geoObjects.add(myPlacemark);

		if ($(window).width() < 1025) {
			myMap.behaviors.disable('drag');
			myMap.behaviors.disable('scrollZoom');
			myMap.setGlobalPixelCenter([position[0] + 100, position[1]]);
		}
	});
}

initYandexMap();