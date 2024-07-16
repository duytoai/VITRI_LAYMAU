ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([106.730924, 20.820053, 106.949492, 20.936288]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_THUYVAN_4326_2 = new ol.format.GeoJSON();
var features_THUYVAN_4326_2 = format_THUYVAN_4326_2.readFeatures(json_THUYVAN_4326_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_THUYVAN_4326_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_THUYVAN_4326_2.addFeatures(features_THUYVAN_4326_2);
var lyr_THUYVAN_4326_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_THUYVAN_4326_2, 
                style: style_THUYVAN_4326_2,
                popuplayertitle: "THUYVAN_4326",
                interactive: true,
    title: 'THUYVAN_4326<br />\
    <img src="styles/legend/THUYVAN_4326_2_0.png" /> khong lay mau<br />\
    <img src="styles/legend/THUYVAN_4326_2_1.png" /> TB<br />\
    <img src="styles/legend/THUYVAN_4326_2_2.png" /> TOT<br />\
    <img src="styles/legend/THUYVAN_4326_2_3.png" /> <br />'
        });
var format_RANHGIOI_HANANM4326_3 = new ol.format.GeoJSON();
var features_RANHGIOI_HANANM4326_3 = format_RANHGIOI_HANANM4326_3.readFeatures(json_RANHGIOI_HANANM4326_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RANHGIOI_HANANM4326_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RANHGIOI_HANANM4326_3.addFeatures(features_RANHGIOI_HANANM4326_3);
var lyr_RANHGIOI_HANANM4326_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RANHGIOI_HANANM4326_3, 
                style: style_RANHGIOI_HANANM4326_3,
                popuplayertitle: "RANHGIOI_HANANM4326",
                interactive: true,
                title: '<img src="styles/legend/RANHGIOI_HANANM4326_3.png" /> RANHGIOI_HANANM4326'
            });
var format_DIEMLAYMAU_4326_4 = new ol.format.GeoJSON();
var features_DIEMLAYMAU_4326_4 = format_DIEMLAYMAU_4326_4.readFeatures(json_DIEMLAYMAU_4326_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DIEMLAYMAU_4326_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIEMLAYMAU_4326_4.addFeatures(features_DIEMLAYMAU_4326_4);
var lyr_DIEMLAYMAU_4326_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DIEMLAYMAU_4326_4, 
                style: style_DIEMLAYMAU_4326_4,
                popuplayertitle: "DIEMLAYMAU_4326",
                interactive: true,
    title: 'DIEMLAYMAU_4326<br />\
    <img src="styles/legend/DIEMLAYMAU_4326_4_0.png" /> TB<br />\
    <img src="styles/legend/DIEMLAYMAU_4326_4_1.png" /> TOT<br />'
        });
var format_BUF_4326_5 = new ol.format.GeoJSON();
var features_BUF_4326_5 = format_BUF_4326_5.readFeatures(json_BUF_4326_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BUF_4326_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUF_4326_5.addFeatures(features_BUF_4326_5);
var lyr_BUF_4326_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUF_4326_5, 
                style: style_BUF_4326_5,
                popuplayertitle: "BUF_4326",
                interactive: true,
                title: '<img src="styles/legend/BUF_4326_5.png" /> BUF_4326'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_THUYVAN_4326_2.setVisible(true);lyr_RANHGIOI_HANANM4326_3.setVisible(true);lyr_DIEMLAYMAU_4326_4.setVisible(true);lyr_BUF_4326_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_THUYVAN_4326_2,lyr_RANHGIOI_HANANM4326_3,lyr_DIEMLAYMAU_4326_4,lyr_BUF_4326_5];
