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
