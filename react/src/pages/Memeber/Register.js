import { useState } from 'react'

function Register(props) {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    const newUserData = {
      ...userData,
      [e.target.name]: e.target.value,
    }

    setUserData(newUserData)
  }
  return (
    <>
      <h1>會員註冊</h1>
      <form>
        <div>
          <label>姓名</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={userData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>帳號</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>密碼</label>
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">送出</button>
      </form>
    </>
  )
}

export default Register
