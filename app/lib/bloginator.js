var fs = require('fs');
var path = require('path');
var markdown = require( 'markdown' ).markdown;
var readStream = fs.createReadStream(path.join(__dirname, '../assets/blogPosts/markdown/', process.argv[2] + '.md'));
var data = '';
var dataArray = [];

readStream.on('data', function(chunk) {
  data = data + chunk;
})

readStream.on('end', function() {
  var dataArray = data.split('```');
  for(var i = 0; i < dataArray.length; i++) {
    if(i%2 === 0){
      dataArray[i] = markdown.toHTML(dataArray[i]);
      dataArray[i] = dataArray[i].replace(/}/g, "{'}'}");
      dataArray[i] = dataArray[i].replace(/{/g, "{'{'}");
    } else {
      dataArray[i] = dataArray[i].replace(/\'/g, '\\\'');
      dataArray[i] = dataArray[i].replace(/\n/g, '\\n');
      dataArray[i] = '<Highlight className="language-javascript">{\'' + dataArray[i] + '\'}</Highlight>'
    }
  }
  data = dataArray.join('');
  console.log('after:', data);
  fs.writeFile(path.join(__dirname, '../assets/blogPosts/html/', process.argv[2] + '.html'), data, function(err) {
    if(err) {
      return console.log(err);
    }
  });
});
