function changeSelection(selection) {
  document.getElementById("links").remove();
 
  var linkDiv = document.createElement("div");
  linkDiv.setAttribute("id", "links");

  var links = [];
  
  switch(selection) {
    case "projects":
      links.push(createLink("github", "https://github.com/DrewCCannedy"));
      links.push(createLink("eternal-descent", "Eternal-Descent.zip"));
      document.body.setAttribute("class", "project");
      break;
    case "music":
      links.push(createLink("bandcamp", "https://drewcannedy.bandcamp.com"));
      links.push(createLink("soundcloud", "https://soundcloud.com/drewcan"));
      document.body.setAttribute("class", "music");
      break;
    case "social":
      links.push(createLink("linkedin", "https://www.linkedin.com/in/drew-cannedy-87a6b6164/"));
      document.body.setAttribute("class", "social");
      break;
  }
  
  links.forEach((link) => {
    linkDiv.appendChild(link);
  });

  var container = document.getElementById("container");
  container.appendChild(linkDiv);
}

function changeSelectionProjects() {  
  

  changeSelection(links);
}

function createLink(content, href) {
  var tempLink;
  var tempH2;

  tempH2 = document.createElement("h2");
  tempH2.innerHTML = content;

  tempLink = document.createElement("a");
  tempLink.setAttribute("href", href);
  tempLink.appendChild(tempH2);

  return tempLink;
}