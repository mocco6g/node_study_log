var axios = require('axios');

axios.get('http://pubserver2.herokuapp.com/api/v0.1/books/111')
    .then(function (response) {
        console.log('ok');
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });
    // .finally(function() {
    //     console.log('process end')
    // });