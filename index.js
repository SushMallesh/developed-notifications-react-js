const Notification = (props) => {
  const { iconUrl, message, className } = props;
  return (
    <div className={`notification ${className}`}>
      <img className="icon" src={iconUrl} />
      <p className="content">{message}</p>
    </div>
  );
};

const element = (
  <div className="notifications-bg">
    <h1 className="heading">Notifications</h1>
    <Notification
      iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      message="Informational Message"
      className="notification1"
    />
    <Notification
      iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      message="Success Message"
      className="notification2"
    />
    <Notification
      iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      message="Warning Message"
      className="notification3"
    />
    <Notification
      iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      message="Danger Message"
      className="notification4"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
