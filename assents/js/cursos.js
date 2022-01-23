

document.getElementById("btncarrinho").onclick = function(){
    location.href = "./pages/carrinho/index.html"

}


document.getElementById("btncursos").onclick = function(){
    location.href = "./pages/cursos/index.html"

}

if(localStorage.getItem("carrinho") == '0'){
    document.getElementById("btncarrinho").style.display = "none"
}
else{
    document.getElementById("btncarrinho").style.display = "block"
}


db.collection("cursos").get().then((querySnapshot) => {

    
    querySnapshot.forEach((doc) => {






        var link = document.createElement("div");

        var img = document.createElement("img");
        img.src = doc.data().urlimg;
        img.className = "imgcurso"
        img.alt = doc.data().nome
        img.onclick = function(){
            
            
        

           localStorage.setItem("nomedocursocarrinho", doc.data().nome)
           localStorage.setItem("urldocursocarrinho", doc.data().urlimg)
           localStorage.setItem("valordocursocarrinho", doc.data().valor)
           localStorage.setItem("horariocarrinho", 'Posto no carrinho:' + str_data + ' às ' + str_hora)

           
               if(localStorage.getItem("datalogin") == null){
                   location.href = "./pages/login/index.html"
               }
               else{
                   

db.collection("carrinho" + localStorage.getItem("datalogin")).doc(localStorage.getItem("nomedocursocarrinho")).set({
    
   
    nomedocurso: localStorage.getItem("nomedocursocarrinho"),
    urlimgdocurso: localStorage.getItem("urldocursocarrinho"),
    valordocurso:localStorage.getItem("valordocursocarrinho"),
    horariodecarrinho:localStorage.getItem("horariocarrinho"),

})
.then(() => {
console.log("Curso Adicionado ao Carrinho!")


})
.catch((error) => {
 console.error("Error writing document: ", error);
});

               }
        
        
        }
     
        link.appendChild(img);
        document.querySelector(".boxcursos").appendChild(link);




        
        var linknome = document.createElement("span");
       
        var imgnome = document.createElement("img");
        imgnome = document.createTextNode(doc.data().nome);
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
        imgvalor = document.createTextNode( "R$" + doc.data().valor);

        linkvalor.appendChild(imgvalor);
        document.querySelector(".boxcursos").appendChild(linkvalor);


    });
});


// Obtém a data/hora atual
var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes+1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;

// Mostra o resultado