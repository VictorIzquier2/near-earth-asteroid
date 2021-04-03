# Mcfly Node

<img src="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/ca_0703NID_Vulcanoid_Asteroid_Sun_online.jpg?itok=Vm582diM" alt="asteroids" width="640"/>


##### Instrucciones

Para ejecutarse el proyecto hay que acceder al repositorio y descargarlo en local.

1. Acceder a la repo de Back https://github.com/VictorIzquier2/near-earth-asteroid/blob/master/app.js

 - Ir a Code y copiar el enlace HTTPS
 - Ve al panel de tu terminal, donde quieras bajar el proyecto
 - Escribe $ git clone https://github.com/VictorIzquier2/near-earth-asteroid/blob/master/app.js

2. Pon en marcha el backend en el servidor local 3900
- Ejecutar el comando $ sudo service mongodb start
- Entra en el archivo near-earth-asteroid y ejecuta $ npm start

3. Prueba las rutas en Postman.co

- get Test: http://localhost:3900/api/test
- post SAVE: http://localhost:3900/api/asteroids/save
   **Body** x-www-form-urlencoded
   - full_name: STRING
   - a: NUMBER
   - e: NUMBER
   - i: NUMBER
   - om: NUMBER
   - w: NUMBER
   - ma: NUMBER
- get Save Asteroids from CSV http://localhost:3900/api/asteroids/save-asteroids-from-csv
- get asteroids: http://localhost:3900/api/asteroids
- get asteroid http://localhost:3900/api/asteroid/ ((+id))
- put UPDATE http://localhost:3900/api/asteroid/ ((+id))
 **Body** x-www-form-urlencoded
   - full_name: STRING
   - a: NUMBER
   - e: NUMBER
   - i: NUMBER
   - om: NUMBER
   - w: NUMBER
   - ma: NUMBER
- delete asteroid http://localhost:3900/api/asteroid/ ((+id))
- get SEARCH http://localhost:3900/api/asteroids/search/ ((+search))

post SignUp: http://localhost:3900/signup
   **Body** x-www-form-urlencoded
   - username: STRING
   - email: STRING
   - password: STRING
post LogIn: http://localhost:3900/login
   **Body** x-www-form-urlencoded
   - email: STRING
   - password: STRING
- get Users http://localhost:3900/users
- get User: http://localhost:3900/users/ ((+id))
- put UPDATE User http://localhost:3900/users/ ((+id))
 **Body** x-www-form-urlencoded
   - username: STRING
   - email: STRING
   - password: STRING
- delete User http://localhost:3900/users/ ((+id))
- get SEARCH user http://localhost:3900/users/search/ ((+search))

-get findAll http://localhost:3900/methods/findall

Gracias por interesarse en mis proyectos y darme la oportunidad de participar. 
Sigueme en GitHub https://github.com/VictorIzquier2 y en LinkedIn https://www.linkedin.com/in/victor-izquierdo/
