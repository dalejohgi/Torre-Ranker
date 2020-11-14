#!/usr/bin/node
/**
 * Filter only developer experience
 */

const validExperiences = [ 
  /Fullstack/img,
  /Developer/ig,
  /Dev/ig,
  /Software/ig,
  /Frontend/ig,
  /Backend/ig,
  /Tech/ig,
  /Devops/ig,
  /Database/ig
]

// Return true when finds non related experience
async function evalExperience (experience="") {
    for(let i = 0; validExperiences[i]; i++) {
      if (validExperiences[i].test(experience))
        return true;
    }
    return false;
};

exports.expFilter = async function (jobs=[]) {
  if (jobs) {
    const expValidated = [];
    for (job of jobs) {
      if (await evalExperience(job.name))
        expValidated.push(job.name);
    }
    return expValidated;
  }
  return null;
}


