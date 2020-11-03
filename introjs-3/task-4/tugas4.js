fetch('https://jsonplaceholder.typicode.com/users')
       .then(function (response) {
           return response.json()
       })
       .catch(function (err) {
           console.log(`Ups, ${err} :(`)
       })
       .then(function (result) {
           return result.map((item) => {
             console.log(item.name)
           })
       })