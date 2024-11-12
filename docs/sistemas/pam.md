---
sidebar_position: 11
---

# Pam

PAM es el proyecto que sirve como núcleo del sistema. Los usuarios interactúan con él a través de los formularios de registro, inicio de sesión, depósitos, retiros, etc. También a través de él, los usuarios pueden hacer uso de las diversas plataformas de juego ofrecidas.

### Clonar proyecto

Se puede utilizar cualquier consola o Shell para ejecutar el siguiente comando con la URL del repo correspondiente:

```bash
git clone ssh://git-codecommit.us-east-1.amazonaws.com/v1/repos/pam
```

Una vez clonado el proyecto, se debe ejecutar el siguiente comando, para instalar todas las dependencias del proyecto:

```bash
composer install
```

### Configuración

El siguiente paso es copiar el contenido del archivo `.env.example` y pegarlo en el archivo `.env`, en caso de que el archivo `.env` no exista se debe crear manualmente en el root del proyecto o crearlo ejecutando el comando:

```bash
php -r "file_exists('.env') || copy('.env.example', '.env');"
```

Ejecutar el siguiente comando para generar el `APP_KEY`:

```bash
php artisan key:generate
```

El `.env` contiene comentarios para ayudar a identificar el uso de cada propiedad.

Otro aspecto a tomar en cuenta es el sistema operativo con el que se esté trabajando, para Linux se deben asignar los permisos correspondientes a las carpetas `storage` y `bootstrap/cache` ejecutando los siguientes comandos:

```bash
sudo chmod -R 775 storage
sudo chmod -R 775 bootstrap/cache
```

:::tip[Nota]
En caso que se observe un error de permisos sustituir el permiso `775` por `777`.
:::

### Crear tablas de la base de datos

Para crear todas las tablas necesarias y llenarlas con los datos básicos se debe ejecutar el siguiente comando para correr las migraciones y correr los seeders:

```bash
php artisan migrate --seed
```

Para volver a crear la base de datos bien sea por algún error o porque se requiere una base de datos vacía nuevamente se logra con el siguiente comando:

```bash
php artisan migrate:refresh --seed
```

### Generar estilos y JavaScripts

Para el proyecto se utiliza Laravel Mix, por ello se deben instalar todas las dependencias del proyecto, ejecutando alguno de estos comandos:

```bash
npm install
```

Una vez se instalen todas las dependencias se deben ejecutar el siguiente comando:

```bash
npm run commons-dev
```

Es importante acotar que, si los comandos generan error al ejecutarse, se deben volver a correr, en caso que persista el problema intentar con sus equivalente en `yarn` para ello basta con sustituir la palabra `yarn` por `npm`.
 
Si posees `Laragon` (Windows) basta con tener marcada la opción de configuración “`Crear automáticamente hosts virtuales`” para que se cree el virtual host automáticamente. Si posees `Herd` (MacOS y Windows) también se crearán los host de manera automática. De lo contrario deben crearse manualmente.