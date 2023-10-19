
    
    function validar(){
       
        var username = document.getElementById('username').value;
        if(username==""){
            alert("El nombre de usuario no puede estar vacío");
            return false;
        }
        var password = document.getElementById('password').value;
        if(password==""){
            alert("La contraseña no puede estar vacía");
            return false;
        }

    }

    function validaregis(){
      
        var nombre = document.getElementById('nombre').value;
        if( nombre==""){
            alert("El nombre de usuario no puede estar vacío");
            return false;
        }

        var apellido = document.getElementById('apellido').value;
        if( apellido==""){
            alert("El apellido de usuario no puede estar vacío");
            return false;
        }

        var password = document.getElementById('password').value;
        // Cuando el cuadro de entrada está vacío, el mensaje de solicitud
        if( password=="" ){
            alert("La contraseña no puede estar vacía");
        }

        var email = document.getElementById('email').value;
        if(!/^([a-zA-Z0-9_-])+@([live.uleam.edu])+(.[com])+/.test(email)){
            alert("El buzón es incorrecto");
            return false;
        }

    }
    function validar_registroti(){
      
        var TEMA = document.getElementById('TEMA').value;
        if( TEMA==""){
            alert("El tema no puede estar vacío ");
            return false;
        }

        var DESCRIPCION = document.getElementById('DESCRIPCION').value;
        if( DESCRIPCION==""){
            alert("La descripción no puede estar vacía ");
            return false;
        }

        var OBJETOG = document.getElementById('OBJETOG').value;
        // Cuando el cuadro de entrada está vacío, el mensaje de solicitud
        if( OBJETOG=="" ){
            alert("El objetivo no puede estar vacío ");
            return false;
        }
        var OBJETOE = document.getElementById('OBJETOE').value;
        // Cuando el cuadro de entrada está vacío, el mensaje de solicitud
        if( OBJETOE=="" ){
            alert("Los objetivos específicos no pueden estar vacios");
            return false;
        }

        }

        function validar_contra() {
                var oldpw = __('oldpw').value,
                    newpw = __('newpw').value;
                if(oldpw != '' && newpw != ''){
                  if(oldpw != newpw){
                    //si las contraseñas no coinciden
                    __('resultado').innerHTML = '<p class="error"><strong>Error: </strong>¡Las contraseñas no coinciden!</p>';
                  } else {
                    //Si todo esta correcto 
                    __('form').innerHTML = '<p class="correcto"><strong>✓ Correcto: </strong>Los datos son correctos :)</p>';
                  }
                } else {
                  //si los campos o uno, este vacio
                  __('resultado').innerHTML = '<p class="error"><strong>Error: </strong>¡Los campos no deben estar vacios!</p>';
                } 
              }


        function validar_correo (){
            var email = document.getElementById('email').value;
            if(!/^([a-zA-Z0-9_-])+@([live.uleam.edu])+(.[ec])+/.test(email)){
                alert("El buzón es incorrecto");
                return false;
            }
        }

    
      const navmenu=document.querySelector(".nav-menu")
      const navtoggle=document.querySelector(".nav-toggle")
      navtoggle.addEventListener("click",()=>{
        navmenu.classList.toggle("nav-menu_visible")
      });
           
      const create = str => document.createElement(str);
const files = document.querySelectorAll('.fancy-file');
Array.from(files).forEach(
    f => {
        const label = create('label');
        const span_text = create('span');
        const span_name =create('span');
        const span_button = create('span');

        label.htmlFor = f.id;

        span_text.className = 'fancy-file__fancy-file-name';
        span_button.className = 'fancy-file__fancy-file-button';

        span_name.innerHTML = f.dataset.empty || 'Ningun archivo seleccionado';
        span_button.innerHTML = f.dataset.button || 'Buscar';

        label.appendChild(span_text);
        label.appendChild(span_button);
        span_text.appendChild(span_name);
        f.parentNode.appendChild(label);

        span_name.style.width = (span_text.clientWidth - 20)+'px';

        f.addEventListener('change', e => {
            if( f.files.length == 0 ){
                span_name.innerHTML = f.dataset.empty ||'Ningún archivo seleccionado';
            }else if( f.files.length > 1 ){
                span_name.innerHTML = f.files.length + ' archivos seleccionados';
            }else{
                span_name.innerHTML = f.files[0].name;
            }
        } );   
    }
);


const $seleccionArchivos = document.querySelector("#seleccionArchivos"),
  $imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");

// Escuchar cuando cambie
$seleccionArchivos.addEventListener("change", () => {
  // Los archivos seleccionados, pueden ser muchos o uno
  const archivos = $seleccionArchivos.files;
  // Si no hay archivos salimos de la función y quitamos la imagen
  if (!archivos || !archivos.length) {
    $imagenPrevisualizacion.src = "";
    return;
  }
  // Ahora tomamos el primer archivo, el cual vamos a previsualizar
  const primerArchivo = archivos[0];
  // Lo convertimos a un objeto de tipo objectURL
  const objectURL = URL.createObjectURL(primerArchivo);
  // Y a la fuente de la imagen le ponemos el objectURL
  $imagenPrevisualizacion.src = objectURL;
});

    
