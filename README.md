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
- `POST /laboratorios`
- `GET /laboratorios/{id}`
- `PUT /laboratorios/{id}`
- `DELETE /laboratorios/{id}`

##### Asignaturas
- `GET /asignaturas`
- `POST /asignaturas`
- `GET /asignaturas/{id}`
- `PUT /asignaturas/{id}`
- `DELETE /asignaturas/{id}`

##### Parciales
- `GET /parciales`
- `POST /parciales`
- `GET /parciales/{asignaturaId}/{parcialId}`
- `PUT /parciales/{asignaturaId}/{parcialId}`
- `DELETE /parciales/{asignaturaId}/{parcialId}`

##### Prácticas
- `GET /practicas`
- `POST /practicas`
- `GET /practicas/{id}`
- `PUT /practicas/{id}`
- `DELETE /practicas/{id}`

##### Uso de Equipos
- `GET /uso-equipos`
- `POST /uso-equipos`
- `GET /uso-equipos/{estudianteId}/{practicaId}`
- `PUT /uso-equipos/{estudianteId}/{practicaId}`
- `DELETE /uso-equipos/{estudianteId}/{practicaId}`

##### Usuarios
- `GET /usuarios`
- `POST /usuarios`
- `GET /usuarios/{id}`
- `PUT /usuarios/{id}`
- `DELETE /usuarios/{id}`

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

## 6. Conclusiones

Este proyecto permitió aplicar conocimientos prácticos sobre arquitectura limpia, desarrollo de APIs RESTful con Serverless Framework, uso de bases de datos NoSQL con DynamoDB y desarrollo de interfaces web modernas. Se logró construir un sistema funcional que facilita el control y monitoreo del uso de laboratorios por parte de distintos roles.

## 7. Referencias
•	Serverless Framework Documentation
•	AWS DynamoDB Documentation
•	Node.js Documentation

