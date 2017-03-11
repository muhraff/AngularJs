// Create and register the new "instagram" service
app.factory('instagram', function($resource){

	return {
		fetchPopular: function(callback){

			// The ngResource module gives us the $resource service. It makes working with
			// AJAX easy. Here I am using a client_id of a test app. Replace it with yours.

			var api = $resource('https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code',{
				client_id: 'bf1650e5584b47fbac363cf06b71bfde'
			},{
				// This creates an action which we've chosen to name "fetch". It issues
				// an JSONP request to the URL of the resource. JSONP requires that the
				// callback=JSON_CALLBACK part is added to the URL.

				fetch:{method:'JSONP'}
			});

			api.fetch(function(response){

				// Call the supplied callback function
				callback(response.data);

			});
		}
	}

});


