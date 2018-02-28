$(document).ready(function(){
    
var names=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];  

var url = "https://wind-bow.glitch.me/twitch-api/streams/";

for(var i=0;i<names.length;i++)
{
   url="https://wind-bow.glitch.me/twitch-api/streams/"+names[i];
  
   $.getJSON(url, function(data){

    var status;
    var logo;
    var username;
     
      if(data.stream===null)
      {               
         $.getJSON(data._links.channel + '/?client_id=ldw9j1vrulwfjraqhso28926mkz4qos&callback=?',function(data2){
            var logo = data2.logo;
            var username = data2.display_name;
            var status="offline";
           var link=data2.url;
        
             $("#offline").append("<div class='container'>"+"<div class='col-md-4'>"+"<a href='"+link+"'>"+"<img src='"+logo+"'>"+"</a></div>"+"<div class='col-md-4'>"+username+"</div>"+"<div id='lol' class='col-md-4'>"+status+"</div>");   
      })
      }
    
      else
      {
         status="online";
         username = data.stream.channel.display_name;
         logo = data.stream.channel.logo;
         var link = data.stream.channel.url;
        var game= data.stream.channel.game;
             $("#online").prepend("<div class='container'>"+"<div class='col-md-4'>"+"<a href='"+link+"'>"+"<img src='"+logo+"'>"+"</a></div>"+"<div class='col-md-4'>"+username+"</div>"+"<div id='lol2' class='col-md-4'>"+status+" streaming: "+game+"</div>");   
      }   
});  
}
  
    $('.online').on('click', () =>{
    $('#offline').hide();
    $('#online').show();
  });
  
    $('.offline').on('click', () =>{
    $('#online').hide();
    $('#offline').show();
  });
  
    $('.all').on('click', () =>{
    $('#offline').show();
    $('#online').show();
  });
  
});