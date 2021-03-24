function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  Client.checkForName(formText);

  console.log("::: Form Submitted :::");

  // example request
  // fetch("http://localhost:8081/test")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then(function (data) {
  //     document.getElementById("results").innerHTML = data.message;
  //   });
  try {
    fetch(
      "https://numbersapi.p.rapidapi.com/5/22/date?fragment=true&json=true",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "823649a8e3msh93b3ac470417760p1d8fe7jsnf6823270f83e",
          "x-rapidapi-host": "numbersapi.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        document.getElementById("results").innerHTML = data.text;
      });
  } catch (error) {
    console.log(error);
  }
}

export { handleSubmit };
