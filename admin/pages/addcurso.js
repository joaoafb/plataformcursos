function addcurso(){

db.collection("cursos").doc(document.getElementById("inputnome").value).set({
    nome:document.getElementById("inputnome").value,
    descricao: document.getElementById("inputdescricao").value,
    valor: document.getElementById("inputvalor").value,
    categoria: document.getElementById("inputcategoria").value,
    urlimg: document.getElementById("inputlinkimg").value,
    valorreal: document.getElementById("inputvalorreal").value,
    quantidadedeaula: document.getElementById("inputaulas").value,
    quantidadedehoras: document.getElementById("inputaulas").value,
    horariodecadastro: firebase.firestore.FieldValue.serverTimestamp()
})
.then(() => {
    console.log("Curso Cadastrado!");
    alert("Curso Cadastrado!")
    location.href = "../index.html"
})
.catch((error) => {
    console.error("Erro Ao Cadastrar o Curso: ERROR ", error);
});
}