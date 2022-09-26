1. npm install -g express-generator
2. express --view ejs --git nama_project
3. Masuk ke directory: cd nama_project
4. npm install
5. npm start

Install Database
1. npm install sequelize-cli -g
2. npm init -y
3. npm install sequelize
4. sequelize init --> ada 4 folder created
5. pengaturan config disesuaikan dengan database
6. sequelize db:create --> error karena belum install adapter --skip, karena sudah ada database--
7. npm install pg --> install adaptor
8. sequelize db:create --> membuat database pada postgress --skip, karena sudah ada database--
9. sequelize model:generate --name nama_model --attributes attribute1:tipe_data_attribute1,attribute2:tipe_data_attribute2,attribute3:tipe_data_attribute3 --> membuat model, akan terbuat file model pada folder models
10. edit file model sesuaikan lagi dengan tipe data yg dibutuhkan.
11. sequelize db:migrate --> memindahkan skema tabel ke database

Authentication
1. # npm init -y --> di skip karena sudah terinstall
   # npm install nodemon
2. npm install express express-session express-flash ejs sequelize pg
3. sequelize init --> skip karena config sudah ada
4. psql -U username -d db_name --> skip
5. CREATE USER admin_sabrina WITH PASSWORD 'admin'; --> skip
6. ALTER USER admin_sabrina WITH SUPERUSER; --> skip
7. config db in file config.json --> skip
8. sequelize db:create --> skip
9. sequelize model:generate --name User --attributes username:string,password:string --> skip
10. make constraint unik in table User --> skip
11. sequelize db:migrate --> skip
12. npm install bcrypt
13. npm install passport passport-local
14. register new User
15. chek new users:  SELECT * FROM "Users";
16. run node server.js --> ganti npm start

Authorization
1. npm init -y --> skip
2. npm i --save-dev nodemon
3. npm install express express-session express-flash ejs sequelize pg
4. sequelize init --> skip, karena sudah konek ke database
5. psql -U username -d db_name --> optional
6. CREATE USER admin_sabrina WITH PASSWORD 'admin'; --> optional
7. ALTER USER admin_sabrina WITH SUPERUSER; --> optional
8. config db in file config.json --> skip
9. sequelize db:create --> skip
10. sequelize model:generate --name User --attributes username:string,password:string --> optional
11. make constraint unik in table User --> optional
12. sequelize db:migrate
13. npm install bcrypt
14. npm install passport passport-local
17. npm install jsonwebtoken
18. npm install passport passport-jwt
15. register new User
16. chek new users:  SELECT * FROM "Users";







