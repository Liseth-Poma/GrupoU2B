# Sistema de Registro de Uso de Laboratorios

## API RESTful + Aplicación Web (Serverless + DynamoDB)

---

## 1. Introducción

Este proyecto consiste en el desarrollo de un sistema de registro para el uso de laboratorios, utilizando una API RESTful construida con el framework Serverless de AWS y una base de datos NoSQL DynamoDB. La aplicación web asociada permite gestionar el uso de los laboratorios por parte de docentes, estudiantes y encargados, con una arquitectura limpia que facilita el mantenimiento y la escalabilidad del sistema.

### Objetivo General

Aplicar los conocimientos adquiridos para desarrollar y consumir una API RESTful desde una aplicación web frontend, permitiendo gestionar eficientemente los recursos de los laboratorios.

---

## 2. Tecnologías Utilizadas

### Backend
- **AWS Lambda** (funciones sin servidor)
- **Serverless Framework** (despliegue y configuración de servicios)
- **Node.js** (JavaScript para lógica del backend)
- **DynamoDB** (base de datos NoSQL)
- **AWS SDK** (interacción con servicios de AWS)

### Frontend
- _(Incluir aquí las tecnologías frontend utilizadas: React, Angular, etc.)_

---

## 3. Estructura del Proyecto

```

/proyecto
├── backend/                # API Serverless
│   ├── serverless.yml      # Configuración del proyecto Serverless
│   └── package.json        # Dependencias y scripts del backend
│
├── frontend/               # Aplicación Web
│   ├── src/
│   │   ├── components/     # Componentes reutilizables
│   │   └── App.js          # Archivo principal del frontend
│   └── package.json        # Dependencias y scripts del frontend
│
├── .env                    # Variables de entorno (si es necesario)
└── README.md               # Documentación del proyecto

````

---

## 4. Actividades Realizadas

### Actividad 1: Configuración del Entorno Backend

- Instalación de Node.js, Serverless Framework y configuración de credenciales de AWS  
  ![Instalación Node y Serverless](https://i.imgur.com/LVakcUN.png)

- Creación del proyecto con `serverless create`
  
  ![Dependencias](https://imgur.com/sDwBJym.png)


- Instalación de dependencias necesarias (`aws-sdk`, `joi`, entre otros)
  ![Creación de proyecto](https://imgur.com/Vpk7yYD.png)

---

### Actividad 2: Diseño de la Base de Datos en DynamoDB

Se utilizó el patrón **Single Table Design**, modelando todas las entidades necesarias en una sola tabla (`UsoLabsTable`).

![Modelo DynamoDB](https://imgur.com/yBdzsaV.png)

---
### Actividad 3: Implementación de la API RESTful

#### Endpoints Disponibles

##### Laboratorios
- `GET /laboratorios`

<img src="https://imgur.com/ppwmeCR.png" width="250" height="250"/>

- `POST /laboratorios`

<img src="https://imgur.com/sFHffWr.png" width="250" height="200"/>

- `GET /laboratorios/{id}`

<img src="https://imgur.com/gxNEriH.png" width="200" height="250"/>

- `PUT /laboratorios/{id}`

<img src="https://imgur.com/VO4CXkL.png" width="250" height="200"/>

- `DELETE /laboratorios/{id}`

<img src="https://imgur.com/GZIqLKD.png" width="250" height="150"/>

##### Asignaturas
- `GET /asignaturas`

<img src="https://imgur.com/W2YIK12.png" width="250" height="250"/>

- `POST /asignaturas`

<img src="https://imgur.com/Dv8uhni.png" width="250" height="250"/>

- `GET /asignaturas/{id}`

<img src="https://imgur.com/p9q4lyB.png" width="250" height="250"/>

- `PUT /asignaturas/{id}`

<img src="https://imgur.com/dqArnJD.png" width="250" height="250"/>

- `DELETE /asignaturas/{id}`

<img src="https://imgur.com/t6iKWjB.png" width="250" height="150"/>

##### Parciales
- `GET /parciales`

<img src="https://imgur.com/qwHSK4i.png" width="200" height="250"/>

- `POST /parciales`

<img src="https://imgur.com/T8xO88d.png" width="200" height="250"/>

- `GET /parciales/{id}`

<img src="https://imgur.com/bb3JPsp.png" width="250" height="250"/>

- `PUT /parciales/{id}`

<img src="https://imgur.com/oRs2TuY.png" width="250" height="250"/>

- `DELETE /parciales/{id}`

<img src="https://imgur.com/IrP8wUo.png" width="250" height="150"/>

##### Prácticas
- `GET /practicas`

<img src="https://imgur.com/GDPtoX4.png" width="250" height="250"/>

- `POST /practicas`

<img src="https://imgur.com/clVVMzy.png" width="250" height="250"/>

- `GET /practicas/{id}`

<img src="https://imgur.com/eDsk7JK.png" width="200" height="250"/>

- `PUT /practicas/{id}`

<img src="https://imgur.com/1xIVyaJ.png" width="250" height="250"/>

- `DELETE /practicas/{id}`

<img src="https://imgur.com/Brpna1L.png" width="250" height="150"/>

##### Uso de Equipos
- `GET /uso-equipos`

<img src="https://github.com/user-attachments/assets/46437ecc-7172-49ef-8686-a5a66360e97b" width="250" height="250"/>

- `POST /uso-equipos`

<img src="https://imgur.com/ixKnKVZ.png" width="250" height="250"/>

- `GET /uso-equipos/{id}`

<img src="https://imgur.com/uwPLgUm.png" width="250" height="250"/>

- `PUT /uso-equipos/{id}`

<img src="https://imgur.com/huZNqE8.png" width="250" height="250"/>

- `DELETE /uso-equipos/{id}`

<img src="https://imgur.com/XbRKfie.png" width="250" height="150"/>

##### Usuarios
- `GET /usuarios`

<img src="https://imgur.com/Yz57Xp8.png" width="250" height="250"/>

- `POST /usuarios`

<img src="https://imgur.com/CyUI8Tl.png" wwidth="250" height="250"/>

- `GET /usuarios/{id}`

<img src="https://imgur.com/Y6UsNs0.png" width="250" height="250"/>

- `PUT /usuarios/{id}`

<img src="https://imgur.com/6iD2AdD.png" width="250" height="250"/>

- `DELETE /usuarios/{id}`

<img src="https://imgur.com/x2VJ3nD.png" width="250" height="150"/>


#### Fragmento serverless.yml:

```yaml
org: ufaespe
service: backend

