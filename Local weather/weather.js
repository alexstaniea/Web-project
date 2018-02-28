$(document).ready(function(){

var long;
var lat;

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position){
 
    long = position.coords.longitude;
    lat = position.coords.latitude;

   var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&APPID=c10bb3bd22f90d636baa008b1529ee25';

   $.getJSON(api, function(data){

   var ftemp;
   var ctemp;
   var ts=true;
    
    var weatherType = data.weather[0].description;
    var kelvin = data.main.temp; 
    var windspeed= data.wind.speed;
    var city = data.name;
       
    
    ftemp=((kelvin)*(9/5)-459.67).toFixed(1);
    ctemp=(kelvin-273).toFixed(1);
    
    
    $('#city').html(city);
    $('#weatherType').html(weatherType);
    $('#ftemp').html(ftemp +'&#8457');
    $('#ftemp').click(function(){
      if(ts===false)
        {
          $('#ftemp').html(ftemp +'&#8457');
          ts=true;
        }
      else
      {
        $('#ftemp').html(ctemp +'&#8451');
        ts=false;
      }
    });
    $('#windspeed').html(windspeed +' mph');

    if(ctemp>10)
      {$('body').css('background-image','url(https://wallpaperscraft.com/image/mountains_sky_sunset_peaks_97149_1920x1080.jpg)');}
    else
      {$('body').css('background-image','url(https://wallpaperscraft.com/image/switzerland_alps_mountains_night_beautiful_landscape_99817_1920x1080.jpg)');}
   });
  });
}
})