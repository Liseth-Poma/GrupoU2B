# Sistema de Registro de Uso de Laboratorios

## API RESTful + Aplicación Web (Serverless + DynamoDB)

---

## 1. Introducción

El desarrollo de soluciones modernas y escalables para la gestión de recursos educativos es fundamental en entornos académicos donde la eficiencia y el control son clave. En este contexto, el presente trabajo tiene como propósito aplicar los conocimientos adquiridos en el diseño e implementación de arquitecturas basadas en servicios, utilizando herramientas de última generación.

El proyecto consiste en la construcción de una API RESTful robusta y una aplicación web frontend que permita gestionar eficazmente la asignación y uso de laboratorios en una institución educativa. Para lograrlo, se utilizó una arquitectura sin servidor (serverless) desplegada en AWS Lambda, con DynamoDB como base de datos NoSQL, y se apoyó en el Serverless Framework para la automatización del despliegue. La lógica de negocio fue desarrollada en Node.js, aprovechando el SDK de AWS para la interacción con los servicios en la nube.

Además, se siguió un enfoque de arquitectura limpia, estructurando el backend en capas bien definidas para mantener la separación de responsabilidades y facilitar su escalabilidad y mantenimiento. Por su parte, la interfaz web fue diseñada para adaptarse a distintos perfiles de usuario (docente, estudiante y encargado), brindando funcionalidades específicas de consulta, registro y seguimiento del uso de los laboratorios y prácticas académicas.

Este sistema no solo refleja el uso práctico de tecnologías modernas como API Gateway, funciones Lambda y diseño de base de datos optimizado con Single Table Design, sino que también representa una solución real a una problemática institucional, integrando backend y frontend en una solución cloud-nativa de alto rendimiento.

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

A lo largo del desarrollo de este proyecto, se logró implementar una arquitectura serveless utilizando AWS Lambda y DynamoDB, demostrando que es posible construir soluciones escalables, eficientes y de bajo costo sin depender de servidores tradicionales. El uso del Serverless Framework facilitó el despliegue y la gestión de los servicios en la nube, reduciendo la complejidad operativa.

La separación del código en capas presentación, lógica de negocio y acceso a datos permitió mantener una estructura clara y bien organizada. Esta arquitectura no solo facilita el mantenimiento del sistema, sino que también permite su extensión futura, por ejemplo, incorporando nuevos endpoints, funcionalidades o tipos de usuario, sin afectar el funcionamiento actual.

Se consiguió una integración fluida entre la API RESTful y la aplicación web frontend, lo que permitió brindar una experiencia de usuario funcional y adaptada a los distintos roles institucionales (docente, estudiante, encargado). Esta interacción garantiza que cada tipo de usuario pueda acceder a la información y realizar operaciones conforme a sus necesidades, mejorando así la gestión del uso de los laboratorios.

## 6. Referencias
- [Serverless Framework Documentation](https://www.serverless.com/framework/docs)
- [AWS DynamoDB Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)
- [Node.js Documentation](https://nodejs.org/en/docs)