plugins:
  - serverless-offline

provider:
  name: aws
  runtime: nodejs20.x
  region: us-east-1
  environment:
    DYNAMO_TABLE: UsoLabsTable
  httpApi:
    cors:
      allowedOrigins:
        - '*'
      allowedMethods:
        - GET
        - POST
  iamRoleStatements:
    - Effect: Allow
      Action:
        - dynamodb:*
      Resource:
        - arn:aws:dynamodb:us-east-1:599841538632:table/UsoLabsTable
````

> Nota: La definición completa de funciones está incluida en el archivo `serverless.yml` bajo el directorio `backend/`.

#### Recurso DynamoDB

```yaml
resources:
  Resources:
    UsoLabsTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: UsoLabsTable
        AttributeDefinitions:
          - AttributeName: PK
            AttributeType: S
          - AttributeName: SK
            AttributeType: S
        KeySchema:
          - AttributeName: PK
            KeyType: HASH
          - AttributeName: SK
            KeyType: RANGE
        BillingMode: PAY_PER_REQUEST
```

---

### Actividad 4: Arquitectura Limpia del Backend

Se siguió una arquitectura limpia separando el código en las siguientes capas:

* **Presentación:** API Gateway → Lambda
* **Lógica de negocio:** Handlers y servicios
* **Acceso a datos:** Consultas a DynamoDB

Esto permite escalar fácilmente el proyecto y mantenerlo organizado.

---

### Actividad 5: Desarrollo del Frontend

La aplicación web frontend permite el acceso a distintas funcionalidades según el tipo de usuario:

* **Docente:** Ver asignaturas, ver parciales, crear prácticas.
* **Estudiante:** *(...)*
* **Encargado:** *(...)*

---

## 5. Conclusiones

Este proyecto permitió aplicar conocimientos prácticos sobre arquitectura limpia, desarrollo de APIs RESTful con Serverless Framework, uso de bases de datos NoSQL con DynamoDB y desarrollo de interfaces web modernas. Se logró construir un sistema funcional que facilita el control y monitoreo del uso de laboratorios por parte de distintos roles.

## 6. Referencias
- [Serverless Framework Documentation](https://www.serverless.com/framework/docs)
- [AWS DynamoDB Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)
- [Node.js Documentation](https://nodejs.org/en/docs)


