'use strict';
import React from 'react';
import Highlight from '../Highlight.js'

var blogPost = {
  name: 'how-do-they-do-it',
  index: 3,
  date: '03/12/2015',
  title: 'How do they DOOOOOO this!?!?',
  description: 'Handy plugins to explore the internet'
};

blogPost.component = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{blogPost.title}</h1>
        <h2>{blogPost.date}</h2>
        <h2>{blogPost.description}</h2>
        <p>Did you ever have that feeling when you looked at a website?  It happens to me all the time.  Usually it&#39;s not too difficult to quickly look through the code and find information about a site.  However, there are tools that can help you at figure out that kind of information WITHOUT digging around too much in the mud.  This post isn&#39;t so much about how to use them, since they&#39;re pretty friggin straightforward.  But I think just knowing they exist can make life a little easier and more fun, so I thought I&#39;d share them.</p>

        <h4>Wappalyzer</h4>

        <p>This blog post was inspired by my friend who showed me <a href="https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg?hl=en">Wappalyzer</a>.  It&#39;s a pretty sweet application that lets you see what technologies were used to make a site.  It&#39;s not always 100% accurate, but you can find out some really interesting things, and it&#39;ll tell you when it doesn&#39;t quite recognize what&#39;s being used.
        <img alt="Wappalyzer is a pretty sweet tool" src="http://res.cloudinary.com/blanket-warriors/image/upload/v1433203421/wappalyzer_gtudkc.png"/></p>

        <h3>Fontface Ninja</h3>

        <p><a href="https://chrome.google.com/webstore/detail/fontface-ninja/eljapbgkmlngdpckoiiibecpemleclhh?hl=en-US">Fontface Ninja</a> lets you quickly figure out what fonts someone is using!  It&#39;s also got a mask feature so you can focus on just the text and how it looks by itself.
        <img alt="Fontface ninja is butter" src="http://res.cloudinary.com/blanket-warriors/image/upload/v1433203421/font-ninja_f38onj.png"/></p>

        <h3>ColorPick Eyedropper</h3>

        <p><a href="https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en-US">ColorPick Eyedropper</a> is pretty much the same thing, but for colors.  What I like about this one in comparison to others, is that it really lets you zoom in on each pixel and makes it huge, so it&#39;s easy to see the color you were looking for.
        <img alt="mmmmhmmmmm dem colors tho" src="http://res.cloudinary.com/blanket-warriors/image/upload/v1433203420/color-picker_b4owlu.png"/></p>

        <p>Boom shackalacka!  Pretty cool stuff, right?  There are alternative programs for Firefox, too, and <a href="https://addons.mozilla.org/en-us/firefox/addon/wappalyzer/">Wappalyzer</a> is avaiable for the platform.  So hop on it and start learning about how them other sites go so pretty!</p>
      </div>
    );
  }
})

export default blogPost;
