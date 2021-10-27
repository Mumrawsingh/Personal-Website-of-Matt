const newNavbar = document.createElement("nav");
const githLink = document.createElement("a");
const twitLink = document.createElement("a");
const linkLink = document.createElement("a");
const homeLink = document.createElement("a");
const projectLink = document.createElement("a");

newNavbar.className = "navbar";
githLink.href = "https://github.com/Mumrawsingh";
githLink.innerText = "Github";
githLink.target = "_blank";
twitLink.href = "https://twitter.com/iLikeItLikeMatt";
twitLink.innerText = "Twitter";
twitLink.target = "_blank";
linkLink.href = "https://www.instagram.com/el_shiloh_/?hl=en";
linkLink.innerText = "My Puppy";
linkLink.target = "_blank";
homeLink.href = "./index.html";
homeLink.innerText = "Home";
projectLink.href = "./projects.html";
projectLink.innerText = "Projects";

if (document.title === "Planet Matt | Home") {
    newNavbar.append(projectLink)
} else {
    newNavbar.append(homeLink)
}

newNavbar.append(githLink)
newNavbar.append(twitLink)
newNavbar.append(linkLink)
document.body.querySelector(".container").prepend(newNavbar)