var interactive_map = new InteractiveMap('map', {
    max_good_zoom: 6,
    max_map_zoom: 8,
    website_source: 'https://github.com/interactive-game-maps/grand_theft_auto_san_andreas',
    website_subdir: 'grand_theft_auto_san_andreas',
});

interactive_map.addTileLayer("Ingame map", {
    minNativeZoom: 2,
    maxNativeZoom: 5,
});

interactive_map.addTileLayer("Satellite map", {
    minNativeZoom: 0,
    maxNativeZoom: 5,
    tileSize: 262,
}, 'tiles/{z}/{x}/{y}.png')


interactive_map.finalize();