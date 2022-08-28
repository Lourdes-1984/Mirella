
const llaves = ['usuariosRegistrados', 'contexto','carrito'];

const Login = {   
    /***
     * Permite verificar si el usuario esta registrado
     */
    ValidarCredenciales: (usuario, clave) => {
        
        if (!Util.ValidarLocal(llaves[0])){
            return {
                code: 500,
                msg: 'No existe información registrada'
            }
        }

        let Lista_usuario = Util.ObtenerLocal(llaves[0]);
        if(Lista_usuario.find(x => x.correo == usuario && x.clave == clave) == undefined){
            return {
                code: 404,
                msg: 'Usuario y/o clave no son correctos'
            }
        }
        else
        {
            return {
                code: 200,
                msg: ''
            }
        }
    },

    /***
     * Almacena la informacion del usuario logueado en la pagina
     */
    logueo: (usuario) => {
        let fecha_actual = new Date();
        Util.GuardarLocal(llaves[1], { correo: usuario, fecha: fecha_actual.toISOString() });
    }

};

const Registro = {
    /***
     * Almacena la informacion del usuario logueado en la pagina
     */
     GuardarUsuario: (registro) => {

        let listado_usuario = [];

        if (!Util.ValidarLocal(llaves[0])){
            listado_usuario.push(registro);
            Util.GuardarLocal(llaves[0], listado_usuario);
        }
        else {
            listado_usuario = Util.ObtenerLocal(llaves[0]);

            if(listado_usuario.find(x => x.correo == registro.correo) != undefined){
                return {
                    code: 500,
                    msg: 'Usuario ya registrado con ese correo'
                }
            }
            listado_usuario.push(registro);
            Util.GuardarLocal(llaves[0], listado_usuario);
        }
        
        return {
            code: 200,
            msg: 'Usuario registrado exitosamente'
        }
    }
}

