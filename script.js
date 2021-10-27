const newNavbar = document.createElement("nav");

newNavbar.className = "navbar";
ithLink.href = "https://github.com/Mumrawsingh";
githLink.innerText = "Github";
githLink.target = "_blank";
twitLink.href = "https://twitter.com/iLikeItLikeMatt";
twitLink.innerText = "Twitter";
twitLink.target = "_blank";
linkLink.href = "https://www.linkedin.com/in/obedmunozjr";
linkLink.innerText = "LinkedIn";
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