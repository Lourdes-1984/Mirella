const Util = {
    /***
     * Permite guardar en el localStorage la informacion enviada y queda registrado 
     * con la llave que se envie.
     */
     GuardarLocal: (llave, valor) => {
        window.localStorage.setItem(llave, JSON.stringify(valor));
    },

    /***
     * Permite obtener el valor guardado en el localStorage según la llave
     * que se esta solicitando 
     */
    ObtenerLocal: (llave) => {
        return JSON.parse(window.localStorage.getItem(llave));
    },

    /***
     * Permite validar si una llave ya se encuentra registrada en el localStorage
     */
    ValidarLocal: (llave) => {
        return window.localStorage.getItem(llave) != undefined;
    }
}