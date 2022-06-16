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

```
POST /users HTTP/1.1
Content-Type: application/json

{"name":"Screwdriver", "username": "sc","password":"12345", "email":"sc@gmail.com"}
```

---

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{"id": 5, "name":"Screwdriver", "username": "sc","password":"12345", "email":"sc@gmail.com"}`

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "會員不存在" }`

  或

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "你沒有能進行這個要求的授權" }`


### 登入

會員登入

```
POST /login HTTP/1.1
Content-Type: application/json

{"username": "sc","password":"12345"}
```

### 登出

會員登入

```
POST /logout HTTP/1.1
Content-Type: application/json

{"username": "sc"}
```

### 獲得會員資料

獲得會員資料(by id)

```
GET /users/123 HTTP/1.1
```

### 修改會員資料

修改會員資料(by id)

```
PUT /users/123 HTTP/1.1
Content-Type: application/json

{"name":"Screwdriver", "username": "sc","password":"66666", "email":"sc@gmail.com"}
```

