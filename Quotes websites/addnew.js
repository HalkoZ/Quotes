document.getElementById("addNew").addEventListener("click", function () {
  var text = document.getElementById("quoteText").value;
  var author = document.getElementById("quoteAuthor").value;
  var source = document.getElementById("quoteSource").value;

  var newQuote = {
    quoteText: text,
    quoteAuthor: author,
    quoteSource: source,
  };
  fetch("https://js-course-server.onrender.com/quotes/add-quote", {
    method: "POST",
    body: JSON.stringify(newQuote),
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log("The quote is created", data);
    });
});
