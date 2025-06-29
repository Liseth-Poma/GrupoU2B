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
- **Next.js:** Framework de React para construir aplicaciones web modernas.

- **React 19:** Biblioteca de JavaScript para construir interfaces de usuario basadas en componentes.

- **TypeScript:** Superset de JavaScript que añade tipado estático, mejorando la mantenibilidad del código.

- **Tailwind CSS:** Framework de diseño basado en utilidades que permite construir interfaces modernas y responsivas rápidamente.

---

## 3. Estructura del Proyecto

```

/proyecto
├── backend/                          # API Serverless
│   ├── src/
│   │   ├── handlers/                 # Funciones Lambda (capa de presentación)
│   │   │   ├── asignaturas.js
│   │   │   ├── laboratorio.js
│   │   │   ├── parciales.js
│   │   │   ├── practicas.js
│   │   │   ├── usoEquipos.js
│   │   │   └── usuarios.js
│   │   ├── models/                   # Cliente DynamoDB (capa de acceso a datos)
│   │   │   └── dynamoClient.js
│   │   ├── services/                 # Lógica de negocio
│   │   │   ├── asignaturaService.js
│   │   │   ├── laboratorioService.js
│   │   │   ├── parcialService.js
│   │   │   ├── practicaService.js
│   │   │   ├── usoEquipoService.js
│   │   │   └── usuarioService.js
│   │   ├── utils/                    # Utilidades generales
│   │   │   └── response.js
│   │   └── validations/             # Esquemas de validación
│   │       ├── asignaturaSchema.js
│   │       ├── laboratorioSchema.js
│   │       ├── parcialSchema.js
│   │       ├── practicaSchema.js
│   │       ├── usoEquipoSchema.js
│   │       └── usuarioSchema.js
│   ├── serverless.yml                # Configuración Serverless
│   └── package.json                  # Dependencias del backend
│
├── frontend/                         # Aplicación Web con Next.js
│   ├── src/
│   │   ├── app/                      # Rutas de la aplicación
│   │   │   ├── api/                  # Llamadas a la API
│   │   │   ├── dashboard/           # Interfaz para el dashboard
│   │   │   ├── login/               # Página de inicio de sesión
│   │   │   └── register/            # Página de registro
│   │   ├── components/              # Componentes reutilizables
│   │   ├── contexts/                # Contextos globales (auth, user, etc.)
│   │   ├── lib/                     # Funciones auxiliares o servicios del frontend
│   │   ├── globals.css              # Estilos globales
│   │   ├── layout.tsx               # Diseño base de la app
│   │   └── page.tsx                 # Página principal
│   └── package.json                 # Dependencias del frontend
│
├── .env                              # Variables de entorno
└── README.md                         # Documentación general del proyecto


```

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

![Instalación Node y Serverless](https://imgur.com/cdybaVU.png)

Para el desarrollo del backend se implementó una arquitectura limpia y modular, lo que permite una mayor escalabilidad, mantenimiento y separación de responsabilidades. Esta arquitectura se estructuró en las siguientes capas principales:

Capa de Presentación (handlers)
Ubicada en src/handlers/, esta capa expone las funciones Lambda que son invocadas a través de API Gateway. Cada archivo (por ejemplo, asignaturas.js, laboratorio.js) contiene los controladores que reciben las solicitudes HTTP, validan los datos y delegan el procesamiento a los servicios correspondientes.

Capa de Lógica de Negocio (services)
En src/services/ se encuentra la lógica que gestiona cada entidad del sistema. Los servicios encapsulan la lógica de aplicación como creación, actualización, eliminación y consulta de datos, evitando que esta se mezcle con la presentación o el acceso a datos. Por ejemplo, laboratorioService.js maneja toda la lógica relacionada con laboratorios.

Capa de Validaciones (validations)
La carpeta src/validations/ contiene los esquemas de validación de datos para cada entidad. Esto asegura que los datos ingresados cumplan con las reglas definidas antes de ser procesados.

Capa de Acceso a Datos (models)
En src/models/ se encuentra la configuración del cliente de DynamoDB (dynamoClient.js), el cual es utilizado por los servicios para realizar operaciones de lectura y escritura en la base de datos.

Capa de Utilidades (utils)
El archivo response.js ubicado en src/utils/ unifica las respuestas estándar de las funciones Lambda, asegurando una estructura consistente para los mensajes de éxito o error enviados al cliente.

---

## Actividad 5: Desarrollo del Frontend

### Funcionalidades del Frontend

## Opción de Registro para usuarios sin cuenta

<img src="https://imgur.com/b2LnyVR.png" width="300"/>

La aplicación web frontend permite el acceso a distintas funcionalidades según el tipo de usuario:

---

### **DOCENTE**

**Inicio de sesión Usuario Docente:**

<img src="https://imgur.com/lHQIxIX.png" width="300"/>

**Docente:** Ver asignaturas, ver parciales, crear prácticas.

<img src="https://imgur.com/oJd7OWJ.png" width="350"/>

---

### **ESTUDIANTE**

**Inicio de sesión Usuario Estudiante:**

<img src="https://imgur.com/v7y1jBT.png" width="300"/>

**Estudiante:** Ver asignaturas, parciales y prácticas. Registrar uso de equipos cuando la práctica está habilitada.

<img src="https://imgur.com/o5oxPjh.png" width="300"/>

---

### **ENCARGADO**

**Inicio de sesión Usuario Encargado:**

<img src="https://imgur.com/tD4bQvb.png" width="300"/>

**Encargado:** Ver reporte de uso de laboratorios por semana/mes.

<img src="https://imgur.com/B1ycuOk.png" width="300"/>

---

## 5. Conclusiones

A lo largo del desarrollo de este proyecto, se logró implementar una arquitectura serveless utilizando AWS Lambda y DynamoDB, demostrando que es posible construir soluciones escalables, eficientes y de bajo costo sin depender de servidores tradicionales. El uso del Serverless Framework facilitó el despliegue y la gestión de los servicios en la nube, reduciendo la complejidad operativa.

La separación del código en capas presentación, lógica de negocio y acceso a datos permitió mantener una estructura clara y bien organizada. Esta arquitectura no solo facilita el mantenimiento del sistema, sino que también permite su extensión futura, por ejemplo, incorporando nuevos endpoints, funcionalidades o tipos de usuario, sin afectar el funcionamiento actual.

Se consiguió una integración fluida entre la API RESTful y la aplicación web frontend, lo que permitió brindar una experiencia de usuario funcional y adaptada a los distintos roles institucionales (docente, estudiante, encargado). Esta interacción garantiza que cada tipo de usuario pueda acceder a la información y realizar operaciones conforme a sus necesidades, mejorando así la gestión del uso de los laboratorios.

## 6. Referencias
- [Serverless Framework Documentation](https://www.serverless.com/framework/docs)
- [AWS DynamoDB Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)
- [Node.js Documentation](https://nodejs.org/en/docs)


