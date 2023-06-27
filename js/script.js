/*
//JS RESET
console.log('JS OK')

//Vue RESET
console.log('Vue OK', Vue);
*/

// PRENDO la UL dal dom
const list = document.getElementById('list');

    // Funzione per generare i valori res.data.response
    function generateEmails() {
        const emails = [];

        // CICLO per generare 10 e-mail
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(res => {
                    emails.push(res.data.response);

                    if (emails.length === 10) {
                    // Tutti i valori sono stati generati, li aggiungo alla pagina
                    for (let j = 0; j < emails.length; j++) {
                        const li = document.createElement('li');
                        li.innerText = emails[j];
                        list.appendChild(li);
                        }
                    }
                });
        }
    }

    generateEmails();
