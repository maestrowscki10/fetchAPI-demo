document.getElementById('button1').addEventListener('click',messi)
document.getElementById('button2').addEventListener('click',appJson)
document.getElementById('button3').addEventListener('click',Api)
function messi(){
    fetch('app.text')
    .then(res => res.text())
        .then(data =>{
            console.log(data);
            document.getElementById('output').innerHTML=data
        })
      .catch(err =>console.log(err))
}


function appJson(){
    fetch('app.json')
    .then(function (res) {
        return res.json();
    })
        .then(function (data) {
            console.log(data);
            let output =''
        data.forEach(post => {
                output+=`<li>${post.title}</li>`
                output+=`<li>${post.body}</li>`
            });
            document.getElementById('output').innerHTML=output
        })
        .catch(err =>console.log(err))
      
}

function Api(){
    fetch('https://api.github.com/users')
    .then(function (res) {
        return res.json();
    })
        .then( (data)=> {
            console.log(data);
            let output =''
        data.forEach(user => {
                output+=`<li>${user.login}</li>`
               
            });
            document.getElementById('output').innerHTML=output
        })
        .catch(err =>console.log(err))
}


