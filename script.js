let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills  = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("mongo");
        habilidades[6].classList.add("android");
        habilidades[7].classList.add("ios");
        habilidades[8].classList.add("communication");
        habilidades[9].classList.add("english");
        habilidades[10].classList.add("scrum");
        habilidades[11].classList.add("spanish");
        habilidades[12].classList.add("respon");
        habilidades[13].classList.add("french");
        habilidades[14].classList.add("neg");
        habilidades[15].classList.add("ibm");
    }
}

//Detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

document.addEventListener('DOMContentLoaded', function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      var portfolioItems = document.querySelectorAll('.portfolio-item');
  
      portfolioItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
          this.querySelector('.portfolio-description').style = 'padding-top: 0; color: inherit; font-size: inherit;';
          this.querySelector('.portfolio-links').style = 'cursor: auto; margin-bottom: 0;';
        });
  
        item.addEventListener('mouseout', function() {
          this.querySelector('.portfolio-description').style = '';
          this.querySelector('.portfolio-links').style = '';
        });
      });
    }
  });
  