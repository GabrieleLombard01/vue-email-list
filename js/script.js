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
    const li = document.createElement('li');
    li.innerText = res.data.response;
    list.appendChild(li);
});
