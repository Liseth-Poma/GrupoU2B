# Sistema de Registro de Uso de Laboratorios – API RESTful + Aplicación Web (Serverless + DynamoDB)

## 1. Introducción

Este proyecto consiste en el desarrollo de un sistema de registro para el uso de laboratorios, utilizando una **API RESTful** construida con el **framework Serverless** de AWS y una base de datos **NoSQL DynamoDB**. La aplicación web asociada permite gestionar el uso de los laboratorios por parte de docentes, estudiantes y encargados, con una arquitectura limpia que facilita el mantenimiento y la escalabilidad del sistema.

### Objetivo General

Aplicar los conocimientos adquiridos para desarrollar y consumir una API RESTful desde una aplicación web frontend, permitiendo gestionar eficientemente los recursos de los laboratorios.

---

## 2. Tecnologías Utilizadas

### Backend
- **AWS Lambda** (funciones sin servidor)
- **Serverless Framework** (despliegue y configuración de servicios)
- **Node.js** (JavaScript para lógica del backend)
- **DynamoDB** (base de datos NoSQL)
- **Joi** (validación de datos)
- **AWS SDK** (interacción con servicios de AWS)

### Frontend
- (Incluir aquí  según lo usado)

---

## 3. Estructura del Proyecto

```bash
/mi-proyecto
├── backend/                # API Serverless
│   ├── handler.js          # Lógica principal de las funciones Lambda
│   ├── serverless.yml      # Configuración del proyecto Serverless
│   └── package.json        # Dependencias y scripts del backend
│
├── frontend/               # Aplicación Web
│   ├── src/
│   │   ├── components/     # Componentes reutilizables
│   │   └── App.js          # Archivo principal del frontend
│   └── package.json        # Dependencias y scripts del frontend
│
├── screenshots/            # Capturas de pantalla del funcionamiento
├── .env                    # Variables de entorno (si es necesario)
└── README.md               # Documentación del proyecto
````

---

## 4. Actividades Realizadas

### Actividad 1: Configuración del Entorno Backend

* Instalación de Node.js, Serverless Framework y configuración de credenciales de AWS.
* Creación del proyecto con `serverless create`.
* Instalación de dependencias necesarias (`aws-sdk`, `joi`, entre otros).

### Actividad 2: Diseño de la Base de Datos en DynamoDB

Se utilizó el patrón **Single Table Design**, modelando todas las entidades necesarias en una sola tabla (`ItemsTable`).

| PK         | SK         | Tipo        | Atributos Adicionales                                                       |
| ---------- | ---------- | ----------- | --------------------------------------------------------------------------- |
| LAB#101    | META       | Laboratorio | nombre: "Lab 1", equipos: \["PC01", "PC02"]                                 |
| ASG#MAT101 | META       | Asignatura  | nombre: "Matemáticas I", docenteId: "DOC#001"                               |
| ASG#MAT101 | PARCIAL#1  | Parcial     | nombre: "P1", fechaInicio: "2025-03-01", practicas: \["PRACTICA#1"]         |
| PRACTICA#1 | META       | Práctica    | nombre: "Variables", fecha: "2025-03-15", laboratorioId: "LAB#101"          |
| EST#001    | PRACTICA#1 | UsoEquipo   | equipo: "PC01", horaInicio: "2025-03-15T08:00", horaFin: "2025-03-15T10:00" |

---

### Actividad 3: Implementación de la API RESTful

Se implementaron los siguientes endpoints para gestionar los recursos:

#### Laboratorios

* `GET /laboratorios` - Obtener lista de laboratorios
* `POST /laboratorios` - Crear laboratorio
* `GET /laboratorio` - Obtener laboratorio específico
* `PUT /laboratorios` - Editar laboratorio
* `DELETE /laboratorios` - Eliminar laboratorio

#### Asignaturas

* `GET /asignaturas`
* `POST /asignaturas`
* `GET /asignatura`
* `PUT /asignatura`
* `DELETE /asignatura`

#### Parciales

* `GET /parciales`
* `POST /parciales`
* `GET /parcial`
* `PUT /parcial`
* `DELETE /parcial`

#### Prácticas

* `GET /practicas`
* `POST /practicas`
* `GET /practica`
* `PUT /practica`
* `DELETE /practica`

#### Uso de Equipos

* `GET /uso-equipos`
* `POST /uso-equipos`
* `GET /uso-equipo`
* `PUT /uso-equipo`
* `DELETE /uso-equipo`

#### Usuarios

* `GET /usuarios`
* `POST /usuarios`
* `GET /usuario`
* `PUT /usuario`
* `DELETE /usuario`

**Ejemplo de definición en `serverless.yml`:**

```yaml
functions:
  getLaboratorios:
    handler: handler.getLaboratorios
    events:
      - http:
          path: laboratorios
          method: get
          cors: true
```

---

### Actividad 4: Arquitectura Limpia del Backend

Se siguió una arquitectura limpia separando el código en las siguientes capas:

* **Presentación (API Gateway → Lambda)**
* **Lógica de negocio (handlers y servicios)**
* **Acceso a datos (consultas a DynamoDB)**

Esto permite escalar fácilmente el proyecto y mantenerlo organizado.

---

### Actividad 5: Desarrollo del Frontend

La aplicación web frontend permite el acceso a distintas funcionalidades según el tipo de usuario:

* **Docente**: Ver asignaturas, ver parciales, crear prácticas.
* **Estudiante**: Ver asignaturas, parciales y prácticas, registrar uso de equipos.
* **Encargado**: Ver reportes de uso de laboratorios por semana/mes.

---

## 5. Instrucciones para Ejecutar el Proyecto

### Backend (API Serverless)

1. Instalar dependencias:

```bash
cd backend/
npm install
```

2. Configurar AWS:

```bash
aws configure
```

3. Desplegar la API:

```bash
serverless deploy
```

4. Probar los endpoints con Postman o curl.

---

### Frontend (Aplicación Web)

1. Instalar dependencias:

```bash
cd frontend/
npm install
```

2. Ejecutar la aplicación:

```bash
npm start
```

---

## 6. Capturas de Pantalla

> (Incluir imágenes dentro de la carpeta `screenshots/` y enlazarlas aquí)

* **Inicio de Sesión**
  ![Login](./screenshots/login.png)

* **Panel del Docente**
  ![Docente](./screenshots/docente.png)

* **Panel del Estudiante**
  ![Estudiante](./screenshots/estudiante.png)

* **Reporte del Encargado**
  ![Encargado](./screenshots/encargado.png)

---

## 7. Conclusiones

Este proyecto permitió aplicar conocimientos prácticos sobre arquitectura limpia, desarrollo de APIs RESTful con Serverless Framework, uso de bases de datos NoSQL con DynamoDB y desarrollo de interfaces web modernas. Se logró construir un sistema funcional que facilita el control y monitoreo del uso de laboratorios por parte de distintos roles.

---

## 8. Referencias

* [Serverless Framework Documentation](https://www.serverless.com/framework/docs/)
* [AWS DynamoDB Documentation](https://docs.aws.amazon.com/dynamodb/)
* [Node.js Documentation](https://nodejs.org/en/docs/)
* [React Documentation (si se usó)](https://reactjs.org/docs/getting-started.html)

```

¿Quieres que también te lo guarde como archivo `.md` o necesitas una plantilla base para editar directamente en GitHub?
```
