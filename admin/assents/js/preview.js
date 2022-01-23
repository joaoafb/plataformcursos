setInterval(() => {
    document.getElementById("nomecurso").innerHTML = document.getElementById("inputnome").value
    document.getElementById("valorcurso").innerHTML = "R$" + document.getElementById("inputvalor").value

    if(document.getElementById("inputlinkimg").value == ""){
        document.getElementById("img").style.display = "None"
    } else{ 
        document.getElementById("img").style.display = "block"
        document.getElementById("img").src = document.getElementById("inputlinkimg").value
    }
  
}, 700);






