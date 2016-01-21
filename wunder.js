if (Meteor.isClient) {

  Template.hello.events({

    'click button': function () {
      Meteor.call("getWeather");
    }
    
  });
}

if (Meteor.isServer) {

    Meteor.methods({

      getWeather: function() {
        let url = "http://api.wunderground.com/api/a7e4a9975d790f02/hourly10day/q/CA/San_Francisco.json";

        HTTP.get(url, (error, results) => {
          if (error) { 
            console.log(error)
          } else {
            console.dir(results.data);
          }
        });
      }

  });
}
