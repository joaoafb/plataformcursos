
    document.getElementById("login").onclick = function(){
        location.href = "../login/index.html"
       
     }
 

     function cadastrar(){
                      
            db.collection("usuarios").doc(document.getElementById("inputusuario").value + document.getElementById("inputsenhausuario").value).set({
                nome: document.getElementById("inputnomeusuario").value,
                usuario:  document.getElementById("inputusuario").value,
                 senha:  document.getElementById("inputsenhausuario").value,
                 horariodecadastro: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                console.log("Cadastrado Com Sucesso!");

                localStorage.setItem("login","logado")
                localStorage.setItem("usuario",  document.getElementById("inputusuario").value + document.getElementById("inputsenhausuario").value)
                location.href = "../../index.html"
               
                
            })
            .catch((error) => {
                console.error("Erro ao Cadastrar ", error);
            });
     }
     
     