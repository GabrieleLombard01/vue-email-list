/*
//JS RESET
console.log('JS OK')

//Vue RESET
console.log('Vue OK', Vue);
*/

const list = document.getElementById('list');

//Axios 
axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(res => {
    console.log(res.data.response);
    list.innerText = res.data.response;
});
