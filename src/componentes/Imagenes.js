import React, { useState } from "react";

function Imagenes() {
  const [urlImagen, setUrlImagen] = useState(
    "https://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg"
  );
  const [indiceImagen, setIndiceImagen] = useState(0);

  function cambiarImagen() {
    const imagenes = [
      "https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/185509058_4509215365773136_6619726584759031562_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHBJmtJ_aE9x3X0lah428nQTxavxkZRIWVPFq_GRlEhZRerXHBs66RK9O4rGDrnpVs&_nc_ohc=-cd3IDGPG-AAX8EcxWa&_nc_ht=scontent.fuio1-2.fna&oh=00_AfCSQgAEns5RJWieJZydZ8sWzFpyuTi6vHxQv4vOrMRS1A&oe=648232E8",
       "https://scontent.fuio1-2.fna.fbcdn.net/v/t39.30808-6/344072126_906512390608399_1229681035145736993_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHj0onvFtfVEzyT18AYn-lswVzK6CKXptTBXMroIpem1NmvoF9Pukrt7UOGuDkkTZU&_nc_ohc=rn0n6jRwU6sAX9GiEKu&_nc_oc=AQnfi07APs86JvMkqh3WX5R0ODucgxd-KiclNMTsn6luViEtpW-IPq332eoiuUvqP2-1UcAZ72E4REl346bzlb1N&_nc_ht=scontent.fuio1-2.fna&oh=00_AfDbDU3H3x-fJXIsw9hSbvwLqjVjLTIfY4CPtWlI8ck1AA&oe=64606E9D",
       "https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/344359956_761675875412987_8966293021626863614_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFg2Xxf7BaPniwpcuqm6fP9d3aCh60oRH53doKHrShEfryIyBboVNRRul1sWcL-eqI&_nc_ohc=YLaTPrzpUCcAX8n0yPI&_nc_ht=scontent.fuio1-1.fna&oh=00_AfBmNlrcC8PLfjpkAeUGWFa9cSrq9j2MwcyGXns6yZmoPQ&oe=64645520",
     "https://scontent.fuio1-2.fna.fbcdn.net/v/t39.30808-6/251761239_10209760596929053_4649787344793731501_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHjYahgRdITGUxtmo8OJqLS_-RIDeO0Smz_5EgN47RKbJ2wXfarX88tZ7zX_Dp5ABo&_nc_ohc=dfywwrhTMhEAX-L8P35&_nc_ht=scontent.fuio1-2.fna&oh=00_AfDId49agogKi4EbeaROQe0e7OnAFhTXLjDNBiX21UCB1Q&oe=6464A9B9",
     "https://media.istockphoto.com/id/1171733307/es/foto/veterinario-con-perro-y-gato-cachorro-y-gatito-en-el-m%C3%A9dico.jpg?s=612x612&w=0&k=20&c=v08DSeFqYx2_VGucKz5AxeC0ZEP5B1IBfBVWotHYF3s=",
     "https://img.freepik.com/foto-gratis/cerca-veterinario-cuidando-perro_23-2149100178.jpg",
     "https://dam.ngenespanol.com/wp-content/uploads/2019/10/perros-personalidad-2.jpg",
     "https://estaticos-cdn.prensaiberica.es/clip/66e86d63-f5d3-4752-b019-29e28f5079a5_16-9-discover-aspect-ratio_default_0.jpg",




    ];

    const nuevoIndice = (indiceImagen + 1) % imagenes.length;
    setIndiceImagen(nuevoIndice);
    setUrlImagen(imagenes[nuevoIndice]);
  }

  return (
    
    <div className="destilo">
      <h1 className="estilostexto">IMÁGENES</h1>
      <img className="ima" src={urlImagen} alt="imagen" /> <br></br>
      <button className="boton" onClick={cambiarImagen}>Cambiar imágen</button>
      </div>
   
  );
}

export default Imagenes;
