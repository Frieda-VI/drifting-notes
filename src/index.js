const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const pages = [
  {
    Name: "OOP Lua",
    Date: "2022-11-14",
    Path: "html/2022-11-14-OOP-LUA.html",
    Image: "assets/images/oop-image.jpeg",
    Description:
      "This is just me testing the code highlighting feature works... Since I may or may not post my code snippets on the blog. hahah",
    Keywords: ["lua", "oop", "code"],
  },
  {
    Name: "A blog!?",
    Date: "2022-11-13",
    Path: "html/2022-11-13-a-blog.html",
    Image: "assets/images/welcome.jpg",
    Description: "I made a blog from scratch...",
    Keywords: ["intro", "introduction", "blog"],
  },
  {
    Name: "My Sadness",
    Date: "2022-09-20",
    Path: "html/2022-09-20-my-sadness.html",
    Image: "assets/images/my-sadness.jpg",
    Description: "A poem about my sadness...",
    Keywords: ["poem", "my", "sadness"],
  },
];

function formatDate(date) {
  let dateString = date.split("-");
  return `${dateString[2]} ${months[parseInt(dateString[1]) - 1]} ${
    dateString[0]
  }`;
}

function createButton(page) {
  let element = document.createElement("li");
  element.className = "post";
  element.innerHTML = `
    <a href=${page.Path}>
      <h2>${page.Name}</h2>
      <img src=${page.Image} alt=${page.Name}>
      <p>${page.Description}</p>

      <time datetime=${page.Date}>${formatDate(page.Date)}</time>
    </a>
  `;

  return element;
}

/*
fetch("../pages.json")
  .then((response) => response.json())
  .then((pages) => {
    let postList = document.createElement("ul");
    postList.className = "posts-list";

    for (var i = 0; i != pages.length; i++) {
      // Create a button for each available page \\
      postList.appendChild(createButton(pages[i]));
    }

    document.body.appendChild(postList);
  });
*/

let postList = document.createElement("ul");
postList.className = "posts-list";

for (var i = 0; i != pages.length; i++) {
  // Create a button for each available page \\
  postList.appendChild(createButton(pages[i]));
}

document.body.appendChild(postList);
