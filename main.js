function fixDate(timestamp) {
    var date = new Date(parseInt(timestamp)) ;
    return ('0' + (date.getMonth()+0)).slice(-2) + '/'
         + ('0' + date.getDate()).slice(-2) + '/'
         + date.getFullYear();
}


$.getJSON( "https://private-f3b4b-interview2.apiary-mock.com/data", function( data ) {
  let items = [];

  $.each( data, function( key, val ) {

    items.push("<div id='" + key + "' class='col-md-12 secret' data-color='" + val.secret + "'>" +  "<img class='img-circle img-responsive' + src='" + val.image + "'>" + "<div class='didi'>" + val.name + "</div>" + "<div class='time'>" + fixDate(val.timestamp)  + "</div>" + "</div>" );
    $('.container').on('click', '#' + key, function (){
          $("#bla").css({"background": val.secret, "color": "white"}).text(val.name);
    });
    items.push()
  });

  $( "<div/>", {
    "class": "my-secrets",
    html: items.join( "" )
  }).appendTo( ".row" );
});
