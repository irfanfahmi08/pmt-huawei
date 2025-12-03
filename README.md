# Simple Form Backend API (Express + PostgreSQL)

Proyek ini merupakan backend sederhana yang dibangun menggunakan **Node.js**, **Express**, dan **PostgreSQL**. Backend ini dibuat untuk memenuhi kebutuhan technical test, yaitu menerima data formulir dari frontend, menyimpannya ke database, dan mengembalikan data tersebut melalui endpoint API.

## 🚀 Tech Stack
- **Node.js**
- **Express**
- **PostgreSQL**
- **pg & pg-hstore**
- **dotenv**
- **sequelize-cli**
- **nodemon**

---

## 🛠️ Instalasi
1.  Clone repository ini :
    ```git clone url```

2.  Set up dependensi :
    ```npm install```

## 🗄️ Database
1.  Set up .env file
2.  Migrations :
    ```npx sequelize-cli db:migrate```
3.  Seeders :
    ```npx sequelize-cli seed:generate --name demo-user```

## ▶️ RUNNING SERVER ##
```npm run api```