document.getElementById('button1').addEventListener('click',messi)

function messi(){
    fetch('app.text')
    .then(function (res) {
        return res.text();
    })
        .then(function (data) {
            console.log(data);
        })
      
}