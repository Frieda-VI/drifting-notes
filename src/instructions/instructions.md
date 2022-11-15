
# Instructions

These are the defaults instructions to creating a blog post.

1. Writing in markdown format
2. Converting to HTML
3. Replacing the basic styling with
   ```html
    <link rel="stylesheet" href="../assets/css/katex.css" />
    <link rel="stylesheet" href="../assets/css/main.css" />

    <script src="../includes/header.js" type="text/javascript" defer></script>
    <script src="../includes/footer.js" type="text/javascript" defer></script>
   ```
4. Giving the `h1` tag the `title` id
   ```html
    <h1 id="title">
   ```
5. Before the `h1` tag insert `<universal-header></universal-header>`
6. At the very end, add
   ```html
    <hr class="footer-break" />
    <p class="post-date">Posted on XX MONTH 20XX</p>

    <universal-footer> </universal-footer>
   ```
7. Provide the proper paths to images
8. Open the pages.json, and fill in the data according to the table below
   ```json
    {
     "Name": "XXXX",
     "Date": "20XX-MM-DD",
     "Path": "html/2022-MM-DD-NAME.html",
     "Image": "assets/images/THUMBNAIL.jpeg",
     "Description": "XXX",
     "Keywords": ["XXX", "XXX", "XXX"]
    },
    ```
9. Open the `index.js` file and repeat the table in the pages array.
10. Enjoy!