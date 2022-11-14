// Write your JS code here

import './index.css'

const UserInfo = () => {
  console.log('USER')
  return (
    <div className="userInfo-container">
      <img
        className="user-img"
        alt="profile"
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png "
      />
      <h1 className="user-name">Wade Warren</h1>
      <p className="user-role">Software developer at UK</p>
    </div>
  )
}

export default UserInfo
