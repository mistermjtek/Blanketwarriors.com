// By: https://gist.github.com/thomasmb
function replaceGists() {
  // … find all gist scripts inside the ajax container
  var $gists = $('main').find('gist');

  // if gist embeds are found
  if($gists.length){

    // update each gist
    $gists.each(function(){

      var $this = $(this);

      // Loads gist as json instead with a jsonp request
      $.getJSON( $this.attr('src') + 'on?callback=?', function(data) {

        // replace script with gist html
        $this.replaceWith( $(data.div) );
        add_stylesheet_once( data.stylesheet );
      });
    });
  }
}
function add_stylesheet_once(url) {
  $head = $('head');
  if( $head.find('link[rel="stylesheet"][href="'+url+'"]').length < 1 )
    $head.append('<link rel="stylesheet" href="'+ url +'" type="text/css" />');
}
