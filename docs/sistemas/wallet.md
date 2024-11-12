---
sidebar_position: 10
---

# Wallet

Wallet es el proyecto encargado de manejar todo el flujo transaccional del usuario así como sus respectivos balances en cada una de las monedas que este disponga para su uso.

### Clonar proyecto

Se puede utilizar cualquier consola o Shell para ejecutar el siguiente comando con la URL del repo correspondiente:

```bash
git clone ssh://git-codecommit.us-east-1.amazonaws.com/v1/repos/wallet
```

Una vez clonado el proyecto, se debe ejecutar el siguiente comando, para instalar todas las dependencias del proyecto:

```bash
composer install
```

Luego se deben generar las llaves de encriptación para Laravel Passport debido a que todas las comunicaciones realizadas con la API se hacen a través de Passport, para ello se ejecuta el siguiente comando:

```bash
php artisan passport:keys
```

### Configuración

El siguiente paso es copiar el contenido del archivo `.env.example` y pegarlo en el archivo `.env`, en caso de que el archivo `.env` no exista se debe crear manualmente en el root del proyecto o crearlo ejecutando el comando:

```bash
php -r "file_exists('.env') || copy('.env.example', '.env');"
```

Ejecutar el comando para generar el `APP_KEY`:

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

### Correr el proyecto

Luego de configurar lo relacionado con la base de datos, se debe correr el proyecto para que el proyecto pueda funcionar.

Si posees `Laragon` (Windows) basta con tener marcada la opción de configuración “`Crear automáticamente hosts virtuales`” para que se cree el virtual host automáticamente. Si posees `Herd` (MacOS y Windows) también se crearán los host de manera automática. De lo contrario deben crearse manualmente.