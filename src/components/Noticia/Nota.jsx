import React from "react";
import "./notas_estilo.css";

import logoNiño from  "../../assets/img/niño.png";
import logoUsuario from  "../../assets/img/Usuario.png";
import logoComentario from  "../../assets/img/Comentario.png";
import logoFlecha from  "../../assets/img/flecha.png";

function Nota() {
  return (
    <div className="Nota">
   


<div class="Noticias_Relaciones">Noticas / Relaciones</div>


<div class="botonFlecha"> <img src={logoFlecha} className="logoFlecha" alt="Logo de flecha" /></div>


<div class="titulo">I Went on the Dark Web and Instantly Regretted ItAccessing the forbidden parts of the World Wide</div>
   
  

   <div class="sub">Accessing the forbidden parts of the world wirde web, only to realize the depravity of humanity</div>

   <div class="contenidos_3">  
        <div class="usuario">
          <img src={logoUsuario} className="logoUsuario" alt="Logo de Usuario" />
          Boris Escalante
        </div>
<div class="comentario">
<img src={logoComentario} className="logoComentario" alt="Logo de comentario" />
  
  
  292
</div>
<div class="fecha"> 16 de abril de 2024</div>

</div>

<hr className="linea" />

<div clas="foto" src>  <img src={logoNiño} className="niñologo"></img></div>


    <div class="parrafo"> Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, iste ullam. Hic labore ipsa asperiores eum cupiditate eveniet autem distinctio recusandae, quasi nobis placeat, ullam numquam fuga doloremque debitis? Ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ducimus odio sit blanditiis ipsa consequuntur magnam accusantium quo? Laboriosam ut cumque ea doloribus eligendi perspiciatis minus totam ab laborum alias! ipsum, dolor sit amet consectetur adipisicing elit. Distinctio pariatur quibusdam odio ipsum omnis maxime quae accusamus voluptates adipisci alias, error sed natus, sunt, earum mollitia sit libero? Quisquam, rem?Lately, I have been doing a lot of crazy things and today I might have done the craziest thing possible, i.e., I accessed the Dark Web. Many of you might be familiar with the term but still for you folks who are hearing this term for the first time: the Dark Web is one of the parts of the Deep Web. To know about Dark Web you require some basic understanding of the Deep Web. Regardless, the Dark Web is a secretive, hard-to-trace, encrypted digital ecosystem on the internet that is filled with criminals, and infested with drug cartels, UN-sanctioned terrorist organizations, political dissenters, anonymous journalists, and Government spies.</div>
    </div>
    
  );
}

export default Nota;
