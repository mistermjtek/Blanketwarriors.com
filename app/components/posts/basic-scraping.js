'use strict';
import React from 'react';
import Highlight from '../Highlight.js'

var blogPost = {
  name: 'basic-scraping',
  index: 1,
  date: '03/12/2015',
  title: 'Introduction to Scraping with Node.js',
  description: 'Introduction to scraping with Node.js'
};

blogPost.component = React.createClass({
  render: function() {
    return (
      <div className="blog-post">
        <h1>{blogPost.title}</h1>
        <h2>{blogPost.date}</h2>
        <h2>{blogPost.description}</h2>
        <h6>What is Scraping?</h6>

        <p>Scraping is an automated way to gather information.</p>

        <h6>Scraping vs Crawling</h6>

        <p>These are quite similar in concept, and most people use the words interchangably.  But while <strong>Crawling</strong> is looking for a more broad source of information (think Google), <strong>scraping</strong> is usually more specific in scope and function.  Scrapers are generally built for a specific site, and are built to act more like a user.  Rarely will you see a crawler submit forms, identify itself as a browser, or execute javascript in the same way a user would.</p>

        <h1>Why Scrape?</h1>

        <p>Scraping is an incredibly useful tool for gathering data!    We can use it to gather and aggregate information from multiple sources to analyze, automate actions on websites, and just generally save a lot of time.</p>

        <p>Let&#39;s get an example of how this can all be useful.  Take <a href="https://ifttt.com/">IFTTT (if this, then that)</a>IFTTT (if this, then that)&lt;/a&gt;.  IFTTT is basically a website that lets users put giant &quot;if&quot; statements around their online life.  For example, a user can have the website post to their Instagram every time they post a picture onto Facebook.  <strong>But how does IFTTT know when you post, and how can it post for you?</strong>  I&#39;m gonna be honest.  I&#39;m not completely sure how they do everything under the hood.  However, if we imagine that the site didn&#39;t have access to any API to connect to Facebook, they would have to use scraping!</p>

        <h1>How Does it Work?</h1>

        <p>Let&#39;s hop right in and learn about scraping!  I&#39;m going to walk you through what goes on when I scrape a website.  We&#39;ll scrape Hacker News for starters, since it&#39;s easy, and seems to be the defacto site for this kind of thing.  I scrape using Node.js, so if you don&#39;t use javascript, your syntax might be a little different.  Regardless, you should be able to mostly follow what&#39;s going on.</p>

        <h6>Gathering the information</h6>

        <p>We&#39;re going to find a way to access the data we need.  If we&#39;re just grabbing data from a public page, it&#39;s usually pretty easy.  <a href="https://developer.chrome.com/devtools">Chrome Devtools</a> is an amazing way to find this kind of information quickly.  The network tab is amazing for seeing the order in which web requests were made.  This is super helpful if the information on the page doesn&#39;t show up at the same time the html is loaded, which is pretty common nowadays, since so many sites use javascript and ajax calls.  In this case, we can see there isn&#39;t a lot going on, and all the information we&#39;ll be looking for is right in the initial html request!  Awesome!
        <a href="/content/images/2015/03/Screenshot-2015-03-10-23-39-23.png">Chrome Dev Tools</a></p>

        <p>The elements page is what we&#39;ll be using to scrape Hacker News, though.  It&#39;s awesome when all the information you want is already directly on the page:
        <a href="/content/images/2015/03/Screenshot-2015-03-10-23-40-14.png">Chrome Dev Tools</a></p>

        <p>Aight.  Next let&#39;s just retrieve the data in Node!  Easy Peasy!  Two npm modules I love for this are <a href="https://www.npmjs.com/package/cheerio">Cheerio</a> and <a href="https://www.npmjs.com/package/request">Request</a>.  Cheerio is our dolla sign.  It basically lets us grab window elements easily in almost exactly the same way that jQuery selectors do.  aka  <code>$(&quot;a&quot;)</code> would select an a node on the dom tree.  Request just gives us an easy way for us to format web requests.  There&#39;s much more information on the two packages on their npm pages, so go check them out if you&#39;re confused!</p>

        <p>But the basic idea is that we want to simulate the request we made on the browser, but do it in Node!</p>

        <p>&lt;script src=&quot;https://gist.github.com/ivebencrazy/f67a3f2078b234764c73.js&quot;&gt;&lt;/script&gt;</p>

        <p>When it gets more difficult is following user actions (logging in and posting), or gathering data through different sources (aka native mobile applications).  We&#39;ll need a slightly more targeted application for something like this.  <a href="http://www.charlesproxy.com/">Charles Proxy</a> can help us get more specific and organized data, as well as help us set up a proxy to get traffic from our phones or other devices.  As a side note if you look at Charles, just realize how easy it is to set up a proxy, and how dangerous it is to use a wifi network you don&#39;t recognize.</p>

        <h6>Test your data paths</h6>

        <p>For this step, I AM TOTALLY AND COMPLETELY IN LOVE WITH <a href="http://www.getpostman.com/">POSTMAN</a>.   It&#39;s basically the best.  So testing the reactions to your data is really just for post requests.  Our Hacker News scraper doesn&#39;t really take advantage of this, so we may have to edit this blog post to get a better example, but the idea is that it&#39;s easier to test many web requests in a gui program like Postman, rather than manually coding in a new request every time.
        <img alt="Postman is awesome." src="/content/images/2015/03/Screenshot-2015-03-11-00-27-50.png"/>
        Postman also has a multitude of interesting and useful tools to help you figure out exactly what information you need to use in your web requests.  Making scrapers ends up being a lot of trial and error, because the interfaces put in place by organizations and websites are usually not set up for this kind of data access.  Postman helps smooth a lot of these out by letting you throw in requests super fast and easy.</p>

        <h3>Further Topics</h3>

        <p>Using your computer as a <a href="http://www.charlesproxy.com/documentation/faqs/using-charles-from-an-iphone/">proxy for your phone</a> is a FANTASTIC way to gather data (albeit a little more shady hehehe).  There many iPhone and Android applications that use json formatting and internal apis to send data, and many of them are easier to gather data from.   However, most of these are not meant for external consumption, so lines start to become a little more grey.  It can, however, become a great resource for many things.
        Closing Notes
        ==========================================
        Scraping can sometimes be a little shady, depending on how you use it.  I wouldn&#39;t reccomend trying to access information that isn&#39;t supposed to be available for public consumption, but a lot of mobile applications are not the most secure.  If nothing else, scraping can let you better understand how information is gathered and used, and can serve as a great learning opportunity to see how your phone provider <a href="https://www.eff.org/deeplinks/2014/11/verizon-x-uidh">tracks your browsing history and uses it to target ads</a>.  Nice!</p>

        <p>So go scrape some sites, change the world, and tell me about it!</p>
      </div>
    );
  }
})

export default blogPost;
