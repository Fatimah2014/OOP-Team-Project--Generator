

const topHtml = (generateManger) => {

`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>OOP-Team-Project-Generator</title>
</head>
<body>
<header>
    <div id= 'title' class="jumbotron">
		<h1 id= 'title' class="text-center">My Team</h1>
	</div>
	<div class="container">
		
	</div>
</header>

   
    <div class="card" style="width: 18rem;">

        <div class="card-body">
          <h5 class="card-title">${answers.name}</h5>
          <p class="card-text"><span class="iconify" data-icon="fa-solid:mug-hot" data-inline="false"></span> Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li id= 'info' class="list-group-item">id:${answers.id}</li>
          <li id='info' class="list-group-item">Email:${answers.email}</li>
          <li id='info' class="list-group-item">Office Number:${answers.number}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link"></a>
          <a href="#" class="card-link"></a>
        </div>
      </div>
    
</body>
</html>`
    fs.writeFile("./dist/example.html", topHtml, (err) => err ? console.log(err) : console.log('successfully created card'))

};




const engineerHtml = (generateEngineer) => {

 ` <div class="card" style="width: 18rem;">
    <div class = "card-body">
      <h5 class = "card-title">${answers.name}</h5>
      <p class="card-text"><span class="iconify" data-icon="akar-icons:glasses" data-inline="false"></span> Engineer</p>
    </div>
    <ul class = "list-group list-group-flush">
      <li id = 'info' class="list-group-item">id:${answers.id}</li>
      <li id = 'info' class="list-group-item">Email:${answers.email}</li>
      <li id = 'info' class="list-group-item">Github:${answers.github}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link"></a>
      <a href="#" class="card-link"></a>
    </div>
  `
  fs.appendFile("./dist/example.html", engineerHtml, (err) => err ? console.log(err) : console.log('successfully created card'))
}





const interHtml = (generateIntern) => {

`
<div class="card" style="width: 18rem;">

    <div class="card-body">
      <h5 class="card-title">${answers.name}</h5>
      <p class="card-text"><span class="iconify" data-icon="akar-icons:glasses" data-inline="false"></span> Engineer</p>
    </div>
    <ul class="list-group list-group-flush">
      <li id= 'info' class="list-group-item">id:${answers.id}</li>
      <li id='info' class="list-group-item">Email:${answers.email}</li>
      <li id='info' class="list-group-item">Github:${answers.school}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link"></a>
      <a href="#" class="card-link"></a>
    </div>
  </div>`
fs.appendFile("./dist/example.html", interHtml, (err) => err ? console.log(err) : console.log('successfully created card'))
};



const endHtml = () => {
`
    </div>
    </body>
</html>
`
fs.appendFile("./dist/example.html", endHtml, (err) => err ? console.log(err) : console.log('successfully created card'))
};



console.log(top)

module.exports = {
    topHtml,
    engineerHtml,
    interHtml,
    endHtml,

}