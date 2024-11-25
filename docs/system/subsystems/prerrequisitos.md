---
sidebar_position: 2
---

# Prerrequisitos

El siguiente documento está diseñado para que el desarrollador pueda poner en funcionamiento los proyectos en su máquina local. Se describen procesos de inicialización, configuración de bases de datos, generación de assets, entre otros procedimientos. Es importante que se siga el orden en el que se encuentran los comandos descritos, así como el orden de instalación de cada uno de los proyectos para el correcto funcionamiento de cada uno.

### Herramientas y programas necesarios

El computador debe contar con las siguientes herramientas instaladas:

- Composer
- Git
- NodeJS, usar `nvm` o `fnm` para gestionar las versiones de node en el sistema ya que se puede necesitar versiones distintas entre proyectos. Cada uno de los sistemas cuenta con la versión de NodeJS que se debe instalar en el fichero `.nvmrc`
- PHP 8.1 como mínimo con las siguientes extensiones instaladas
  - php-cli
  - php-curl
  - php-simplexml
  - php-pgsql
  - php-pdo
  - php-pdo_pgsql
  - php-gd
  - php-exif
  - php-zip
  - php-mbstring
- PostgreSQL (versión 13 en adelante)
- Servidor apache o nginx con los siguientes módulos instalados
  - mod_rewrite
  - mod_headers

Además se debe instalar los siguientes programas:

- IDE o Editor de código
- Gestor de base de datos
- Postman v2.0.0 (opcional)

### Base de Datos

Se debe crear una base de datos, se sugiere colocarle como nombre `pam`; dentro de esa base de datos crear tres esquemas, los cuales se sugieren llamarlos `wallet`, `pam` y `payments`. Cada uno de estos esquemas se usarán para lo siguiente:

- `wallet`: Poseerá las tablas del proyecto wallet (billetera).
- `pam`: Poseerá las tablas del proyecto pam (el núcleo del sistema: usuarios, transacciones, permisos, configuraciones, etc).
- `payments`: Poseerá las tablas del proyecto payments (pasarela de pagos interna que sirve de comunicación con los proveedores de métodos de pago).
