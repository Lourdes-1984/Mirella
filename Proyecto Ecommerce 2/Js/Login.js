const btnEntrar = document.getElementById('btnEntrar');

btnEntrar.addEventListener('click',(event)=>{
    let email = document.getElementById('InputEmail').value
    let contraseña = document.getElementById('InputPassword').value
    console.log('mail',email)
    console.log('contraseña',contraseña)
    
    if(!email || !contraseña){
      return alert('Coloca tu Email y Contraseña')
    }else {
        
    let resultado = Login.ValidarCredenciales(email, contraseña);
    if(resultado.code == 200){
        window.location = "./Home.html";
    } else{
        alert(resultado.msg);
    } 
    }

})