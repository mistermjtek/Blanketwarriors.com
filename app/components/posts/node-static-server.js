'use strict';
import React from 'react';
import Highlight from '../Highlight.js'

var blogPost = {
  name: 'node-static-server',
  index: 0,
  date: '03/26/2015',
  title: 'Building a Simple Static File Server in Node.js',
  description: 'This is a project about static servers.  wooo.'
};

blogPost.component = React.createClass({
  render: function() {
    return (
      <div className="blog-post">
        <h1>{blogPost.title}</h1>
        <h2>{blogPost.date}</h2>
        <h2>{blogPost.description}</h2>
        <hr/>
        <h3>Why should I build a server in Node.js?</h3>
        <hr/>
        <p>Well, shit.  Your website is cool, but you&#39;ve gotta put it on the web!  Contrary to popular belief, websites are actually much cooler when they&#39;re ACTUALLY ON THE INTERNET.  Go figure.  You&#39;re going to need a server to put your files on the internet.  There are many ways to do this, and one of the most popular is to use Express, because it&#39;s fast and easy...</p>
        <p>If you scroll down this blog post, it&#39;s pretty easy to see that this is NOT what we&#39;re doing today.  But if getting your website up asap is your goal, here ya go.  Knock yourself out:</p><Highlight className="language-javascript">{'\nvar express = require(\'express\');\nvar app = express();\napp.use(express.static(__dirname + \'/public\'));\napp.listen(process.env.PORT || 3000);\n'}</Highlight><p>But, why would I go through the trouble to write a 3000 word blog post on how to build a Node.js server when we can just use Express and be done in 4 lines?  Taking the time to go through something like this is not only interesting, but also plays an important part in understanding just how data flows on the internet.  Aka it&#39;s fun and really interesting.</p>
        <p>In simple words, the goal here is to use this server as an introduction to all the cool things Node.js can do!  There&#39;s a ton of useful functionality that Node includes, and it&#39;s alot more fun to learn about it by building stuff than by reading the <a href="https://nodejs.org/api/">Node.js Documentation</a>.</p>
        <p>Before we get right into it, let&#39;s go over a real basic understanding of what we&#39;re building.  Asking the important questions like:</p>

        <h6>What&#39;s a server?</h6>
        <p>In the simplest terms, a <a href="http://en.wikipedia.org/wiki/Server_%28computing%29">server</a> is an application that can take requests from a client and respond to them.  In web terms, we usually take client to mean some random person on a web browser that happens upon your website.  It&#39;s your server&#39;s job to take their requests and respond accordingly!</p>

        <h6>What&#39;s a Static File Server?</h6>
        <p>Just what it sounds like!  It&#39;s a server that serves <a href="http://en.wikipedia.org/wiki/Static_web_page">static files</a> (files that don&#39;t change).  This is referring to the idea that our files are served in the same way they were stored.</p>

        <h6>Alright it&#39;s time to do it!</h6>
        <p>Let&#39;s get at it!  For this tutorial, I&#39;m going to assume that you have basic javascript knowledge, but know nothing or very little about the glorious creature that is Node.js.  By the end, though, I hope you will feel comfortable both making a server of your own, and diving deeper into Node.js!</p>
        <p>If you&#39;d like to completely follow along, clone a copy of the empty <a href="https://github.com/ivebencrazy/simple-node-server">Server Repo</a>.  It&#39;ll contain our file structure and a sample website for us to serve!</p>
        <p>But now we&#39;re ready!  Let&#39;s get down to business!</p>
        <hr/>

        <h3>Declaring our Dependencies</h3>
        <hr/>
        <p>So first, we want to declare our dependencies.  I will go into more detail on what each of them are as we use them in the program, but here we&#39;re just going to list them out and get a brief explanation.  Your code should look like this:</p><Highlight className="language-javascript">{'\n// Declare our dependencies.\nvar http = require(\'http\');\nvar url  = require(\'url\');\nvar path = require(\'path\');\nvar fs   = require(\'fs\');\n'}</Highlight><p>Let&#39;s first look at this syntax.  <code>require</code> is our way of telling Node that we&#39;re using these resources.  Since all the tools we are using are built-in features of Node, we don&#39;t have to include any special files in our directory.  Nevertheless, Node compartmentalizes these objects, so we still have to require them.</p>
        <p>Let&#39;s take a look at the dependencies we&#39;re using:</p>

        <h5><Highlight className="language-javascript">{'http'}</Highlight></h5>
        <p><a href="https://nodejs.org/api/http.html#http_http">http</a> contains a whole bunch of tools to help us send web requests.  We&#39;re going to use this right off the bat in order to start building our server!</p>

        <h5><Highlight className="language-javascript">{'url'}</Highlight></h5>
        <p><a href="https://nodejs.org/api/url.html#url_url">url</a> holds tools to format and parse the web urls we receive.</p>

        <h5><Highlight className="language-javascript">{'path'}</Highlight></h5>
        <p><a href="https://nodejs.org/api/path.html#path_path">path</a> has some pretty basic, but useful things that help us format and parse filesystem locations.</p>

        <h5><Highlight className="language-javascript">{'fs'}</Highlight></h5>
        <p><a href="https://nodejs.org/api/fs.html#fs_file_system">fs</a> gives us access to a stupid amount of utilities to access, write, edit, and delete to our filesystem.  This is how we interact with our computer.</p>

        <hr/>
        <h3>Building the Structure</h3>
        <hr/>
        <p>Alright!  So we&#39;ve got the resources we need to start making our server!  Let&#39;s start building by writing just a single line of code:</p><Highlight className="language-javascript">{'\n/* The dependencies we wrote go here! */\nvar port = process.argv[2] || 3000;\n'}</Highlight><p>This is the port number that our server is going to run on.  With this setup, we can specify any port we want, but if we don&#39;t specify anything at all, our server will default to port 3000.  What this means is that if our server is running and we type http://localhost:3000 into our web browser, our server&#39;s response wil show up there!</p>

        <h5><code>process.argv[2]</code></h5>
        <p>The </p><Highlight className="language-javascript">{'process.argv[2]'}</Highlight><p> is just there in case we want to declare a custom port number.  The <a href="https://nodejs.org/api/process.html#process_process">process</a> object and its methods are included in Node.js, and they give us access to information about the processes that we&#39;re running.  In this case, <a href="https://nodejs.org/api/process.html#process_process_argv">argv</a>[2] is telling us the first argument that we pass in when we run our server.  Here&#39;s a little example I stole from the Node.js documentation.  It will help us understand exactly how that works:</p><Highlight className="language-javascript">{'\n$ node process.js param1 param2 param3\n'}</Highlight><Highlight className="language-javascript">{'\n//argv[0] = node\n//argv[1] = /Users/ben/work/node/process.js\n//argv[2] = param1\n//argv[3] = param2\n//argv[4] = param3\n'}</Highlight><p>So as we can see, argv is simply telling us each of the arguments that we passed into the terminal window.  The first index is the initial command (node), while the second index is the filepath to our javascript file.  Therefore, the parameters we passed in start being recorded at argv[2].  When we  start our server, our command will look more like this: <code>node server.js</code>, and our server will default to port 3000.  But with our fancy argv, we can set easily set up our server to run on another port, like port 1337 <code>node server.js 1337</code>.  Sweet!</p>
        <p>Let&#39;s look at the rest of our setup code!</p><Highlight className="language-javascript">{'\n/*  Our previously written code  */\nvar server = http.createServer(serverCallback);\nserver.listen(port);\nconsole.log("Server running at: http://localhost:" + port);\n'}</Highlight><p>Alright.   We finally see our server!  You might have noticed that we&#39;re also using one of our dependencies for the first time.</p>

        <h5><code>http.createServer()</code></h5>
        <p>createServer() is creating a <a href="https://nodejs.org/api/http.html#http_class_http_server">server object</a> that runs our callback function <code>serverCallback</code> whenever our server is called.  You&#39;ll notice that we haven&#39;t actually written <code>serverCallback</code> yet, but don&#39;t worry!  That&#39;s what we&#39;re doing in the next section!  Oooooo.  And if you don&#39;t know what a callback function is, you can read all about them in <a href="http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/">this brilliant blog post</a>.  Callbacks are and invaluable concept to understand in Node.js (and in javascript), so take your time and learn them right.</p>

        <h5><code>server.listen(port)</code></h5>
        <p><a href="https://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback">server.listen(port)</a> simply tells our server to listen for web requests directed at the port we specified earlier.  Before we go into the next section, let&#39;s just keep track of where we are.  Hopefully at this point, your code looks like this:</p><Highlight className="language-javascript">{'\n// Declare our dependencies.\nvar http = require(\'http\');\nvar url  = require(\'url\');\nvar path = require(\'path\');\nvar fs   = require(\'fs\');\n\n// Set our port number\nvar port = process.argv[2] || 3000;\n\n// Start our server using the serverCallback function\nvar server = http.createServer(serverCallback);\n\n// Have our server listen to requests at our specified port\nserver.listen(port);\n\n// Log out to our console, so we know where our server is running!\nconsole.log("Server running at: http://localhost:" + port);\n'}</Highlight><hr/>

        <h4>Creating the Function of our Server</h4>
        <hr/>
        <p>So now we have the basic structure to our server!  Now we need to tell it what to do when a request comes in.  Let&#39;s make our callback function:</p><Highlight className="language-javascript">{'\n/*  Our dependencies are up here */\n\nvar serverCallback = function(incomingMessage, response){\n\n  var uri = url.parse(incomingMessage.url).pathname;\n  var file = path.join(process.cwd(), uri);\n\n  fs.open(file, \'r\', function(error) {\n\n    if(error) {\n      response.writeHead(404, {\'Content-Type\': \'text/plain\'});\n      response.write(\'404 Not Found\')\n      response.end();\n      return;\n    });\n\n    fs.readFile(file, function(error, file) {\n\n      if(error) {\n        response.writeHead(500, {\'Content-Type\': \'text/plain\'});\n        response.write(error + \'\n\');\n        response.end();\n        return;\n      });\n\n      response.writeHead(200);\n      response.write(file);\n      response.end();\n    });\n  });\n};\n\n/*  Our port number and server setup is down here */\n'}</Highlight><p>I know I know it&#39;s a lot.  But let&#39;s take it piece by piece.  We&#39;ll start by just looking at the first line:
        <code>var serverCallback = function(incomingMessage, response){'{'}</code></p>

        <h5>Our Parameters</h5>
        <p>Our callback function takes two parameters, &quot;incomingMessage&quot; and &quot;response&quot;.  What are these?</p>

        <h5><code>incomingMessage</code></h5>
        <p><a href="https://nodejs.org/api/http.html#http_http_incomingmessage">IncomingMessage</a> is the message we&#39;re receiving from the client (aka a visitor&#39;s browser).  We&#39;ll be looking through this to see what the user is looking for.  However, since we&#39;re just serving a static website, we won&#39;t do much else with it here.</p>

        <h5><code>response</code></h5>
        <p>You may look at this next parameter and say &quot;Wait a sec.  Aren&#39;t we the ones sending a response?  Why are we taking a parameter?&quot;  Well, you&#39;re absolutely right.  But our <a href="https://nodejs.org/api/http.html#http_class_http_serverresponse">response</a> parameter isn&#39;t actually the message we&#39;re sending back.  This response is a super cool object that Node gives us to help us build our message!  How convenient!  And if you look towards the bottom of our new code, you can see it being used to write a file!  But we&#39;ll come right back to that.  For nowwww, let&#39;s take a glance at our second line of code - and it&#39;s a doozy of one.</p>

        <h4>Getting our file Paths</h4>
        <Highlight className="language-javascript">{'\nvar uri = url.parse(incomingMessage.url).pathname;\nvar file = path.join(process.cwd(), uri);\n'}</Highlight><p>So actually, I lied.  This is not neaaaarly as complicated as it seems.  All this does is get the location of the file that our client is requesting.  There&#39;s a few pieces doing different things, so let&#39;s do that thing where we break it down.</p>

        <h5><code>path.join(argument1, argument2, argument3, etc....)</code></h5>
        <p>This one&#39;s super easy.  We got it from our path dependency(remember that?).  Basically, all this does is glues together all its arguments as a file path.  Aight.  So why do we use <a href="https://nodejs.org/api/path.html#path_path_join_path1_path2">path.join</a>?  Why not just use join?  Well, you certainly could, but path.join is butter, because it&#39;s built specifically with filesystems in mind.  It has a lot of under-the-hood things to help your file path stay formated correctly every time regardless of the kinds of paths you&#39;re glueing.  So let&#39;s now take a look at the two paths we&#39;re glueing together:</p>

        <h5><code>process.cwd()</code></h5>
        <p>Remember process?  We used it earlier to get the arguments from our console!  Well our homie is back again, this time helping us out by giving us our current working directory!</p>

        <blockquote><h6><code>process.cwd()</code> vs <code>__dirname</code></h6><p>You might occasionally see <a href="https://nodejs.org/docs/latest/api/globals.html#globals_dirname">__dirname</a> used in this context as well.  The difference is that while <code>process.cwd()</code> gives us our working directory (ie where you invoked the <code>node</code> command in your terminal),  <code>__dirname</code> gives us the location of our javascript file (ie server.js).  For our purposes, either would work fine.</p><p><strong>You might want to use  <code>process.cwd()</code></strong></p><p>if you moved your serverCallback function to another directory.  Since <code>__dirname</code> is in fact not global, but rather local to each module, it could give you a directory you don&#39;t expect.</p><p><strong>You might want to use  <code>__dirname</code></strong></p><p>if you intend to daemonize your server (aka have an application from another directory run your server).  Since the process would run from another directory, <code>process.cwd()</code> wouldn&#39;t give you the directory you wanted.</p></blockquote>

        <h5><code>url.parse(incomingMessage.url).pathname</code></h5>
        <p><a href="https://nodejs.org/docs/latest/api/url.html#url_url_parse_urlstr_parsequerystring_slashesdenotehost">url.parse</a> is a method from our url dependency.  It lets us take a url path, and turn it into a <a href="https://nodejs.org/docs/latest/api/url.html#url_url">url object</a>, giving us a few different ways to look at the information.  One property of that is pathname, which just gives us the path of our url.  In this case, we&#39;re getting the path of incomingMessage.url!  Again, the reasoning of using this rather than using the straight incomingMessage.url property has to do with formatting and the fact that the path might not be exactly what you expect.  A small example would be if there was query information at the back of the message.  Basically, Node&#39;s just watching our backs for inconsistencies.</p>

        <h4>Finding our First File</h4><Highlight className="language-javascript">{'\nif(fs.statSync(file).isDirectory()){\n  file += \'index.html\';\n}\n'}</Highlight><h4>Status Codes</h4>
        <p>Before we go over the last part of our code, we should talk about status codes. Status codes are a standardized and helpful way for a server to succinctly communicate what has happened with a incoming request.  You can read what all of them mean <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">here</a>, but I&#39;ll just go over the one&#39;s we&#39;re implementing into our server.</p>

        <h5><code>404 - Page Not Found</code></h5>
        <p>This response is telling our client that the page they&#39;re looking for isn&#39;t on our website!  We want to send the client this code if they&#39;re looking for a page that doesn&#39;t exist.  An example of this is if we tried to access our website at http://localhost:3000/gobblygook.  Since &quot;gobblygook&quot; isn&#39;t a path in our filesystem, it won&#39;t go through.  A lot of websites has pretty silly 404 pages, so try typing in some random text the next time you visit https://github.com/gobblygook!</p>

        <h5><code>500 - Internal Server Error</code></h5>
        <p>This response is basically telling our client that we messed up somewhere.  Hopefully this will never run, but just in case, we&#39;ve got it here.</p>

        <h5><code>200 - SUCCESS!!!</code></h5>
        <p>We got your request, and successfully processed it!  In our case, we&#39;ll also be sending back our wesite data with our response as well.</p>

        <h4>Sending a Response</h4>
        <p>We&#39;re almost there!  After this code, our server should interpret a request, and send a response!  Let&#39;s take a look at the part of our code that writes and sends messages:</p><Highlight className="language-javascript">{'\nfs.open(file, \'r\', function(error) {\n\n  if(error) {\n    response.writeHead(404, {\'Content-Type\': \'text/plain\'});\n    response.write(\'404 Not Found\')\n    response.end();\n    return;\n  });\n\n  fs.readFile(fileText, function(error, file) {\n\n    if(error) {\n      response.writeHead(500, {\'Content-Type\': \'text/plain\'});\n      response.write(error);\n      response.end();\n      return;\n    });\n\n    response.writeHead(200);\n    response.write(fileText);\n    response.end();\n  });\n});\n'}</Highlight><p>This code will, as a whole, open the file that the client asks for, read that file, write it to the response, and then send it on its way.  You&#39;ll also notice our status codes throughout this code.  But let&#39;s get on with it!  Let&#39;s look at our first new line of code:</p>

        <h5>Opening our Files</h5>

        <h5><code>fs.open(file, &#39;r&#39;, function(error) {'{'}</code></h5>
        <p><a href="https://nodejs.org/api/fs.html#fs_fs_open_path_flags_mode_callback">fs.open</a> is part of our fs dependency we declared at the top of our file.  If you remember, fs deals with the filesystem around our server, so you can expect open to do something with that.</p>
        <p>An fs.open call usually looks like this:  <code>fs.open(path, flags, callback)</code>.
        Let&#39;s look at our arguments:</p>
        <ul><li><p><strong>Path</strong> - The path is where our file is.  That part&#39;s pretty obvious.</p></li>
        <li><p><strong>Flags</strong> - Flags just tell fs.open how it should open a file.  You can read more about them in the documentation, but we are using the &#39;r&#39; tag when we call the function.  This is telling fs.open that we are only going to be reading the file, and won&#39;t be editing it.</p></li>
        <li><p><strong>Callback</strong> - Our callback function is what&#39;s going to run after we open the file.  Since we can&#39;t read or write from the file until we open it, we&#39;re just going to throw all of it into an anonymous function to pass as the last argument.</p></li></ul>

        <p>So what happens if the file doesn&#39;t exist?  If the file that the client is looking for doesn&#39;t exist, we need to send them our 404 page!  Fortunately, fs.open will pass an error to the callback function if it can&#39;t find the file.  That&#39;s where our next bit of code comes in...</p>

        <h5>Sending our 404 Response</h5><Highlight className="language-javascript">{'\nif(error) {\n  response.writeHead(404, {\'Content-Type\': \'text/plain\'});\n  response.write(\'404 Not Found\')\n  response.end();\n  return;\n});\n'}</Highlight><p>If this code encounters an error, we will send our client a 404 page!  That&#39;s perfect, because our fs.open only returns an error if it can&#39;t find the file!  Let&#39;s look at exactly how that works:</p>

        <h6><code>response.writeHead()</code></h6>

        <p>writeHead() just writes to the header of our response.  In this , we&#39;re telling our response that our status code is a 404, and that the content we&#39;re sending back to the client is plain text.  Easy as pie.  We&#39;ll talk more about headers in my next blog post, where we&#39;ll talk about deploying our server.</p>

        <h6><code>response.write()</code></h6>

        <p>write() will do the actual writing to our response message.  Since we don&#39;t actually have any files to send, we&#39;ll just send a string back as a text response.  If a user starts typing in random things, we&#39;ll default them to this error text.</p>

        <h6><code>response.end()</code></h6>

        <p>end() signals the end of our data!  Our response is done, so we can send it back now!</p>

        <h6><code>return;</code></h6>

        <p>The reason we use return here is because we don&#39;t want the rest of the code to run, since we already sent back our response.  Return will escape us out of our serverCallback function and that will be that!</p>

        <p>We&#39;ve now finished writing our first response!  Albeit it&#39;s not quite the response we want to be sending, but it&#39;s a response nonetheless.  Break time!  Drink some sparkling cider or something!</p>

        <h5>Reading our Files</h5>

        <h5><code>fs.readFile(file, function(error, fileText) {'{'}</code></h5>

        <p>Nice !  At this point, we know that our file exists, so we&#39;re looking good!  Now, <a href="https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback">fs.readFile</a> takes our file and reads it!  This will take the &#39;file&#39;, which is the location of our file, and give us the gravy inside (that&#39;s the text).</p>

        <p>An fs.readFile call usually looks like this: <code>fs.readFile(filename, callback)</code>
        It takes two arguments:</p>

        <ul><li><strong>filename</strong> - our file.  duh.</li><li><strong>callback</strong> - another callback function!  Within which we will be reading our files and sending the client our html file!  The first parameter that fs.Readfile passes into our callback is an error, and the second is our text!</li></ul>

        <p>So now we&#39;re inside our readFile callback, and somehow we have trouble reading the file. Then our error will kick in.  Maybe our file&#39;s corrupted!  Maybe the <a href="http://harrypotter.wikia.com/wiki/Nargle">nargles</a> took them all and messed them all up! We will never quite know, but we should probably send a 500 response to tell the client we messed up.</p>

        <h5>Sending our 500 Response</h5>

        <p>Waaaaaait a second!  This is EXACTLY THE SAME THING AS THE 400 RESPONSE!</p>

        <p>... ... ...Yup.  It is.  Knock yourself out.  You know how to do this one.  However let&#39;s be a little more specific this time.  With a 404, we knew exactly why our code wasn&#39;t working, but with this, it&#39;s more unclear, so we&#39;d like to be more specific and know why our code is breaking.  Let&#39;s pass in the error text itself as a response, so that the user can see exactly what went wrong!  Easy!</p>

        <h5>ACTUALLY Sending our Files (Finally!)</h5>

        <p>We finally got here!  This is the part where we send our files to the client!  And look at that!  It&#39;s also really similar to the way we sent our first two responses!  There&#39;s only a few little differences:</p>

        <h6><code>response.writeHead()</code></h6>

        <p>This time, we&#39;re just writing the status code.  We haven&#39;t been super specific on the type of content we&#39;re serving, so that could be a way in which our server could improve, but most client browsers are pretty smart.</p>

        <h6><code>response.write()</code></h6>

        <p>So if you didn&#39;t notice, we&#39;re passing in the text of our file, rather than the file path itself.  If we were to pass in &#39;file&#39;, we&#39;d just be passing in the location of our file (a string).  But since we&#39;re putting in our file text, it means we&#39;ve sent our file successfully!!!  YAAAAAAYYYYYYYYYYY!!!!! IT WORRRRKKKKKSSSSSS!!!!!!!</p>

        <p>Quickly! Quickly!  cd into the folder with your server.js file and type in the magic words with me!
        <code>node server.js</code></p>

        <p>Then mozy on over to http://localhost:3000 and what do we find?</p>

        <p><a href="/content/images/2015/03/Flappy-Bird-.png">Flappy Bird!</a></p>

        <p>Alright!!!  We did it!!! If it doesn&#39;t quite work, I&#39;ve made a gist of what your code should look like, so make a few adjustments and your code looks like this:</p>

        <p><script src="https://gist.github.com/ivebencrazy/d30f94666a969b430170.js"></script></p>

        <p>At this point, your server should work!  WOOOOOO!!!!  Keep in mind that if we want other people to access our server, we haven&#39;t set that up quiiite yet.  However, I&#39;ll be posting a new blog post to help us do that really soon, so stay tuned!</p>

        <h5>So how does our Shiny New Server Work?</h5>

        <p><em>Note: Illustrations coming soon</em></p>

        <p>We can&#39;t go through all the trouble of building this thing and not even know how it works, right?  So let&#39;s follow what happens when a request reaches our server.  Let&#39;s pretend that this is the absolute first request that is sent to our server, and our server is holding our index.html file from the <a href="https://github.com/ivebencrazy/simple-node-server">sample repo</a>:</p>

        <h6>Step 1:</h6>

        <p><strong>Our request reaches the server, and our serverCallback begins!</strong>  It doesn&#39;t matter kind of request it is, because we&#39;re only responding with our files.  So whether it&#39;s a GET or a POST or whatever, we&#39;ll always respond with our files.</p>

        <h6>Step 2:</h6>

        <p><strong>We will figure out what file the client is looking for...</strong>  Our Line 11 code will help us with that!  We&#39;ll save the output to <code>file</code>, and that will be the location of the file we need to send back!</p>

        <h6>Step 3:</h6>

        <p><strong>Open the file</strong>  So next we open the file, primed for reading because of our &#39;r&#39; tag.  Since our client is hopefully smart, it&#39;s a valid request and we don&#39;t have to send them a 404 response.</p>

        <h6>Step 4:</h6>

        <p><strong>Append <code>index.html</code> to the file path</strong>  So if you run your server and look at http://localhost:3000 in your favorite web browser, that first web request has a path of <code>/</code>!  It&#39;s empty, because they don&#39;t know that they&#39;re looking for our index.html page!  So we&#39;re helping them find it here.</p>

        <h6>Step 5:</h6>

        <p><strong>Read the file, and send back our index.html</strong>  So now we have the location of our index.html file.  fs will help us read the file and send our index.html file.</p>

        <h6>Step 6 (This happens on the user&#39;s browser):</h6>

        <p><strong>The client&#39;s browser reads the dependencies of index.html</strong>  The browser reads the index.html file, and says WAIT.  I NEED MORE STUFF.  So then guess what happens?</p>

        <h6>Step 7:</h6>

        <p><strong>We get more requests!</strong> This time for the .css and .js files.  Maybe in the future, we&#39;ll have a cooler site with even more .css and .js files, but our server will still be able to serve them!</p>
      </div>
    );
  }
})

export default blogPost;
