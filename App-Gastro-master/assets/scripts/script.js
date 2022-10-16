const firebaseConfig = {
    apiKey: "AIzaSyAQqo3Sr6kr1moDuStjDlVXDZ_gWAn3eaw",
    authDomain: "gastro-a62e2.firebaseapp.com",
    projectId: "gastro-a62e2",
    storageBucket: "gastro-a62e2.appspot.com",
    messagingSenderId: "368812402523",
    appId: "1:368812402523:web:d84785655b6a988d2f5c7e"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth();

firebase.firestore().settings({
    experimentalForceLongPolling:true,
    merge: true,
})

function criarUsuario(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;
    auth.createUserWithEmailAndPassword(email, senha).then(user =>{
        console.log(user)
        alert ("Cadastrado Com Sucesso");
    }).catch(error =>{
        console.log(error)
    })
}
function login(){
    let userEmail = document.getElementById('email').value;
    let userPassword = document.getElementById('password').value;
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(()=>{
        auth.signInWithEmailAndPassword(userEmail, userPassword).then(loggedUser =>{
            if (loggedUser){
                window.location.href = 'EscolherChef.html';
                alert ('Novo login as '+ new Date())
            }
        }).catch(error =>{
            console.log(error)
        })
    })
}


