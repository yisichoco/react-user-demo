# 會員相關

## 總覽

- POST 註冊 /register
- POST 登入 /login
- POST 登出 /logout
- GET 獲得資料(by ID) /users/:id
- PUT 修改資料 /users/:id

### 註冊會員

註冊一個新會員

```
POST /register HTTP/1.1
Content-Type: application/json

{"name":"Screwdriver", "username": "sc","password":"12345", "email":"sc@gmail.com"}
```

### 登入

會員登入

```
POST /login HTTP/1.1
Content-Type: application/json

{"username": "sc","password":"12345"}
```

