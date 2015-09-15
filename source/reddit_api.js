if (Meteor.isClient) {

  Template.hello.events({
    'click button': function () {
      $.get("http://api.reddit.com",function(response){
        var c = response.data.children
        console.log(c[0])
        c.forEach(function(p){
          var output = $("<li></li>").append("<a href="+p.data.url+">"+p.data.score+" | "+p.data.title+"</a>")
          $("body").append(output)
        })
      })
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
