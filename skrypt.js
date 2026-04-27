document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("przycisk").addEventListener("click", () =>{

        let login = document.getElementsByName("login").value
        let haslo = document.getElementsByName("password").value
        let wynik = document.getElementById("result")
        if(login == "admin" && haslo == "1234"){
            wynik.innerHTML = `Zalogowano pomyślnie!`
        } else{
            "Nieprawidłowy login lub hasło"
        }
    })
})