const UserDataDisplay = ({ user }) => {
  const bgColor = user.bgColor;
  const textColor = user.textColor;
  return (
    <div className="user-data-card">
      <div className="card-header">
        <h2>Registration Data</h2>
      </div>
      <div className="card-content" style={{ backgroundColor: bgColor }}>
        <div style={{ color: textColor }}>
          <p>
            {user.firstname} {user.lastname}
          </p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.password}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDataDisplay;
