#!/usr/bin/node
/**
 * Class contructor file
 */

const fetch = require('node-fetch');

// User constructor
class User { constructor(name="", picture="", jobs=[], projects=[], profession="") {
  this.name = name;
  this.picture = picture;
  this.jobs = jobs;
  this.projects = projects;
  this.profession = profession;
  this.level = "";
  this.points = 0;
  }
};

// Consumes Torre API to get an user object
exports.getUser = async function (username="") {
  if (username) {
    let response = await fetch('https://bio.torre.co/api/bios/' + username);
    const userObj = await response.json();

    const name = userObj.person.name;
    const picture = userObj.person.picture;
    const jobs = userObj.jobs;
    const projects = userObj.projects;
    const profession = userObj.person.professionalHeadline;
    const user = new User(name, picture, jobs, projects, profession);
    return JSON.stringify(user);
  }
};




