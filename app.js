document.getElementById('button1').addEventListener('click',messi)
document.getElementById('button2').addEventListener('click',appJson)
function messi(){
    fetch('app.text')
    .then(function (res) {
        return res.text();
    })
        .then(function (data) {
            console.log(data);
            document.getElementById('output').innerHTML=data
        })
      .catch(function(err) {
          console.log(err);
      })
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
      .catch(function(err) {
          console.log(err);
      })
}


