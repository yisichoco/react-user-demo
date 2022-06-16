import { useEffect, useState } from 'react'

function Profile(props) {
  const { userId } = props

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  })

  const fetchUserData = async () => {
    const response = await fetch('/users/' + userId)
    const data = await response.json()

    setUserData(data)
  }

  // didMount
  useEffect(() => {
    fetchUserData()
  }, [])

  const handleChange = (e) => {
    const newUserData = {
      ...userData,
      [e.target.name]: e.target.value,
    }

    setUserData(newUserData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('/users/' + userId, {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })

    const data = await response.json()

    console.log(data)
  }

  return (
    <>
      <h1>個人資料</h1>
      <form onSubmit={handleSubmit}>
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
            value={userData.email}
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
        <button type="submit">修改</button>
      </form>
    </>
  )
}

export default Profile
