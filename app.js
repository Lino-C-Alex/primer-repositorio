console.log("Hola mundo");

/*
git init: Para iniciar un nuevo repositorio

git status-s: muestra los archivos con los que estamos trabajando

git add<file>: para incluir los archivos a git. Ejemplo: git add index.html
    A: significa que ha sido añadido a el área temporal
    M: el archivo ha sido modificado
    U: aún no está subido al repositorio
git add . : para añadir toda la carpeta al repositorio

git commit: para crear un punto de control de nuestro código
    -m "mensaje": para añadir un mensaje

git log: para ver todos los commits que hemos creado
    --oneline: para mostrar los identificadores

git reset --hard (identificador): para devolver la versión a la que indiquemos. Para volver a la versión donde nos encontramos antes, solamente colocamos su identificador y volvemos a la versión previa al salto

git remote add origin (direccion del repositorio de github): con esto indicamos a git que ya estamos trabajando de manera remota usando como identificador el url
    Ejemplo:
        git remote add origin https://github.com/Lino-C-Alex/primer-repositorio.git

git branch -M main
git push -u origin main: sube los archivos al repositorio de github

Para volver a subir los archivos modificados luego de hacerlo la primera vez, tan solo debemos subir los archivos al memoria temporal (git add .), luego añadirlo al registro (git commit -m "identificador"), por último subirlo a github con (git push)
*/

