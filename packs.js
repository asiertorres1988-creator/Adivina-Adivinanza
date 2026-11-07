/* =====================================================================
   ADIVINA EL PERSONAJE — packs de personajes
   ---------------------------------------------------------------------
   Cada pack tiene:
     id       → identificador corto (sin espacios)
     nombre   → el nombre que se ve en la TV
     emoji    → icono del pack
     carpeta  → carpeta donde están las imágenes de ese pack
     efecto   → cómo se oculta la imagen antes de desvelarla:
                  "silueta"    → la imagen se ve en negro (ideal para PNG con fondo transparente)
                  "pixelado"   → la imagen se ve en mosaico (ideal para fotos)
                  "desenfoque" → la imagen se ve borrosa
     items    → lista de personajes:
                  n      → nombre (es lo que aparece en las 4 opciones)
                  img    → nombre del fichero de imagen dentro de la carpeta del pack
                  pista  → frase de ayuda (se enseña con el botón «Pista», o sola si falta la imagen)
                  similares (opcional) → nombres de otros personajes del pack que se usarán
                            preferentemente como opciones falsas, para que sea más difícil

   Las imágenes NO vienen incluidas: añade tú los ficheros en img/<pack>/ con el
   nombre indicado. Si falta una imagen, la ronda se juega igualmente con la pista.
   Puedes añadir packs nuevos copiando uno de estos bloques.
   ===================================================================== */
