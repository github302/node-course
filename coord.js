//国测局坐标(火星坐标,比如高德地图在用),百度坐标,wgs84坐标(谷歌国外以及绝大部分国外在线地图使用的坐标)
var coordtransform=require('coordtransform');
//百度经纬度坐标转国测局坐标
// var bd09togcj02=coordtransform.bd09togcj02(116.404, 39.915);
//国测局坐标转百度经纬度坐标
// var gcj02tobd09=coordtransform.gcj02tobd09(116.404, 39.915);
//wgs84转国测局坐标
const data = {
    lng: 114.11524200439453, 
    lat: 22.598249435424805,
}
var wgs84togcj02=coordtransform.wgs84togcj02(data.lng, data.lat);
//国测局坐标转wgs84坐标
const buj = {
    lng:  114.117475,
    lat: 22.599389,
}
const mc = {
    lng: 114.123797,
    lat: 22.594031,
}
// var bujGcj02towgs84 = coordtransform.gcj02towgs84(buj.lng, buj.lat);
// var mcGcj02towgs84 = coordtransform.gcj02towgs84(mc.lng, mc.lat);
// console.log(bd09togcj02);
// console.log(gcj02tobd09);
console.log(wgs84togcj02);
// console.log(bujGcj02towgs84);
// console.log(mcGcj02towgs84);
//result
//bd09togcj02:   [ 116.39762729119315, 39.90865673957631 ]
//gcj02tobd09:   [ 116.41036949371029, 39.92133699351021 ]
//wgs84togcj02:  [ 116.41024449916938, 39.91640428150164 ]
// gcj02towgs84:  [ 116.39775550083061, 39.91359571849836 ]