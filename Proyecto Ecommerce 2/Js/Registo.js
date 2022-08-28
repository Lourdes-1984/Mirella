const btnRegistrarse = document.getElementById('btnRegistrarse')

btnRegistrarse.addEventListener('click',(event)=>{
    let nombre = document.getElementById('InputName').value
    let apellido = document.getElementById('InputLastName').value
    let email = document.getElementById('exampleInputEmail1').value
    let contraseña = document.getElementById('InputPassword').value
    console.log('nombre',nombre)
    console.log('apellido',apellido)
    console.log('email',email)
    console.log('contraseña',contraseña)
    let join= nombre.concat(' '+apellido)
    console.log('join',join)
    
    if(!nombre || !apellido || !email || !contraseña){
        return alert('Completa los campos para registrate')
    }else{ 

    let resultado = Registro.GuardarUsuario({ correo: email, clave: contraseña, nombre: nombre});
    alert(resultado.msg);

    if (resultado.code == 200){
        document.getElementById('InputName').value = '';
        document.getElementById('InputLastName').value = '';
        document.getElementById('exampleInputEmail1').value = '';
        document.getElementById('InputCountry').value = '';
        document.getElementById('InputPassword').value = '';
        document.getElementById('InputPassword').value = '';

        window.location = "./Login.html";
    }
   }
})