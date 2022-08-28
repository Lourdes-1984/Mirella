
// Carousel
/*$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})*/

 
/**
 * Clase de Usuario
 */
 class cRegistro{
    Email;
    Contraseña;

    constructor( _contraseña, _nombre){
        this.Contraseña = _contraseña;
        this.Email = _email;
    }
}

/**
 * Clase de Contacto
 */
class cContacto{
    Nombre;
    Email;
    Comentario;

    constructor(_nombre, _email, _comentario){
       this.Nombre = _nombre;
       this.Email = _email;
       this.Comentario = _comentario;  
    }
}

/**
 * Clase de Registro de Usuario
 */
class cUsuarioRegistro{
    Nombre;
    Apellido;
    Pais;
    Ciudad;
    Email;
    Contraseña;

    constructor(_nombre, _apellido, _contraseña, _email, _pais, _ciudad){
        this.Nombre = _nombre;
        this.Apellido =  _apellido;
        this.Pais = _pais;
        this.Ciudad = _ciudad;
        this.Email = _email;
        this.Contraseña = _contraseña;
    }
}

class cProducto{
    Id;
    Nombre;
    Producto;
    Descripcion;
    Precio;
    Categoria;
    Marca;
    Imagen;
    Cantidad = 1;

    constructor(_id, _nombre, _producto, _descripcion, _precio, _categoria, _marca,  _imagen){
     this.Id = _id;
     this.Nombre = _nombre;
     this.Producto = _producto;
     this.Descripcion = _descripcion;
     this.Precio = _precio;
     this.Categoria = _categoria;
     this.Marca = _marca;
     this.Imagen =  _imagen;
    }  
};

