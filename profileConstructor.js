#!/usr/bin/node
/**
 * Class contructor file
 */

const fetch = require('node-fetch');

// User constructor
class User { constructor(name, picture, jobs, projects) {
  this.name = name;
  this.picture = picture;
  this.jobs = jobs;
  this.projects = projects;
  }
};

// Consumes Torre API to get an user object
exports.getUser = async function (username="") {
  if (username) {
    let response = await fetch('https://bio.torre.co/api/bios/' + username);
    const userObj = await response.json();

    const name = userObj.person.name;
    const picture = userObj.person.picture;
    const jobs = userObj.person.jobs;
    const projects = userObj.person.jobs;
    const user = new User(name, picture, jobs, projects);
    return JSON.stringify(user);
  }
};




