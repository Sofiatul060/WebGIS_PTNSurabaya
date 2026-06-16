ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([682747.560329, 9187656.528720, 699581.639365, 9198357.077872]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PTNSURABAYA_1 = new ol.format.GeoJSON();
var features_PTNSURABAYA_1 = format_PTNSURABAYA_1.readFeatures(json_PTNSURABAYA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PTNSURABAYA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNSURABAYA_1.addFeatures(features_PTNSURABAYA_1);
var lyr_PTNSURABAYA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNSURABAYA_1, 
                style: style_PTNSURABAYA_1,
                popuplayertitle: 'PTN SURABAYA',
                interactive: true,
    title: 'PTN SURABAYA<br />\
    <img src="styles/legend/PTNSURABAYA_1_0.png" /> ITS<br />\
    <img src="styles/legend/PTNSURABAYA_1_1.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNSURABAYA_1_2.png" /> UNAIR<br />\
    <img src="styles/legend/PTNSURABAYA_1_3.png" /> UNESA<br />\
    <img src="styles/legend/PTNSURABAYA_1_4.png" /> UPNV Jatim<br />\
    <img src="styles/legend/PTNSURABAYA_1_5.png" /> <br />' });
var format_JALANANUNIVERSITASDANSEKITARNYA_2 = new ol.format.GeoJSON();
var features_JALANANUNIVERSITASDANSEKITARNYA_2 = format_JALANANUNIVERSITASDANSEKITARNYA_2.readFeatures(json_JALANANUNIVERSITASDANSEKITARNYA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JALANANUNIVERSITASDANSEKITARNYA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANANUNIVERSITASDANSEKITARNYA_2.addFeatures(features_JALANANUNIVERSITASDANSEKITARNYA_2);
var lyr_JALANANUNIVERSITASDANSEKITARNYA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALANANUNIVERSITASDANSEKITARNYA_2, 
                style: style_JALANANUNIVERSITASDANSEKITARNYA_2,
                popuplayertitle: 'JALANAN UNIVERSITAS DAN SEKITARNYA',
                interactive: true,
    title: 'JALANAN UNIVERSITAS DAN SEKITARNYA<br />\
    <img src="styles/legend/JALANANUNIVERSITASDANSEKITARNYA_2_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/JALANANUNIVERSITASDANSEKITARNYA_2_1.png" /> 2,4km (30 menit)<br />\
    <img src="styles/legend/JALANANUNIVERSITASDANSEKITARNYA_2_2.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_PTNSURABAYA_1.setVisible(true);lyr_JALANANUNIVERSITASDANSEKITARNYA_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PTNSURABAYA_1,lyr_JALANANUNIVERSITASDANSEKITARNYA_2];
lyr_PTNSURABAYA_1.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Rangking QS WUR': 'Rangking QS WUR', '.....': '.....', 'Deskripsi Univ_Didirikan': 'Deskripsi Univ_Didirikan', 'Fakultas': 'Fakultas', 'Foto': 'Foto', });
lyr_JALANANUNIVERSITASDANSEKITARNYA_2.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_PTNSURABAYA_1.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Rangking QS WUR': 'TextEdit', '.....': 'TextEdit', 'Deskripsi Univ_Didirikan': 'Range', 'Fakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_JALANANUNIVERSITASDANSEKITARNYA_2.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_PTNSURABAYA_1.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', 'Rangking QS WUR': 'no label', '.....': 'no label', 'Deskripsi Univ_Didirikan': 'no label', 'Fakultas': 'no label', 'Foto': 'no label', });
lyr_JALANANUNIVERSITASDANSEKITARNYA_2.set('fieldLabels', {'fid': 'hidden field', 'Access': 'inline label - always visible', });
lyr_JALANANUNIVERSITASDANSEKITARNYA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});