const PACKS = [
  {
    id: "princesas", nombre: "Princesas Disney", emoji: "👑", carpeta: "img/princesas/", efecto: "silueta",
    items: [
      { n: "Blancanieves", img: "blancanieves.png", pista: "Vive con siete enanitos y una manzana le juega una mala pasada." },
      { n: "Cenicienta", img: "cenicienta.png", pista: "Pierde un zapato de cristal al dar las doce." },
      { n: "Aurora", img: "aurora.png", pista: "Se pincha con una rueca y duerme cien años… o hasta que la despiertan.", similares: ["Cenicienta", "Rapunzel", "Blancanieves"] },
      { n: "Ariel", img: "ariel.png", pista: "Es una sirena pelirroja que colecciona cosas de los humanos." },
      { n: "Bella", img: "bella.png", pista: "Le encantan los libros y se enamora de una bestia encantada." },
      { n: "Jasmín", img: "jasmin.png", pista: "Princesa de Agrabah con un tigre como mascota." },
      { n: "Pocahontas", img: "pocahontas.png", pista: "Habla con el viento, con un mapache y con un colibrí." },
      { n: "Mulán", img: "mulan.png", pista: "Se disfraza de soldado para ocupar el lugar de su padre en el ejército." },
      { n: "Tiana", img: "tiana.png", pista: "Sueña con abrir su propio restaurante en Nueva Orleans y besa a una rana." },
      { n: "Rapunzel", img: "rapunzel.png", pista: "Tiene una melena larguísima y vive encerrada en una torre.", similares: ["Aurora", "Cenicienta", "Elsa"] },
      { n: "Mérida", img: "merida.png", pista: "Princesa escocesa pelirroja, experta con el arco.", similares: ["Ariel", "Anna", "Rapunzel"] },
      { n: "Vaiana", img: "vaiana.png", pista: "Navega por el océano para devolver el corazón de Te Fiti." },
      { n: "Raya", img: "raya.png", pista: "Busca al último dragón para salvar su reino, Kumandra." },
      { n: "Elsa", img: "elsa.png", pista: "Reina de Arendelle con poderes de hielo.", similares: ["Anna", "Aurora", "Cenicienta"] },
      { n: "Anna", img: "anna.png", pista: "Princesa de Arendelle, hermana pequeña de la reina del hielo.", similares: ["Elsa", "Mérida", "Rapunzel"] },
      { n: "Mirabel", img: "mirabel.png", pista: "La única de su familia sin un don mágico; lleva gafas verdes." },
      { n: "Asha", img: "asha.png", pista: "Pide un deseo a una estrella en el reino de Rosas." },
      { n: "Esmeralda", img: "esmeralda.png", pista: "Baila en las calles de París junto a Notre Dame con su cabra Djali." },
      { n: "Megara", img: "megara.png", pista: "Chica sarcástica que acaba enamorada de un semidiós griego." },
      { n: "Campanilla", img: "campanilla.png", pista: "Un hada pequeñita que deja polvo brillante al volar." }
    ]
  },
  {
    id: "cantantes", nombre: "Cantantes españoles actuales", emoji: "🎤", carpeta: "img/cantantes/", efecto: "pixelado",
    items: [
      { n: "Aitana", img: "aitana.jpg", pista: "Salió de Operación Triunfo 2017; «Lo malo», «Vas a quedarte».", similares: ["Amaia", "Lola Índigo", "Ana Mena"] },
      { n: "Rosalía", img: "rosalia.jpg", pista: "Catalana; «Malamente», «Motomami»." },
      { n: "Quevedo", img: "quevedo.jpg", pista: "Canario; su sesión con Bizarrap («Quédate») dio la vuelta al mundo.", similares: ["Saiko", "Rels B", "Omar Montes"] },
      { n: "Lola Índigo", img: "lola-indigo.jpg", pista: "Bailarina y cantante salida de OT 2017; «Ya no quiero ná».", similares: ["Aitana", "Ana Mena", "Chanel"] },
      { n: "Ana Mena", img: "ana-mena.jpg", pista: "Malagueña; «A un paso de la luna», «Madrid City».", similares: ["Aitana", "Lola Índigo", "Edurne"] },
      { n: "Dani Martín", img: "dani-martin.jpg", pista: "Fue el cantante de El Canto del Loco.", similares: ["Leiva", "Melendi", "Pablo López"] },
      { n: "Pablo Alborán", img: "pablo-alboran.jpg", pista: "Malagueño; «Solamente tú», «Saturno».", similares: ["Pablo López", "Manuel Carrasco", "Beret"] },
      { n: "Alejandro Sanz", img: "alejandro-sanz.jpg", pista: "«Corazón partío», «Amiga mía»." },
      { n: "David Bisbal", img: "david-bisbal.jpg", pista: "Almeriense de la primera Operación Triunfo; «Bulería», «Ave María».", similares: ["Manuel Carrasco", "Pablo Alborán", "Abraham Mateo"] },
      { n: "Leiva", img: "leiva.jpg", pista: "Antes formaba el dúo Pereza; siempre con sombrero.", similares: ["Dani Martín", "Melendi", "C. Tangana"] },
      { n: "Vanesa Martín", img: "vanesa-martin.jpg", pista: "Cantautora malagueña; «Complicidad», «Polvo de mariposas».", similares: ["Malú", "Rozalén", "India Martínez"] },
      { n: "Malú", img: "malu.jpg", pista: "Sobrina de Paco de Lucía; «Aprendiz», «Blanco y negro».", similares: ["Vanesa Martín", "India Martínez", "Edurne"] },
      { n: "Rozalén", img: "rozalen.jpg", pista: "De Albacete; «La puerta violeta», «Girasoles».", similares: ["Vanesa Martín", "Amaia", "Malú"] },
      { n: "Rels B", img: "rels-b.jpg", pista: "Mallorquín; «A mí», «Cómo dormiste?».", similares: ["Quevedo", "Saiko", "C. Tangana"] },
      { n: "Bad Gyal", img: "bad-gyal.jpg", pista: "Catalana; «Fiebre», «Chulo».", similares: ["Rosalía", "Lola Índigo", "Ana Mena"] },
      { n: "Omar Montes", img: "omar-montes.jpg", pista: "De Pan Bendito (Madrid); «Alocao», «Solo».", similares: ["Quevedo", "Rels B", "Abraham Mateo"] },
      { n: "C. Tangana", img: "c-tangana.jpg", pista: "Madrileño; «Tú me dejaste de querer», disco «El madrileño».", similares: ["Leiva", "Rels B", "Dani Martín"] },
      { n: "Beret", img: "beret.jpg", pista: "Sevillano; «Lo siento», «Ojalá».", similares: ["Nil Moliner", "Álvaro de Luna", "Pablo Alborán"] },
      { n: "Melendi", img: "melendi.jpg", pista: "Asturiano; «Caminando por la vida», «Lágrimas desordenadas».", similares: ["Dani Martín", "Leiva", "Manuel Carrasco"] },
      { n: "Amaia", img: "amaia.jpg", pista: "Ganadora de OT 2017, de Pamplona.", similares: ["Aitana", "Rozalén", "Lola Índigo"] },
      { n: "Abraham Mateo", img: "abraham-mateo.jpg", pista: "Gaditano; «Señorita», «Loco enamorado».", similares: ["Omar Montes", "David Bisbal", "Álvaro Soler"] },
      { n: "Chanel", img: "chanel.jpg", pista: "Representó a España en Eurovisión 2022 con «SloMo».", similares: ["Lola Índigo", "Edurne", "Ana Mena"] },
      { n: "Manuel Carrasco", img: "manuel-carrasco.jpg", pista: "De Isla Cristina (Huelva); «Qué bonito es querer», «Uno x uno».", similares: ["David Bisbal", "Pablo Alborán", "Melendi"] },
      { n: "Pablo López", img: "pablo-lopez.jpg", pista: "Malagueño al piano, coach de La Voz; «El patio», «Lo saben mis zapatos».", similares: ["Pablo Alborán", "Dani Martín", "Beret"] },
      { n: "Álvaro Soler", img: "alvaro-soler.jpg", pista: "Catalán criado en parte en Japón; «Sofía», «El mismo sol».", similares: ["Abraham Mateo", "Nil Moliner", "Álvaro de Luna"] },
      { n: "Edurne", img: "edurne.jpg", pista: "Salió de OT 2005 y fue a Eurovisión 2015; jurado de Got Talent.", similares: ["Chanel", "Malú", "Ana Mena"] },
      { n: "India Martínez", img: "india-martinez.jpg", pista: "Cordobesa; «90 minutos», «Vencer al amor».", similares: ["Vanesa Martín", "Malú", "Rozalén"] },
      { n: "Saiko", img: "saiko.jpg", pista: "Granadino; «Supernova», «Polaris».", similares: ["Quevedo", "Rels B", "Omar Montes"] },
      { n: "Nil Moliner", img: "nil-moliner.jpg", pista: "Catalán; «Mi religión», «Libertad».", similares: ["Beret", "Álvaro Soler", "Álvaro de Luna"] },
      { n: "Álvaro de Luna", img: "alvaro-de-luna.jpg", pista: "Sevillano; «Juramento eterno de sal», «Todo contigo».", similares: ["Beret", "Nil Moliner", "Manuel Carrasco"] }
    ]
  },
  {
    id: "dibujos", nombre: "Dibujos animados", emoji: "📺", carpeta: "img/dibujos/", efecto: "silueta",
    items: [
      { n: "Bob Esponja", img: "bob-esponja.png", pista: "Vive en una piña debajo del mar y trabaja en el Crustáceo Crujiente.", similares: ["Patricio Estrella", "Pikachu", "Pocoyó"] },
      { n: "Patricio Estrella", img: "patricio.png", pista: "Estrella de mar rosa, el mejor amigo de una esponja.", similares: ["Bob Esponja", "Pingu", "Nemo"] },
      { n: "Pikachu", img: "pikachu.png", pista: "Pokémon amarillo que lanza rayos y tiene las mejillas rojas.", similares: ["Piolín", "Bob Esponja", "Minion"] },
      { n: "Doraemon", img: "doraemon.png", pista: "Gato cósmico azul con un bolsillo mágico, amigo de Nobita.", similares: ["Shin Chan", "Pingu", "Stitch"] },
      { n: "Shin Chan", img: "shin-chan.png", pista: "Niño japonés de cinco años muy travieso, de Kasukabe.", similares: ["Doraemon", "Bart Simpson", "Caillou"] },
      { n: "Bart Simpson", img: "bart-simpson.png", pista: "Niño amarillo de pelo en punta que va en monopatín; «¡Multiplícate por cero!».", similares: ["Homer Simpson", "Shin Chan", "Caillou"] },
      { n: "Homer Simpson", img: "homer-simpson.png", pista: "Trabaja en la central nuclear de Springfield y le encantan los donuts.", similares: ["Bart Simpson", "Gru", "Shrek"] },
      { n: "Mickey Mouse", img: "mickey.png", pista: "El ratón más famoso del mundo, con orejas redondas y pantalón rojo.", similares: ["Minnie Mouse", "Jerry", "Pato Donald"] },
      { n: "Minnie Mouse", img: "minnie.png", pista: "Ratona con lazo y vestido de lunares.", similares: ["Mickey Mouse", "Hello Kitty", "Peppa Pig"] },
      { n: "Pato Donald", img: "donald.png", pista: "Pato con traje de marinero y muy mal genio.", similares: ["Goofy", "Mickey Mouse", "Piolín"] },
      { n: "Goofy", img: "goofy.png", pista: "Perro alto y torpe con sombrero verde y chaleco; amigo de un ratón famoso.", similares: ["Pluto", "Pato Donald", "Scooby-Doo"] },
      { n: "Pluto", img: "pluto.png", pista: "Perro amarillo con collar verde; la mascota del ratón más famoso.", similares: ["Goofy", "Scooby-Doo", "Snoopy"] },
      { n: "Bugs Bunny", img: "bugs-bunny.png", pista: "Conejo gris que come zanahorias; «¿Qué hay de nuevo, viejo?».", similares: ["Piolín", "Jerry", "Pato Lucas"] },
      { n: "Piolín", img: "piolin.png", pista: "Canario amarillo perseguido por un gato; «Me pareció ver un lindo gatito».", similares: ["Pikachu", "Bugs Bunny", "Pato Donald"] },
      { n: "Pato Lucas", img: "pato-lucas.png", pista: "Pato negro con el pico naranja, rival de cierto conejo.", similares: ["Pato Donald", "Bugs Bunny", "Piolín"] },
      { n: "Scooby-Doo", img: "scooby-doo.png", pista: "Gran danés miedoso que resuelve misterios con Shaggy.", similares: ["Pluto", "Goofy", "Snoopy"] },
      { n: "Peppa Pig", img: "peppa-pig.png", pista: "Cerdita rosa que adora saltar en los charcos de barro.", similares: ["Pocoyó", "Hello Kitty", "Bluey"] },
      { n: "Pocoyó", img: "pocoyo.png", pista: "Niño vestido de azul que juega con Pato, Elly y Loula.", similares: ["Peppa Pig", "Caillou", "Bluey"] },
      { n: "Hello Kitty", img: "hello-kitty.png", pista: "Gatita blanca con un lazo rojo en la oreja.", similares: ["Minnie Mouse", "Peppa Pig", "Doraemon"] },
      { n: "Dora la Exploradora", img: "dora.png", pista: "Niña exploradora con mochila parlante y un mono llamado Botas.", similares: ["Caillou", "Heidi", "Pocoyó"] },
      { n: "Garfield", img: "garfield.png", pista: "Gato naranja, perezoso, que odia los lunes y adora la lasaña.", similares: ["Tom", "Hello Kitty", "Pantera Rosa"] },
      { n: "Snoopy", img: "snoopy.png", pista: "Perro blanco que duerme encima de su caseta; su dueño es Charlie Brown.", similares: ["Pluto", "Scooby-Doo", "Goofy"] },
      { n: "Pantera Rosa", img: "pantera-rosa.png", pista: "Felino rosa, elegante y silencioso, con una música muy famosa.", similares: ["Garfield", "Tom", "Patricio Estrella"] },
      { n: "Tom", img: "tom.png", pista: "Gato gris azulado que persigue sin éxito a un ratón.", similares: ["Jerry", "Garfield", "Pantera Rosa"] },
      { n: "Jerry", img: "jerry.png", pista: "Ratón marrón muy listo que siempre se escapa del gato.", similares: ["Tom", "Mickey Mouse", "Minnie Mouse"] },
      { n: "Pingu", img: "pingu.png", pista: "Pingüino de plastilina que vive en el Polo Sur; «¡Noot noot!».", similares: ["Patricio Estrella", "Doraemon", "Pocoyó"] },
      { n: "Heidi", img: "heidi.png", pista: "Niña que vive en los Alpes con su abuelo y su amigo Pedro.", similares: ["Dora la Exploradora", "Caillou", "Pocoyó"] },
      { n: "Goku", img: "goku.png", pista: "Guerrero saiyan de pelo en punta que busca las bolas de dragón.", similares: ["Naruto", "Shin Chan", "Bart Simpson"] },
      { n: "Naruto", img: "naruto.png", pista: "Ninja rubio de la aldea de la Hoja que quiere ser Hokage.", similares: ["Goku", "Shin Chan", "Pikachu"] },
      { n: "Bluey", img: "bluey.png", pista: "Perrita azul australiana que juega con su hermana Bingo.", similares: ["Peppa Pig", "Pocoyó", "Snoopy"] },
      { n: "Caillou", img: "caillou.png", pista: "Niño calvo de cuatro años con camiseta amarilla.", similares: ["Pocoyó", "Shin Chan", "Bart Simpson"] },
      { n: "Shrek", img: "shrek.png", pista: "Ogro verde que vive en una ciénaga con un burro parlanchín.", similares: ["Gru", "Mike Wazowski", "Sulley"] },
      { n: "Buzz Lightyear", img: "buzz.png", pista: "Juguete astronauta; «¡Hasta el infinito y más allá!».", similares: ["Woody", "Gru", "Stitch"] },
      { n: "Woody", img: "woody.png", pista: "Vaquero de juguete con una serpiente en la bota.", similares: ["Buzz Lightyear", "Shrek", "Gru"] },
      { n: "Nemo", img: "nemo.png", pista: "Pez payaso con una aleta pequeñita al que busca su padre.", similares: ["Patricio Estrella", "Bob Esponja", "Pingu"] },
      { n: "Mike Wazowski", img: "mike.png", pista: "Monstruo verde, redondo y con un solo ojo.", similares: ["Sulley", "Shrek", "Minion"] },
      { n: "Sulley", img: "sulley.png", pista: "Monstruo grande, peludo, azul con manchas moradas.", similares: ["Mike Wazowski", "Stitch", "Shrek"] },
      { n: "Gru", img: "gru.png", pista: "Villano calvo con bufanda y nariz larga, jefe de unos ayudantes amarillos.", similares: ["Minion", "Homer Simpson", "Shrek"] },
      { n: "Minion", img: "minion.png", pista: "Pequeño ayudante amarillo con mono vaquero y gafas; adora los plátanos.", similares: ["Gru", "Pikachu", "Bob Esponja"] },
      { n: "Stitch", img: "stitch.png", pista: "Experimento alienígena azul con orejas grandes, amigo de Lilo.", similares: ["Sulley", "Doraemon", "Mike Wazowski"] },
      { n: "Winnie the Pooh", img: "winnie.png", pista: "Osito amarillo con camiseta roja que adora la miel.", similares: ["Garfield", "Piolín", "Pikachu"] },
      { n: "Olaf", img: "olaf.png", pista: "Muñeco de nieve que sueña con el verano y adora los abrazos.", similares: ["Pingu", "Stitch", "Minion"] }
    ]
  }
];
