import Switch from "react-switch";

const Header = ({ checked, setChecked }) => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__heading">Social Media Dashboard</h1>
        <p className="header__text">Total Followers: 23,004</p>
      </div>

      <div className="dark-mode">
        <p className="dark-mode__text">Dark Mode</p>
        <Switch
          checked={checked}
          uncheckedIcon={false}
          checkedIcon={false}
          width={48}
          height={24}
          handleDiameter={18}
          onChange={() => setChecked(!checked)}
          className="dark-mode__switch"
        />
      </div>
    </header>
  );
};

export default Header;