const Inventario = [
    new cProducto(1, 'Base en polvo moroccan', 'Polvo' ,'Sus increíbles partículas de luz reflejan la luz y brindan a tu piel suavidad y un sutil brillo. Posee una cobertura matte superfina, lo que lo hace ideal para todo tipo de pieles. Utilízalo solo con tu crema hidratante o arriba de tu base de maquillaje.', 1506,'Rostro','Mirella', './Img/IMG/producto-cara1 (2).webp'),

    new cProducto(2, 'Base en polvo transparente','Polvo','Base fluida matificante. Minimiza poros.Olvidate de los  poros y el brillo de la piel! Los nuevos tonos de base Fit Me matte + poreless cubren imperfecciones, desvanecen los poros y controlan el  brillo para darle a tu cara el efecto matte perfecto.',1506,'Rostro','Mirella','./Img/IMG/producto-cara2.webp' ),

    new cProducto(3, 'Base en polvo geisha', 'Polvo' ,'Polvo bronceador a prueba de agua y con textura  aterciopelada que brinda un aspecto bronceado naturalmente uniforme  aterciopelada que brinda un aspecto bronceado naturalmente uniforme', 1200,'Rostro','Mirella', './Img/IMG/producto-cara3.webp'),

    new cProducto(4, 'Maquillaje fluido modelador','Corrector','El corrector de maquillaje Noelle Paris Infallible es ultra  hidratante e intransferible.Sus pigmentos permiten una fijación extrema, e hidratación durante todo el día. Tiene una textura fluida que logra una  cobertura perfecta y da una sensación fresca.' ,1200,'Rostro','Mirella','./Img/IMG/producto-cara4.webp' ),

    new cProducto(5, 'Base de maquillaje cobertura beam', 'Bases' ,'Sus increíbles partículas de luz reflejan la luz y brindan a tu piel suavidad y un sutil brillo. Posee una cobertura matte superfina, lo que lo hace ideal para todo tipo de pieles. Utilízalo solo con tu crema hidratante o arriba de tu base de maquillaje.', 1400,'Rostro','Mirella', './Img/IMG/producto-cara5.webp'),

    new cProducto(6, 'Base de maquillaje cobertura total','Bases','Base fluida traslúcida, acabado delicado y natural pigmentos ligeros y duraderos.Sus pigmentos ligeros brindan un acabado natural. No contiene aceites. Formulado con FPS 18.',1600,'Rostro','Noelle','./Img/IMG/producto-cara6.webp'),

    new cProducto(7, 'Dream Radian Liquid', 'Base de maquillaje' ,'El maquillaje Dream Radiant Liquid de Maybelline NY,perfecciona tu piel a la vez que la hidrata, dejándola radiante, jugosa e hidratada. Con ácido hialurónico y colágeno. En 8 tonos.' , 2605,'Rostro','Maybelline', './Img/IMG/producto-cara7.webp'),

    new cProducto(8, 'Borrador corrector de ojos','Corrector de ojos','Corrector Borrador multiusos: borra ojeras y bolsas,corrige imperfecciones, ilumina la mirada  y define el rostro. Gracias a su  fórmula con Bayas de Goji y Haloxyl, hidrata hasta 12h el contorno de  ojos, trata y reafirma ojeras y bolsas. Su icónico aplicador en esponja cubre fácilmente con precisión y consigue una cobertura que no reseca  ni cuartea. Fórmula vegana apta para pieles sensibles.' ,2153,'Rostro','Maybelline','./Img/IMG/producto-cara8.webp' ),

    new cProducto(9, 'Master', 'Contour' ,'Domina el contouring en modo fácil gracias al truco de la  V. ¿Qué es el truco de la V? Esculpir e Iluminar el pómulo en 2 gestos. Marca, define e ilumina con el stick 2 en 1.', 1700,'Rostro','Maybelline', './Img/IMG/producto-cara9.jpg'),
   
    new cProducto(10, 'Fit Me mate afina poros','Base','Fit Me Mate Afina Poros se adapta a tu tono de piel y mejora su textura, dejando un acabado natural.',2500,'Rostro','Maybelline','./Img/IMG/ producto-cara10.png' ),
   
    new cProducto(11, 'Dream Urban cover maquillaje +SFP50', 'Base/protector' ,'Dream Urban Cover, la base de maquillaje que perfecciona y protege tu piel. Perfecciona: Unifica la piel y cubre imperfecciones.Protege: Con SPF50 y antioxidantes. Bloquea los rayos UV y la polución.', 3000,'Rostro','Maybelline', './Img/IMG/producto-cara11.jpg'),
   
    new cProducto(12, 'Super Stay active wear 30H corrector','Corrector','El corrector que lo da todo: larga duración, alta cobertura y textura ultra ligera ¡hasta 30H! Su fórmula vegana es hidratante sin sensación de pesadez, no reseca ni cuartea. Además, no transfiere y desafía agua, roces, sudor...¡Dile adiós a tus ojeras y olvídate deretoques!',1800,'Rostro','Maybelline','./Img/IMG/producto-cara12.jpg'),
   
    new cProducto(13, 'Cheek Heat all in On Colorete', 'Rubor en crema' ,'Cheek Heat es un colorete en crema para un efecto buena cara instantáneo. El primer ALL-IN-1 blush que sube el color de tus  mejillas, labios y párpados ¡al instante!. 1, 2, 3…¡SUBE EL COLOR! Efecto buena Cara, para un look natural lleno de luminosidad.', 1000,'Rostro','Maybelline', './Img/IMG/producto-cara13.jpg'),
   
    new cProducto(14, 'Master Strobing','Iluminador','Master strobing es un iluminador en stick cremoso quemarca y realza facciones iluminándolas.',1350,'Rostro','Maybelline','./Img/IMG/producto-cara14.webp' ),
    
    new cProducto(15, 'Labial nude satinado', 'Labial' ,'Encontrá tu nude perfecto, pigmentos intensos para un color natural y real con un acabado matte.Encontrá tu nude perfecto, pigmentos intensos para uncolor natural y real con un acabado matte.', 980,'Labios','Noelle', './Img/IMG/producto-labio1.webp'),
    
    new cProducto(16, 'Labial seda deluxe','Labial','Nuevo Labial seda con acabado matte intenso. Colorpermanente.Sella el matte con el color ink mas saturado, y es ultra cobertura, sin quese transfiera. Gracias a su fórmula líquida y su aplicador, se desliza fácilmente por  los labios para que su aplicación sea precisa. No reseca',980,'Labios','Noelle', './Img/IMG/producto-labio2.webp'),
   
    new cProducto(17, 'Labial rubí deluxe', 'Labial' ,'Labial ruby de aplicación ligera con un acabado mate y una sensación suavizante.-Formulado para dar confort y una alta cobertura de color. -Cobertura sinpliegues. -Libre de sensación pegajosa.', 900,'Labios','Noelle', './Img/IMG/producto-labio3.webp'),
  
    new cProducto(18, 'Beso de chocolate','Labial liquido','Labial liquido de larga duración gracias a su fórmula con tecnología Micro-Flex. Un color de gran impacto en un extremo y un bálsamo humectante en elotro para fijar la humedad y mantener los labios cómodos todo el día.',980,'Labios','Noelle','./Img/IMG/producto-labio4.webp'),
   
    new cProducto(19, 'Brillo rosa', 'Labial liquido' ,'Nuevo Labial líquido con acabado matte intenso. Color permanente. Sella el matte con el color ink mas saturado, y es ultra cobertura, sin que se transfiera. Gracias a su fórmula líquida y su aplicador, se desliza fácilmente por los labios para que su aplicación sea precisa. No reseca.', 1000,'Labios','Noelle', './Img/IMG/producto-labio5.webp'), 
   
    new cProducto(20, 'Lápiz de labios poder marrón','Lapiz labial','El primer lapiz labial . Color inalterable, labios humectados y frescos, sin retoques pigmentos de alta intensidad.',500,'Labios','Mirella','./Img/IMG/producto-labio6.webp'), 
   
    new cProducto(21, 'Super stay matte ink', 'Pintalabios Mate Tono 75 Fighter' ,'Sellando el mate en tus labios con nuestro pintalabios de larga duración Superstay Matte Ink, ¡ahora con aroma a tarta! Su fórmula de tinta líquida no cuartea ni reseca.', 1239,'Labios','Maybelline', './Img/IMG/producto-labio7.webp'), 
   
    new cProducto(22, 'Lifter gloss brillo de labios','Brillo Labial Con Acido Hialuronico','Descubre Lifter Gloss, el nuevo brillo de labios efecto lifting con ácidohialurónico. Para unos labios más hidratados y rellenos, sin retoques.',1250,'Labios','Maybelline', './Img/IMG/producto-labio8.webp'), 
   
    new cProducto(23, 'Super stay matte ink crayon', 'Pintalabios Mate' ,'MATTE ON. PARTY ON. Sella el mate más cremoso en tus labios con nuestro pintalabios de larga duración Ink Crayon, ¡ahora con partículas de brillo! Su fórmula aporta color mate ultra saturado que se fija en tus labios, es tan fácil de usarcomo un lápiz y puedes aplicarlo de una sola pasada gracias a su aplicador de alta precisión.', 1800,'Labios','Maybelline', './Img/IMG/producto-labio9.jpg'), 
   
    new cProducto(24, 'Color sensacional','Pintalabios','Pigmentos puros para un color vibrante. Formulado con aceites preciosos de ricino y sésamo, para unos labios suaves e hidratados.',1250,'Labios','Maybelline', './Img/IMG/producto-labio10.jpg'), 
   
    new cProducto(25, 'Sombra de ojos cobrizo esencial', 'Sombra' ,'Sombras compactos para que la tu piel luzca sin poros y brillante.', 600,'Ojos','Mirella', './Img/IMG/producto-ojos1.webp'),

    new cProducto(26, 'Sombra de ojos bronce esencial','Sombra','Crea una impresión duradera con las minipaletas de seis tonos de sombras para ojos de Mirella.',770,'Ojos','Mirella', './Img/IMG/producto-ojos2.webp'),
   
    new cProducto(27, 'Sombra de ojos rosa brillante', 'Sombra' ,'Sombras compactos para que la tu piel luzca sin poros y brillante.', 770,'Ojos','Mirella', './Img/IMG/producto-ojos3.webp'),

    new cProducto(28, 'Sombra de ojos dorada esencial','Sombra','Sombras compactos para que la tu piel luzca sin poros y brillante.',770,'Ojos','Mirella', './Img/IMG/producto-ojos4.webp'),

    new cProducto(29, 'Sombra de ojos plata esencial', 'Sombra' ,'Sombras compactos para que la tu piel luzca sin poros y brillante.', 770,'Ojos','Mirella', './Img/IMG/producto-ojos5.webp'),

    new cProducto(30, 'Sombra de ojos halcyon esencial','Sombra','Sombras compactos para que la tu piel luzca sin poros y brillante.',770,'Ojos','Mirella', './Img/IMG/producto-ojos6.webp'),

    new cProducto(31, 'Sombra de ojos multipack', 'Sombra pack' ,'Sombra de ojos Extreme mini palette Sparkle x 4 GrPodrás crear infinitasCombinaciones con la paleta de Sombra de ojos Extreme Black. 3 tonos satinados ultra pigmentados para tu maquillaje de ojos.', 770,'Ojos','Mirella', './Img/IMG/producto-ojos7.webp'),
    
    new cProducto(32, 'Lápiz de ojos negro intenso','Lapiz de ojos','Delineador Mirella define & fill duo soft black',500,'Ojos','Mirella', './Img/IMG/producto-ojos8.webp'),

    new cProducto(33, 'Delineador de ojos satinado fem', 'Delineador' ,'Maybelline define & fill duo soft black Prepárate paraimpresionar con unos ojos más deliniados, suaves e impecables.', 1200,'Ojos','Maybelline', './Img/IMG/producto-ojos9.webp'),
   
    new cProducto(34, 'Lápiz de ojos tatto liner','Perfilador De Ojos, Deep Onyx negro','Nuevo lápiz de ojos Tattoo Liner efecto tatuajesemi-permanente. A prueba de agua, roces y sudor. Se desmaquilla con agua tibia o agua micelar.',1374,'Ojos','Maybelline', './Img/IMG/producto-ojos10.jpg'),
   
    new cProducto(35, 'Lash sensational', 'Máscara de Pestañas' ,'Revela capas y capas de pestañas. Comprueba la diferencia.', 4010,'Ojos','Maybelline', './Img/IMG/producto-ojos11.webp'),

    new cProducto(36, 'Tatto brow','Tinte para cejas semi-permanente ','Cejas perfectas en 3 pasos:1- Utiliza su aplicador para diseñar la ceja deseada 2-Deja secar el tinte durante 20 minutos si quieres una duración de 1 día y 2 horas para una duración de hasta 3 días.3- Retira la pelicula que se ha formado y descubre unas cejas naturales,rellenas y definidas',1899,'Cejas','Maybelline','./Img/IMG/producto-cejas1.jpg' ),
    
    new cProducto(37, 'Delineador maybelline define and fill fuo soft brown', 'Delineador' ,'Su variedad de tonos dibuja los looks más divertidos y sorprendentes. Delineado perfecto e intenso que enmarca y perfila el contorno del ojo para una mirada irresistible.', 800,'Cejas','Maybelline','./Img/IMG/producto-cejas2.jpg' ),
   
    
    new cProducto(38, 'Lápiz de cejas tatto liner','Lapiz de cejas','Nuevo lápiz de cejas Tattoo Liner efecto tatuaje semi-permanente. A prueba de agua, roces y sudor. Se desmaquilla con agua tibia o agua micelar.',1270,'Cejas','Maybelline','./Img/IMG/producto-cejas3.jpg' ),
  
    new cProducto(39, 'Stick de cejas tatto brow', 'Stick de cejas' ,'Recién llegado de NY, el nuevo laminado de cejas en stick Tattoo Brow lift. ¡Efecto lifting en 3 pasos para que vayas #conlacejabienalta! Su stick defórmula en cera ha sido creado para rellenar y fijar tus cejas con un acabado natural y sin huecos. Su cepillo especial laminado sella pelo a pelo para que tengas unascejas por TODO LO ALTO. ¿Un lifting de cejas en menos de 1 minuto? Sí, peina, rellena, fija... ¡Lo tienes, cejas laminadas y naturales!', 2000,'Cejas','Maybelline','./Img/IMG/producto-cejas4.jpg'),
  
    new cProducto(40, 'Brow extensiones','Extensiones de cejas en stick','Marca y rellena tus cejas con el nuevo Extensiones de Cejas en stick de Maybelline New York. Un stick con fibras incorporadas que se adhieren a tus cejas en una pasada.',1800,'Cejas','Maybelline','./Img/IMG/producto-cejas5.jpg' ),
   
    new cProducto(41, 'Ultra slim automatico brow', 'Lápiz de cejas' ,'Consigue unas cejas perfectas y definidas con + precisión y + facilidad con el lápiz automático ultra preciso Brow Ultra Slim. Gracias a su puntaultra fina y trazo ultra suave consigue un acabado natural.', 1400,'Cejas','Maybelline','./Img/IMG/producto-cejas6.jpg' ),
   
    new cProducto(42, 'Brow drama','Máscara de cejas','La primera máscara de cejas de Maybelline que matiza, rellena y fija tus cejas de forma natural.',1600,'Cejas','Maybelline','./Img/IMG/producto-cejas7.jpg' ),
   
    new cProducto(43, 'Tatto brow 36h', 'Lápiz de cejas' ,'¡Llega el nuevo lápiz de cejas Tattoo Brow 36H! Consigue unas cejas rellenas y naturales con la facilidad de un lápiz y la duración de Tattoo. Su fórmula con polímeros de crema en polvo es muy cómoda de llevar y dura hasta 36h, asegurándote que si lo llevas 8h o 36h tus cejas seguirán intactas. Su formato lápizlo hace muy fácil de usar: aplica y peina, y su fórmula tattoo lo resiste todo: roces, agua y sudor. No transfiere, no mancha. #CEJÍSIMASFACILÍSIMAS', 1900,'Cejas','Maybelline','./Img/IMG/producto-cejas8.webp' ),
 
    new cProducto(44, 'Brow satin diseño de cejas','Lápiz de cejas','Brow Satin de Maybelline New York es un lápiz con dos usos, un lado con punta fina para dar forma a las cejas y el otro, una sombra para rellenar y dar volumen natural.',1200,'Cejas','Maybelline','./Img/IMG/producto-cejas-9.jpg' ),
   
    new cProducto(45, 'Pinta uñas auperstay 7 días', 'Esmalte de uñas' ,'ESMALTE DE UÑAS DE LARGA DURACIÓN CON HIERRO Y VITAMINA B5.', 1299,'Uñas','Maybelline', './Img/IMG/productos-uñas1.jpg'),
   
    new cProducto(46, 'Color show','Esmalte de uñas','LOS COLORES IRRESISTIBLES QUE CAUSAN FUROREN NUEVA YORK.',240,'Uñas','Maybelline', './Img/IMG/producto-uñas2.jpg'),
    
    new cProducto(47, 'Quitaesmalte express remover', 'Quitaesmalte' ,'Quitaesmalte Express de Maybelline es un quitaesmalte que retira los esmaltes en segundos sin tener que usar algodones.Eficaz y ultrarrápido.', 350,'Uñas','Maybelline', './Img/IMG/producto-uñas3.jpg'),
    
    new cProducto(48, 'Superstay 3d top','Coat para uñas','Consigue un efecto gel en tus uñas con este incleible producto',600,'Uñas','Maybelline', './Img/IMG/producto-uñas4.jpg'),

    new cProducto(49, 'Dr.rescue all in one', 'Tratamiento para uñas' ,'S.O.S ¿Tus uñas tienen una emergencia? ¡Dr.Rescue llega para darles el cuidado que necesitan! Base de tratamiento y top coat en un mismo producto. Empieza tu manicura usándola como base de tratamiento para unas uñas fuertes y sanas. Además, puedes usarlo como Top Coat para sellar y añadir brillo y protección. ¡Apuesta por una manicura que aguante tu ritmo!', 1300,'Uñas','Maybelline', './Img/IMG/producto-uñas5.jpg'),

    new cProducto(50, 'Dr.rescue top coat efecto gel', 'Polvo' ,'¡Manicura desde casa como recién salida del salón! Consigue unas uñas efecto gel y brillantes de larga duración connuestro Dr. Rescue Gel effect Top Coat. Rápida aplicación y fórmula contextura efecto gel que protege el color de tu esmalte ¡el paso final parauna manicura perfecta!', 1300,'Uñas','Maybelline', './Img/IMG/producto-uñas6.jpg'),
   
];


