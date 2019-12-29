$(document).ready(function() {
	$('#submitWeather').click(function(){
		var city = $('#city').val();
		if (city != "") {
             $.ajax({

             	url :  'http://api.openweathermap.org/data/2.5/weather?q=' + 
             	city + "&units=metric" +
             	"&APPID=4bd16718cdccd685c9a311dc39362c54",
             	type: "GET",
             	datatype:"jsonp",
             	success: function(data){
             	 var widget=show(data);
                   $('#show').html(widget);
                   $('#city').val(' ');

             	}

             });

		}else{
			$('#error').html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a> Field Cannot be empty</div>");
		}
	});
});

function show(data){
      return "<h3 style='font-size:40px;font-weight:bold; class='text-center'>Current Weather for  "+data.name+", " 
      + data.sys.country+"</h3>"+
             " <h3 style='padding-left:40px;'><Strong>Weather</Strong>: " + data.weather[0].main +" </h3>"+
             " <h3 style='padding-left:40px;'><Strong>Description</Strong>:<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+ data.weather[0].description +" </h3>"+
             "<h3 style='padding-left:40px;'><Strong>Temperature</Strong>: " + data.main.temp + "&deg;C</h3>"+
             "<h3 style='padding-left:40px;'><Strong>Pressure</Strong>: " + data.main.pressure + " hpa</h3>"+
             "<h3 style='padding-left:40px;'><Strong>Humidity</Strong>: " + data.main.humidity + "%</h3>"+
             "<h3 style='padding-left:40px;'><Strong>Min_Temperature</Strong>: " + data.main.temp_min + "&deg;C</h3>"+
             "<h3 style='padding-left:40px;'><Strong>Max_Temperature</Strong>: " + data.main.temp_max + "&deg;C</h3>"+
             "<h3 style='padding-left:40px;'><Strong>Wind_Speed</Strong>: " + data.wind.speed + " m/s</h3>"+
             "<h3 style='padding-left:40px;'><Strong>wind_Direction</Strong>: " + data.wind.deg + "&deg;</h3>"
}