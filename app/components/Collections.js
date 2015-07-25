'use strict';
import bigDaddy from './projects/bigDaddy';
import tokki from './projects/tokki';
import unearth from './projects/unearth';
import codingCrockPot from './projects/codingCrockPot';

import staticServer from './posts/node-static-server';
import basicScraping from './posts/basic-scraping';
import howDoTheyDoIt from './posts/how-do-they-do-it';
import speedUpSublime from './posts/speed-up-sublime';
import handyApplications from './posts/handy-applications';

const Collections = {
  Projects: [
    bigDaddy,
    tokki,
    unearth,
    codingCrockPot
  ],
  BlogPosts: [
    staticServer,
    basicScraping,
    howDoTheyDoIt,
    speedUpSublime,
    handyApplications
  ]
};

export default Collections;
