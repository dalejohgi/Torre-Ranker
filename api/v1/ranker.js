#!/usr/bin/node
/**
 * Ranks users of torre based on their experience developing
 */
const { getExpPoints } = require('./experienceCalculator');
const { expFilter } = require('./experienceFilter');
const { getUser } = require('./profileConstructor');

exports.rankUser = async function (username="") {
  if (username) {
    let user = await getUser(username);
    user = JSON.parse(user);
    const validated = await expFilter(user.jobs);
    points = await getExpPoints(validated);
    let level = "";
    if (points <= 10){
      level = "Baby-Dev"
    } else if ((points > 10) && (points <= 20)) {
      level = "Kiddo-Dev"
    } else if ((points > 20) && (points <= 30)) {
      level = "Teen-Dev"
    } else if ((points > 30) && (points <= 40)) {
      level = "Young-Dev"
    } else if ((points > 40) && (points <= 50)) {
      level = "Experienced-Dev"
    } else if ((points > 50) && (points <= 60)) {
      level = "Professional-Dev"
    } else if ((points > 60) && (points <= 70)) {
      level = "Master"
    } else if ((points > 70) && (points <= 80)) {
      level = "Expert"
    } else if ((points > 80) && (points <= 90)) {
      level = "Hero"
    } else if (points > 90) {
      level = "God"
    }
    if (points > 100) {
      points = 100;
    }
    user.points = points;
    user.level = level;
    return user;
  }
};
