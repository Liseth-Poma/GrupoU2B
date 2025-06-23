# Sistema de Registro de Uso de Laboratorios – API RESTful + Aplicación Web (Serverless + DynamoDB)

## 1. Introducción

Este proyecto consiste en el desarrollo de un sistema de registro para el uso de laboratorios, utilizando una **API RESTful** construida con el **framework Serverless** de AWS y con una base de datos **DynamoDB**. La aplicación web asociada permite gestionar el uso de los laboratorios por parte de docentes, estudiantes y encargados, con una arquitectura limpia que facilita el mantenimiento y la escalabilidad del sistema.

### Objetivo General

El objetivo de esta tarea es aplicar los conocimientos aprendidos, demostradno la capacidad de desarrollar y consumir una API RESTful desde una aplicación web frontend, permitiendo gestionar los recursos de los laboratorios de manera eficiente.

## 2. Tecnologías Utilizadas

- **Backend**:
  - **AWS Lambda** (Serverless)
  - **DynamoDB** (Base de datos NoSQL)
  - **Node.js** (JavaScript para el desarrollo de la API)
  - **Serverless Framework** (para gestionar funciones Lambda y recursos de AWS)
  
- **Frontend**:
  - ss 

## 3. Estructura del Proyecto

```bash
/mi-proyecto
├── backend/                # API Serverless
│   ├── handler.js          # Lógica principal de las funciones Lambda
│   ├── serverless.yml      # Configuración de Serverless
│   └── package.json        # Dependencias del backend
│
├── frontend/               # Aplicación Web
│   ├── src/
│   │   ├── components/     # Componentes de la UI
│   │   ├── App.js          # Archivo principal de React (u otro framework)
│   └── package.json        # Dependencias del frontend
│
├── screenshots/            # Capturas de pantalla del proyecto funcionando
├── README.md               # Documentación completa
└── .env                    # Variables de entorno (si es necesario)
