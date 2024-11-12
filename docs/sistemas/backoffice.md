---
sidebar_position: 12
---

# Backoffice

Se puede utilizar cualquier consola o Shell para ejecutar el siguiente comando con la URL del repo correspondiente:

### Clonar proyecto

```bash
git clone ssh://git-codecommit.us-east-1.amazonaws.com/v1/repos/dotpanel
```

Una vez clonado el proyecto, se debe ejecutar el siguiente comando, para instalar todas las dependencias del proyecto:

```bash
composer install
```

### Base de datos

Para este proyecto se utiliza la misma base de datos y esquema del proyecto `Pam` por lo tanto no es necesario correr migraciones.

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

Se debe tener en cuenta también, el sistema operativo con el que se esté trabajando, en el caso de que sea Linux se deben asignar los permisos correspondientes a las carpetas `storage` y `bootstrap/cache` ejecutando los siguientes comandos:

```bash
sudo chmod -R 775 storage
sudo chmod -R 775 bootstrap/cache
```

:::tip[Nota]
En caso que se observe un error de permisos sustituir el permiso `775` por `777`.
:::

### Generar estilos y JavaScripts

En el proyecto se utiliza Laravel Mix, por ello se deben instalar todas las dependencias del proyecto, ejecutando alguno de estos comandos:

```bash
npm install
```

Una vez se instalen todas las dependencias se deben ejecutar los siguientes comandos:

```bash
npm run assets-dev
npm run auth-dev
npm run back-dev
npm run custom-styles-dev
npm run scripts-dev
npm run vendor-styles-dev
```

Si se desea ejecutar todos los comandos a la vez se puede ejecutar el siguiente comando:

```bash
npm run all-dev
```

Es importante acotar que, si los comandos generan error al ejecutarse, se deben volver a correr.

### Correr el proyecto

El siguiente paso es correr el proyecto, para que el proyecto pueda funcionar.

Si posees `Laragon` (Windows) basta con tener marcada la opción de configuración “`Crear automáticamente hosts virtuales`” para que se cree el virtual host automáticamente. Si posees `Herd` (MacOS y Windows) también se crearán los host de manera automática. De lo contrario deben crearse manualmente.