lyr_THUYVAN_4326_2.set('fieldAliases', {'ID': 'ID', 'Ma': 'Ma', 'Ten': 'Ten', 'ID_2': 'ID_2', 'NAME': 'NAME', 'Phuong_xa': 'Phuong_xa', 'WQI': 'WQI', 'nhiet_do': 'nhiet_do', 'pH': 'pH', 'DO': 'DO', 'Do_duc': 'Do_duc', 'TSS': 'TSS', 'COD': 'COD', 'BOD5': 'BOD5', 'Amoni': 'Amoni', 'Nitrit': 'Nitrit', 'Nitrat': 'Nitrat', 'Phosphat': 'Phosphat', 'Tong_xianu': 'Tong_xianu', 'Florua': 'Florua', 'Clorua': 'Clorua', 'Tong_daumo': 'Tong_daumo', 'Coliform': 'Coliform', 'E.Coli': 'E.Coli', 'As': 'As', 'Hg': 'Hg', 'Pb': 'Pb', 'Cd': 'Cd', 'Fe': 'Fe', 'Mn': 'Mn', 'Cu': 'Cu', 'Ni': 'Ni', 'Zn': 'Zn', 'Cr_VI': 'Cr_VI', 'Hoachat_BV': 'Hoachat_BV', 'MAU': 'MAU', 'GHICHU': 'GHICHU', });
lyr_RANHGIOI_HANANM4326_3.set('fieldAliases', {'TT': 'TT', 'Matinh': 'Matinh', 'Mahuyen': 'Mahuyen', 'Maxa': 'Maxa', 'Tinh': 'Tinh', 'Huyen': 'Huyen', 'Xa': 'Xa', 'DTICH': 'DTICH', });
lyr_DIEMLAYMAU_4326_4.set('fieldAliases', {'ID': 'ID', 'NAME': 'NAME', 'Phuong_xa': 'Phuong_xa', 'WQI': 'WQI', 'nhiet_do': 'nhiet_do', 'pH': 'pH', 'DO': 'DO', 'Do_duc': 'Do_duc', 'TSS': 'TSS', 'COD': 'COD', 'BOD5': 'BOD5', 'Amoni': 'Amoni', 'Nitrit': 'Nitrit', 'Nitrat': 'Nitrat', 'Phosphat': 'Phosphat', 'Tong_xianu': 'Tong_xianu', 'Florua': 'Florua', 'Clorua': 'Clorua', 'Tong_daumo': 'Tong_daumo', 'Coliform': 'Coliform', 'E.Coli': 'E.Coli', 'As': 'As', 'Hg': 'Hg', 'Pb': 'Pb', 'Cd': 'Cd', 'Fe': 'Fe', 'Mn': 'Mn', 'Cu': 'Cu', 'Ni': 'Ni', 'Zn': 'Zn', 'Cr_VI': 'Cr_VI', 'Hoachat_BV': 'Hoachat_BV', 'MAU': 'MAU', 'GHICHU': 'GHICHU', 'GHICHU12': 'GHICHU12', });
lyr_BUF_4326_5.set('fieldAliases', {'ID': 'ID', });
lyr_THUYVAN_4326_2.set('fieldImages', {'ID': 'TextEdit', 'Ma': 'TextEdit', 'Ten': 'TextEdit', 'ID_2': 'TextEdit', 'NAME': 'TextEdit', 'Phuong_xa': 'TextEdit', 'WQI': 'TextEdit', 'nhiet_do': 'TextEdit', 'pH': 'TextEdit', 'DO': 'TextEdit', 'Do_duc': 'TextEdit', 'TSS': 'TextEdit', 'COD': 'TextEdit', 'BOD5': 'TextEdit', 'Amoni': 'TextEdit', 'Nitrit': 'TextEdit', 'Nitrat': 'TextEdit', 'Phosphat': 'TextEdit', 'Tong_xianu': 'TextEdit', 'Florua': 'TextEdit', 'Clorua': 'TextEdit', 'Tong_daumo': 'TextEdit', 'Coliform': 'TextEdit', 'E.Coli': 'TextEdit', 'As': 'TextEdit', 'Hg': 'TextEdit', 'Pb': 'TextEdit', 'Cd': 'TextEdit', 'Fe': 'TextEdit', 'Mn': 'TextEdit', 'Cu': 'TextEdit', 'Ni': 'TextEdit', 'Zn': 'TextEdit', 'Cr_VI': 'TextEdit', 'Hoachat_BV': 'TextEdit', 'MAU': 'TextEdit', 'GHICHU': 'TextEdit', });
lyr_RANHGIOI_HANANM4326_3.set('fieldImages', {'TT': 'Range', 'Matinh': 'Range', 'Mahuyen': 'Range', 'Maxa': 'Range', 'Tinh': 'TextEdit', 'Huyen': 'TextEdit', 'Xa': 'TextEdit', 'DTICH': 'TextEdit', });
lyr_DIEMLAYMAU_4326_4.set('fieldImages', {'ID': 'TextEdit', 'NAME': 'TextEdit', 'Phuong_xa': 'TextEdit', 'WQI': 'TextEdit', 'nhiet_do': 'TextEdit', 'pH': 'TextEdit', 'DO': 'TextEdit', 'Do_duc': 'TextEdit', 'TSS': 'TextEdit', 'COD': 'TextEdit', 'BOD5': 'TextEdit', 'Amoni': 'TextEdit', 'Nitrit': 'TextEdit', 'Nitrat': 'TextEdit', 'Phosphat': 'TextEdit', 'Tong_xianu': 'TextEdit', 'Florua': 'TextEdit', 'Clorua': 'TextEdit', 'Tong_daumo': 'TextEdit', 'Coliform': 'TextEdit', 'E.Coli': 'TextEdit', 'As': 'TextEdit', 'Hg': 'TextEdit', 'Pb': 'TextEdit', 'Cd': 'TextEdit', 'Fe': 'TextEdit', 'Mn': 'TextEdit', 'Cu': 'TextEdit', 'Ni': 'TextEdit', 'Zn': 'TextEdit', 'Cr_VI': 'TextEdit', 'Hoachat_BV': 'TextEdit', 'MAU': 'TextEdit', 'GHICHU': 'TextEdit', 'GHICHU12': 'TextEdit', });
lyr_BUF_4326_5.set('fieldImages', {'ID': 'TextEdit', });
lyr_THUYVAN_4326_2.set('fieldLabels', {'ID': 'no label', 'Ma': 'no label', 'Ten': 'no label', 'ID_2': 'no label', 'NAME': 'no label', 'Phuong_xa': 'no label', 'WQI': 'no label', 'nhiet_do': 'no label', 'pH': 'no label', 'DO': 'no label', 'Do_duc': 'no label', 'TSS': 'no label', 'COD': 'no label', 'BOD5': 'no label', 'Amoni': 'no label', 'Nitrit': 'no label', 'Nitrat': 'no label', 'Phosphat': 'no label', 'Tong_xianu': 'no label', 'Florua': 'no label', 'Clorua': 'no label', 'Tong_daumo': 'no label', 'Coliform': 'no label', 'E.Coli': 'no label', 'As': 'no label', 'Hg': 'no label', 'Pb': 'no label', 'Cd': 'no label', 'Fe': 'no label', 'Mn': 'no label', 'Cu': 'no label', 'Ni': 'no label', 'Zn': 'no label', 'Cr_VI': 'no label', 'Hoachat_BV': 'no label', 'MAU': 'no label', 'GHICHU': 'no label', });
lyr_RANHGIOI_HANANM4326_3.set('fieldLabels', {'TT': 'no label', 'Matinh': 'no label', 'Mahuyen': 'no label', 'Maxa': 'no label', 'Tinh': 'inline label - always visible', 'Huyen': 'inline label - always visible', 'Xa': 'inline label - always visible', 'DTICH': 'inline label - always visible', });
lyr_DIEMLAYMAU_4326_4.set('fieldLabels', {'ID': 'no label', 'NAME': 'inline label - always visible', 'Phuong_xa': 'inline label - always visible', 'WQI': 'inline label - always visible', 'nhiet_do': 'inline label - always visible', 'pH': 'inline label - always visible', 'DO': 'inline label - always visible', 'Do_duc': 'inline label - always visible', 'TSS': 'inline label - always visible', 'COD': 'inline label - always visible', 'BOD5': 'inline label - always visible', 'Amoni': 'inline label - always visible', 'Nitrit': 'inline label - always visible', 'Nitrat': 'inline label - always visible', 'Phosphat': 'inline label - always visible', 'Tong_xianu': 'inline label - always visible', 'Florua': 'inline label - always visible', 'Clorua': 'inline label - always visible', 'Tong_daumo': 'inline label - always visible', 'Coliform': 'inline label - always visible', 'E.Coli': 'inline label - always visible', 'As': 'inline label - always visible', 'Hg': 'inline label - always visible', 'Pb': 'inline label - always visible', 'Cd': 'inline label - always visible', 'Fe': 'inline label - always visible', 'Mn': 'inline label - always visible', 'Cu': 'inline label - always visible', 'Ni': 'inline label - always visible', 'Zn': 'inline label - always visible', 'Cr_VI': 'inline label - always visible', 'Hoachat_BV': 'inline label - always visible', 'MAU': 'inline label - always visible', 'GHICHU': 'inline label - always visible', 'GHICHU12': 'no label', });
lyr_BUF_4326_5.set('fieldLabels', {'ID': 'no label', });
lyr_BUF_4326_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});