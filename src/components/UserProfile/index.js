const UserProfile = props => {
  const {userData} = props
  const {imageUrl, name, role} = userData

  return (
    <div className="user-card-container">
      <img src="imageUrl" alt="avatar" className="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation"> {role}</p>
      </div>
    </div>
  )
}
export default UserProfile
