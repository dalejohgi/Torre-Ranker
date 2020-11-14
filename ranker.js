const fetch = require('node-fetch');

exports.rankUser = async function (username="") {
  if (username) {
    let response = await fetch('https://torre.bio/api/bios/' + username);
    console.log(response.status);
    const res = await response.json();
    const offers = await createJobsFromJson(res);
    return JSON.stringify(offers);
  }
};