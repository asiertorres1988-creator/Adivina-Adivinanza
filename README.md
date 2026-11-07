# 👑 Adivina adivinanza… ¿qué muñeco piensa Triana?

Juego para jugar en familia con la TV y los móviles, hermano del Bingo Musical y del Bingo de los Torres Peralvo. La **TV** enseña la **silueta** de un personaje y **cuatro nombres**; cada jugador escanea un **QR**, escribe su nombre y responde desde su móvil. Cuando todos han contestado (o se acaba el tiempo), la TV **desvela** el personaje, dice quién ha acertado y actualiza el marcador. Al final, podio.

Es una web estática (`index.html` + `packs.js` + carpeta `img/`). No necesita servidor propio, base de datos ni cuentas.

## Packs incluidos

| Pack | Personajes | Efecto por defecto |
|---|---|---|
| 👑 Princesas Disney | 20 | Silueta |
| 🎤 Cantantes españoles actuales | 30 | Pixelado |
| 📺 Dibujos animados | 42 | Silueta |

Las listas (nombres, pistas y opciones «parecidas» para despistar) están en `packs.js`.

## ⚠️ Las imágenes las pones tú

El repositorio **no incluye las imágenes** de los personajes. Cada pack tiene su carpeta (`img/princesas/`, `img/cantantes/`, `img/dibujos/`) y en `packs.js` está el nombre exacto de fichero que espera cada personaje (por ejemplo `img/princesas/elsa.png` o `img/cantantes/aitana.jpg`).

- Para el efecto **silueta** usa **PNG con fondo transparente** (el personaje recortado): la app lo pinta en negro y al desvelar lo enseña en color. Si usas un JPG o un PNG sin transparencia, la silueta será un rectángulo negro; en ese caso elige **Pixelado** o **Desenfoque** en las opciones de la TV.
- Para **fotos** (cantantes) vale cualquier JPG/PNG; con **pixelado** se ve en mosaico y con **desenfoque**, borrosa.
- Si falta la imagen de un personaje, la ronda se juega igual: la TV enseña un «?» y la **pista** en texto.
- Tamaño recomendado: unos 600-1200 px de alto. Cuantas más imágenes tenga un pack, mejor.

Para añadir personajes o packs nuevos, copia un bloque de `packs.js` y cambia nombre, fichero y pista.

## Cómo se juega

1. Abre la web en la TV (o en un portátil conectado a la TV) y pulsa **«Esta pantalla es la TV»**.
2. Cada jugador escanea el QR (o entra en la web y escribe el código de 5 letras), pone su nombre y queda a la espera.
3. En la TV elige el **pack**, el número de **rondas**, el **tiempo por pregunta** (o sin límite), cómo se **oculta** la imagen y si el más rápido en acertar se lleva **+5**.
4. Pulsa **«¡Empezar!»**. En cada ronda la TV enseña la silueta y 4 opciones; los móviles muestran los 4 botones.
5. Cuando todos los móviles conectados han respondido, se acaba el tiempo o pulsas **«Desvelar ya»**, la TV enseña la imagen en color, marca la respuesta correcta, quién ha acertado y los puntos. **«Pista»** enseña la frase de ayuda del personaje.
6. **«Siguiente»** pasa a la siguiente ronda; al terminar sale el podio y **«Otra partida»** vuelve al inicio con los mismos jugadores (puedes cambiar de pack).

Puntos: **10** por acierto y **+5** al primero en acertar (desactivable). Solo cuenta la primera respuesta de cada móvil.

Atajos en la TV: **Enter** o **→** para desvelar / pasar a la siguiente, **P** para la pista. Los jugadores pueden entrar a mitad de partida.

## Cómo funciona por dentro

- La TV hace de «servidor» de la partida. Los móviles se conectan directamente a ella mediante [PeerJS](https://peerjs.com/) (WebRTC), que usa el servidor público gratuito de PeerJS solo para encontrarse.
- El QR lleva a `?sala=CÓDIGO`; cada sala tiene un código de 5 letras.
- La TV guarda la partida en el navegador (`localStorage`): si se recarga, recupera la sala, los jugadores, la ronda y el marcador. Si un móvil se bloquea o se desconecta, al volver recupera su partida y sus puntos.

**Requisitos:** la TV y los móviles necesitan internet. Lo ideal es estar todos en la misma wifi de casa. Algunas redes muy restrictivas pueden bloquear WebRTC.

## Publicarlo con GitHub Pages

1. Sube `index.html`, `packs.js` y la carpeta `img/` (con tus imágenes) a un repositorio público.
2. Ve a **Settings → Pages**.
3. En **Source** elige *Deploy from a branch*, rama `main` y carpeta `/ (root)`.
4. En un minuto estará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.
