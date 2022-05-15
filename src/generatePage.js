const internHTML = intern => {
    return `
    <div class="card m-3 p-0 shadow-lg" style="width: 275px">
        <div class="card-header bg-primary text-white">
        <p class="h2 text-center">${intern.name}</p>
        <p class="h3 text-center">
        <i class="fa-solid fa-graduation-cap m-1"></i>
        Intern </p>
        </div>
        <div class="card-body bg-white">
        <ul class="list-group">
        <li class="list-group-item">
        <span class="fw-bolder">ID:</span>
        ${intern.id} </li>
        <li class="list-group-item">
        <span class="fw-bolder">Email:</span>
        <a href="mailto:${intern.email}">${intern.email}</a>
        </li>
        <li class="list-group-item">
        <span class="fw-bolder">School:</span>
        ${intern.school} </li>
        </ul>
        </div>
        </div>`
}
const managerHTML = manager => {
    return `
    <div class="card m-3 p-0 shadow-lg" style="width: 275px">
        <div class="card-header bg-primary text-white">
        <p class="h2 text-center">${manager.name}</p>
        <p class="h3 text-center">
         <i class="fa-solid fa-mug-hot m-1"></i>
        Manager
        </p>
        </div>
        <div class="card-body bg-white">
        <ul class="list-group">
        <li class="list-group-item">
        <span class="fw-bolder">ID:</span>
        ${manager.id}
        </li>
        <li class="list-group-item">
        <span class="fw-bolder">Email:</span>
        <a href="maileto:${manager.email}">${manager.email}</a>
        </li>
        <li class="list-group-item">
        <span class="fw-bolder">Office:</span>
        ${manager.officeNumber}
        </li>
        </ul>
        </div>
        </div>`
}
const engineerHTML = engineer => {
    return `
    <div class="card m-3 p-0" style="width: 275px">
        <div class="card-header bg-primary text-white">
        <p class="h2 text-center">${engineer.name}</p>
        <p class="h3 text-center">
        <i class="fas fa-glasses mr-1"></i>
        Engineer
        </p>
        </div>
        <div class="card-body bg-white">
        <ul class="list-group">
        <li class="list-group-item">
        <span class="fw-bolder">ID:</span>
        ${engineer.id}
        </li>
        <li class="list-group-item">
        <span class="fw-bolder">Email:</span>
        <a href="mailto:${engineer.email}">${engineer.email}</a>
        </li>
        <li class="list-group-item">
        <span class="fw-bolder">GitHub:</span>
        ${engineer.github}
        </li>
        </ul>
        </div>
        </div>`
}
const generatePage = teamProfile => {
    teamList = [];
    for (let i=0; teamProfile.length>i; i++){
        const role = teamProfile[i].getRole();
        if (role === 'Intern'){
            teamList.push(internHTML(teamProfile[i]));
        }
        if (role === 'Manager'){
            teamList.push(managerHTML(teamProfile[i]));
        }
        if (role === 'Engineer'){
            teamList.push(engineerHTML(teamProfile[i]));
        }
    }
    const team = teamList.join('');
    return HTMLPage(team);
}
const HTMLPage = team => {
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://kit.fontawesome.com/4513d77312.js" crossorigin="anonymous"></script>

</head>
<body>
    <header class="bg-danger py-3 mb-5">
        <h1 class="text-white text-center">
            My Team
        </h1>
    </header>
    <main>
    <div class="container">
    <div class="row d-flex justify-content-center align-items-center">
    ${team}
    </div>
    </div>
    </main>
    </body>
</html>`
}

module.exports = generatePage;