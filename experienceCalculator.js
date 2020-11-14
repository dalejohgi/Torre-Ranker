#!/usr/bin/node
/**
 * Experiece points calculator file
 */

// Calculates months of experience in a job
function getExpMonths (job) {
  let fromDate = new Date(job.fromMonth + " 01, " + job.fromYear + " 00:00:00");
  console.log(fromDate);
  fromDate = fromDate.getTime();
  let toDate = new Date(job.toMonth + " 30, " + job.toYear + " 00:00:00");
  toDate = toDate.getTime();
  
  const delta = Math.abs(toDate - fromDate);
  const seconds = Math.floor((delta)/1000);
  const minutes = Math.floor(seconds/60);
  const hours = Math.floor(minutes/60);
  const days = Math.floor(hours/24);
  const months = Math.floor(days/30);
  return (months);
}

// Returns points of experience based on the number of months worked
exports.getExpPoints = async function () {
  let totalExperience = 0;
  for (job of jobs) {
    totalExperience += getExpMonths(job);
  }
  // 1.25 per month calculating 24 months for each level of expertice (junior/mid/etc)
  const expPoints = (totalExperience * 1.25);
  return expPoints;
}