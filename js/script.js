/*
//JS RESET
console.log('JS OK')

//Vue RESET
console.log('Vue OK', Vue);
*/

//Axios RESET
axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(res => {
    console.log(res.data.response);
})