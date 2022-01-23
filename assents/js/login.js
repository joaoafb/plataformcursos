
    document.getElementById("btnlogar").onclick = function(){
       location.href = "./pages/login/index.html"
      
    }

    


    if(localStorage.getItem("login") == "logado"){
       document.getElementById("btnlogar").style.display = "none"
       document.getElementById("btnsair").style.display = "block"
       document.getElementById("btnminhaconta").disabled = false;

       document.getElementById("btnsair").onclick = function(){
 
          localStorage.clear()
          location.reload()
       }
    }else{

      document.getElementById("btnlogar").style.display = "block"
      document.getElementById("btnsair").style.display = "none"
      document.getElementById("btnminhaconta").disabled = true;  }