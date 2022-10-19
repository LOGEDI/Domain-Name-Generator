/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let domainNames = [];
  let adj = ["beautiful", "scariest", "Furry"];
  let noun = ["mountain", "teacher", "woman"];
  let pronoun = ["yours", "where", "he", "nobody"];
  let domain = [".com", ".net", ".us", ".fr", ".es", ".ch", ".co.uk"];
  for (let i = 0; i < pronoun.length; i++) {
    for (let k = 0; k < adj.length; k++) {
      for (let j = 0; j < noun.length; j++) {
        for (let p = 0; p < domain.length; p++) {
          domainNames.push(pronoun[i] + adj[k] + noun[j] + domain[p]);
        }
      }
    }
  }
  console.log(domainNames);

  let outputDomains = "";

  for (let domain of domainNames) {
    outputDomains += `<li>${domain}</li>`;
  }
  document.querySelector("#domain-list").innerHTML = outputDomains;
};
