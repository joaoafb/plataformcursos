
    document.getElementById("cadastro").onclick = function(){
        location.href = "../cadastro/index.html"
       
     }
 

     function logar(){

        
        var docRef = db.collection("usuarios").doc(document.getElementById("inputusuario").value + document.getElementById("inputsenha").value   )

        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("O Usuario Existe!");
                localStorage.setItem("login", "logado")
                localStorage.setItem("datalogin", document.getElementById("inputusuario").value + document.getElementById("inputsenha").value )
                location.href = "../../index.html"
            } else {
                alert("Usuario/Senha Incorreto ou Você Não Tem Cadastro Neste Site!")
                console.log("Usuario Não Existe!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
     }

   