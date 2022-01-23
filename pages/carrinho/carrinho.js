
db.collection("carrinho" + localStorage.getItem("datalogin")).get().then((querySnapshot) => {

     
    querySnapshot.forEach((doc) => {



        var link = document.createElement("div");

        var img = document.createElement("img");
        img.src = doc.data().urlimgdocurso;
        img.className = "imgcurso"
        img.alt = doc.data().nomedocurso

     
        link.appendChild(img);
        document.querySelector(".boxcursos").appendChild(link);




        
        var linknome = document.createElement("span");
       
        var imgnome = document.createElement("img");
        imgnome = document.createTextNode(doc.data().nomedocurso);
        linknome.className = "infornome"
        linknome.appendChild(imgnome);
        document.querySelector(".boxcursos").appendChild(linknome);


        
        var linkbr = document.createElement("br");
       
        var imgbr= document.createElement("img");
        imgbr = document.createTextNode( "");
    
        linkbr.appendChild(imgbr);
        document.querySelector(".boxcursos").appendChild(linkbr);



        var linkvalor = document.createElement("span");
       linkvalor.className = "inforvalor"
        var imgvalor= document.createElement("img");
        imgvalor = document.createTextNode( "R$" + doc.data().valordocurso);

        linkvalor.appendChild(imgvalor);
        document.querySelector(".boxcursos").appendChild(linkvalor);



        var linkbr = document.createElement("br");
       
        var imgbr= document.createElement("img");
        imgbr = document.createTextNode( "");
    
        linkbr.appendChild(imgbr);
        document.querySelector(".boxcursos").appendChild(linkbr);

        

        var divbuttonpagar = document.createElement("button");
       divbuttonpagar.className = "btncomprar"
         var btncomprarpagar= document.createElement("p");
         btncomprarpagar = document.createTextNode( 'Pagar');
 
         divbuttonpagar.appendChild(btncomprarpagar);
         document.querySelector(".boxcursos").appendChild(divbuttonpagar);

         divbuttonpagar.onclick = function(){
         

db.collection("compras" + localStorage.getItem("datalogin")).doc(localStorage.getItem("nomedocursocarrinho")).set({
    
   
  nomedocurso: localStorage.getItem("nomedocursocarrinho"),
  urlimgdocurso: localStorage.getItem("urldocursocarrinho"),
  valordocurso:localStorage.getItem("valordocursocarrinho"),
  horariodecarrinho:localStorage.getItem("horariocarrinho"),

})
.then(() => {
console.log("Curso Adicionado ao Carrinho!")

db.collection("carrinho" + localStorage.getItem("datalogin")).doc(localStorage.getItem("nomedocursocarrinho")).delete().then(() => {
  console.log("Curso Excluido Do Carrinho!");
  location.reload()
}).catch((error) => {
  console.error("Erro ao Tirar Curso do Carrinho: ", error);
});


})
.catch((error) => {
console.error("Error writing document: ", error);
});

        }
 

        var divbutton = document.createElement("button");
        divbutton.className = "btnnaoquero"
          var btncomprar= document.createElement("p");

          btncomprar = document.createTextNode( 'Não Quero!');
  
          divbutton.appendChild(btncomprar);
          document.querySelector(".boxcursos").appendChild(divbutton);

          divbutton.onclick = function(){
            db.collection("carrinho" + localStorage.getItem("datalogin")).doc(doc.data().nomedocurso).delete().then(() => {
                console.log("Curso Excluido Do Carrinho!");
                location.reload()
            }).catch((error) => {
                console.error("Erro ao Tirar Curso do Carrinho: ", error);
            });
          }


                  
        var linkbr = document.createElement("br");
       
        var imgbr= document.createElement("img");
        imgbr = document.createTextNode( "");
    
        linkbr.appendChild(imgbr);
        document.querySelector(".boxcursos").appendChild(linkbr);


    });
});



document.getElementById("btnback").onclick = function (){
    location.href = "../../index.html"
}