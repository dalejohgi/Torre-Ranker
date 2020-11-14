#!/usr/bin/node
/**
 * Filter only code experience
 */

const validExperiences = [ 
  /Senior/img,
  /\nSenior/img,
  /Sr/ig,
  /Head/ig,
  /Marketing/ig,
  /Manager/ig,
  /Lead/ig,
  /Director/ig,
  /Salesforce/ig,
  /Sales/ig,
  /Expert/ig,
  /Executive/ig,
  /Communications/ig,
  /Business/ig,
  /Analyst/ig,
  /Media/ig,
  /QA/g,
  /Experienced/ig,
  /legal/ig,
  /Consultant/ig,
]

// Discards non related offers
exports.filterExperience = function (experience) {
    for(let i = 0; validExperiences[i]; i++) {
      if (validExperiences[i].test(experience))
        return true;
    }
    return false;
};