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
    Name: "Shattered",
    Date: "2023-07-23",
    Path: "html/2023-07-23-shattered.html",
    Image: "assets/images/shattered.jpg",
    Description: "My shared misery...",
    Keywords: ["misery", "pain", "sadness"],
  },
  {
    Name: "In The Midst",
    Date: "2023-03-18",
    Path: "html/2023-03-18-in-the-midst.html",
    Image: "assets/images/in-the-midst.jpg",
    Description: "A shortstory by Frieda_IV...",
    Keywords: ["shortstory", "stories", "in-the-midst"],
  },
  {
    Name: "Inner Happiness",
    Date: "2022-12-03",
    Path: "html/2022-12-03-inner-happiness.html",
    Image: "assets/images/inner-happiness2.jpg",
    Description: "What is like being truly happy (only yourself needed)...",
    Keywords: ["inner-happiness", "nature", "self-care"],
  },
  {
    Name: "Mechanical Habits",
    Date: "2022-11-24",
    Path: "html/2022-11-24-mechanical-habits.html",
    Image: "assets/images/mechanical-habits2.jpg",
    Description:
      "Get started with a new habit of your choice and become a better self...",
    Keywords: ["habits", "self-improvement", "daily-routine"],
  },
  {
    Name: "Teenagers' Relationships",
    Date: "2022-11-15",
    Path: "html/2022-11-15-teenagers-relationships.html",
    Image: "assets/images/relationships-2.jpg",
    Description:
      "Teenagers' and their absurd relationships that only last for mere seconds and ends with heartbreaks and worse...",
    Keywords: ["teen", "blog", "relationships"],
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
