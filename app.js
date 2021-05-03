/*                  GIT / GITHUB
git init: Para iniciar un nuevo repositorio

                AÑADIR UN ARCHIVO A TEMPORAL
git add<file>: para incluir los archivos a git. Ejemplo: git add index.html
    A: significa que ha sido añadido a el área temporal
    M: el archivo ha sido modificado
    U: aún no está subido al repositorio
git add . : para añadir toda la carpeta al repositorio

git status-s: muestra los archivos con los que estamos trabajando
                AÑADIR UN PUNTO EN EL REGISTRO
git commit: para crear un punto de control de nuestro código
    -m "mensaje": para añadir un mensaje
    Ejemplo git commit -m "Repositorio de ejemplo"

git log: para ver todos los commits que hemos creado
    --oneline: para mostrar los identificadores

git reset --hard (identificador): para devolver la versión a la que indiquemos. Para volver a la versión donde nos encontramos antes, solamente colocamos su identificador y volvemos a la versión previa al salto

git revert "n° de commit": para deshacer nuestros commits

                  SUBIR EL REPOSITORIO DE GITHUB
git remote add origin (direccion del repositorio de github): con esto indicamos a git que ya estamos trabajando de manera remota usando como identificador el url
    Ejemplo:
        git remote add origin https://github.com/Lino-C-Alex/primer-repositorio.git

git branch -M main:
git push -u origin main: sube los archivos al repositorio de github

Para volver a subir los archivos modificados luego de hacerlo la primera vez, tan solo debemos subir los archivos al memoria temporal (git add .), luego añadirlo al registro (git commit -m "identificador"), por último subirlo a github con (git push)

                TRAER UN REPOSITORIO DE GITHUB A LOCAL
git pull: Para traer cosas desde github a nuestros archivos locales

        CREAR VERSIONES DESCARGABLE DEL REPOSITORIO

git tag "nombre" -m "descripcion": para añadir una nueva versión
git tag: para ver el listado de tags
git -d tag "nombre tag": para eliminar una versión
git tag -a "nombre" "n° commit" -m "descripción": para hacer un tag en un commit anterior
git push --tags: para subir versiones de nuestro proyecto a github

                RAMAS O BRANCH
Son líneas de tiempo paralelas que luego podemos juntar, hasta ahora hemos usado el master, pero si trabajamos con más personas deberán crear su rama, para poder hacer sus propias modificaciones

git branch "nombre": para crear una nueva rama
git checkout "nombre": para hacer uso/movernos a esa rama
git branch: para ver el listado de ramas y la rama actual que usemos


*/

