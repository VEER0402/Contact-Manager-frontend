📒 Contact Manager – Full Stack Application

(Spring Boot + MySQL + Angular)

A complete Contact Management System built from scratch using Spring Boot (Backend) and Angular (Frontend). This project was developed to deeply understand real-world application architecture, backend–frontend integration, and CRUD workflows used in enterprise projects.

========================================================================================================================================================================================

🚀 Features

Backend (Spring Boot)

Create Contact

Get All Contacts

Update Contact

Delete Contact

MySQL integration

Hibernate auto SQL generation

Clean layered architecture

========================================================================================================================================================================================

✌️ Frontend (Angular)

Display contacts in a responsive table

Add contact (popup modal)

Edit contact (same popup, update mode)

Delete contact

Clean UI using pure Angular + CSS (no Bootstrap)

Real-time data sync with backend

========================================================================================================================================================================================

✌️ Tech Stack Backend

Java 17

Spring Boot 3+

Spring Web

Spring Data JPA

Hibernate ORM

MySQL

Maven

========================================================================================================================================================================================

✌️ Frontend

Angular (latest)

TypeScript

HTML

CSS (custom, no Bootstrap)

========================================================================================================================================================================================

📂 Project Architecture (Industry Standard) Backend – Layered Architecture controller → service → repository → database

========================================================================================================================================================================================

📸 Screenshots

(Added UI screenshots here for GitHub)

Home Contact Screen

![homescreen](https://github.com/user-attachments/assets/b507cabc-5f06-44ec-8cd3-3a200feff988)


========================================================================================================================================================================================

Add Contact Screen

![add contact screen](https://github.com/user-attachments/assets/43ba1f67-d98c-419f-a860-d95fa0f043fe)


========================================================================================================================================================================================

Updated Screen

update contact screen

![update contact screen](https://github.com/user-attachments/assets/25db0424-6204-4253-aae1-6cda06dec383)


========================================================================================================================================================================================

🧩 Step-by-Step Development Process

Step 0: Project Requirement

Build a Contact Manager module like real enterprise projects where:

Backend exposes APIs

Frontend consumes APIs

Database stores persistent data

========================================================================================================================================================================================

✌️ Step 1: Backend Project Setup

Created Spring Boot project from start.spring.io

Selected:

Maven

Java 17

Spring Web

Spring Data JPA

MySQL Driver

========================================================================================================================================================================================

✌️ Step 2: Database Configuration

Configured MySQL connection in application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/contactdb spring.datasource.username=contactuser spring.datasource.password=***** spring.jpa.hibernate.ddl-auto=update spring.jpa.show-sql=true

========================================================================================================================================================================================

✌️ Step 3: Entity (Model)

Created Contact entity

Mapped Java fields to MySQL columns using JPA annotations

This represents one row in DB

========================================================================================================================================================================================

✌️ Step 4: Repository Layer

Created ContactRepository

Extended JpaRepository

No SQL written manually — Hibernate handles it

========================================================================================================================================================================================

✌️ Step 5: Service Layer

Created ContactService interface (defines WHAT app can do)

Created ContactServiceImpl (defines HOW it does)

Business logic lives here

========================================================================================================================================================================================

✌️ Step 6: Controller Layer (REST APIs)

Exposed endpoints like:

GET /api/contacts

POST /api/contacts

PUT /api/contacts/{id}

DELETE /api/contacts/{id}

This is what frontend/Postman talks to

========================================================================================================================================================================================

✌️ Step 7: API Testing

Tested all APIs using Postman

Verified DB updates using MySQL Workbench

========================================================================================================================================================================================

✌️ Step 8: Angular Frontend Setup

Created Angular app using ng new

Enabled routing

Used pure CSS (no Bootstrap)

========================================================================================================================================================================================

✌️ Step 9: Angular ↔ Backend Integration

Created ContactService in Angular

Used HttpClient to call Spring Boot APIs

Fixed CORS issues in backend

========================================================================================================================================================================================

✌️ Step 10: UI + CRUD Operations

Display contacts in table

Add Contact popup

Edit Contact using same popup

Delete contact

UI automatically refreshes from backend

About
This is the java+MySQL+Angular based Project for Contact management , Like Add Contact, Modify Contact , Delete Contact Etc.

Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 0 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Packages
No packages published
Publish your first package
Footer
