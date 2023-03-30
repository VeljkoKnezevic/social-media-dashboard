import { useState } from "react";
import Switch from "react-switch";
import "./styles/styles.scss";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className={checked ? "light" : "dark"}>
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
      <main>
        <div className="stats">
          <div className="stats__card" id="facebook">
            <img
              className="stats__card__image"
              src="./src/images/icon-facebook.svg"
              alt="Facebook"
            />
            <p className="stats__card__handle">@nathanf</p>
            <p className="stats__card__text">
              <span>1987</span> Followers
            </p>
            <p className="trend">12 Today</p>
          </div>

          <div className="stats__card" id="twitter">
            <img
              className="stats__card__image"
              src="./src/images/icon-twitter.svg"
              alt="Twitter"
            />
            <p className="stats__card__handle">@nathanf</p>
            <p className="stats__card__text">
              <span>1044</span> Followers
            </p>
            <p className="trend"> 99 Today</p>
          </div>

          <div className="stats__card" id="instagram">
            <img
              className="stats__card__image"
              src="./src/images/icon-instagram.svg"
              alt="Instagram"
            />
            <p className="stats__card__handle">@realnathanf</p>
            <p className="stats__card__text">
              <span>11k</span> Followers
            </p>
            <p className="trend">1099 Today</p>
          </div>

          <div className="stats__card" id="youtube">
            <img
              className="stats__card__image"
              src="./src/images/icon-youtube.svg"
              alt="Youtube"
            />
            <p className="stats__card__handle">Nathan F.</p>
            <p className="stats__card__text">
              <span>8239</span> Subscribers
            </p>
            <p className="trend">144 Today</p>
          </div>
        </div>
        <div className="overview">
          <h2 className="overview__heading">Overview - Today</h2>
          <div className="overview__cards">
            <div className="overview__card">
              <p className="overview__card__text">Page Views</p>
              <img
                className="overview__card__logo"
                src="./src/images/icon-facebook.svg"
                alt="Facebook"
              />
              <p className="overview__card__number">87</p>
              <p className="trend">3%</p>
            </div>
            <div className="overview__card">
              <p className="overview__card__text">Likes</p>
              <img
                className="overview__card__logo"
                src="./src/images/icon-facebook.svg"
                alt="Facebook"
              />
              <p className="overview__card__number">52</p>
              <p className="trend">2%</p>
            </div>
            <div className="overview__card">
              <p className="overview__card__text">Likes</p>
              <img
                className="overview__card__logo"
                src="./src/images/icon-instagram.svg"
                alt="Instagram"
              />
              <p className="overview__card__number">5462</p>
              <p className="trend">2257%</p>
            </div>
            <div className="overview__card">
              <p className="overview__card__text">Profile Views</p>
              <img
                className="overview__card__logo"
                src="./src/images/icon-instagram.svg"
                alt="Instagram"
              />
              <p className="overview__card__number">52k</p>
              <p className="trend">1375%</p>
            </div>
            <div className="overview__card">
              <p className="overview__card__text">Retweets</p>
              <img
                className="overview__card__logo"
                src="./src/images/icon-twitter.svg"
                alt="Twitter"
              />
              <p className="overview__card__number">117</p>
              <p className="trend">303%</p>
            </div>
            <div className="overview__card">
              <p className="overview__card__text">Likes</p>
              <img
                className="overview__card__logo"
                src="./src/images/icon-twitter.svg"
                alt="Twitter"
              />
              <p className="overview__card__number">507</p>
              <p className="trend">553%</p>
            </div>
            <div className="overview__card">
              <p className="overview__card__text">Likes</p>
              <img
                className="overview__card__logo"
                src="./src/images/icon-youtube.svg"
                alt="Youtube"
              />
              <p className="overview__card__number">107</p>
              <p className="trend">19%</p>
            </div>
            <div className="overview__card">
              <p className="overview__card__text">Total Views</p>
              <img
                className="overview__card__logo"
                src="./src/images/icon-youtube.svg"
                alt="Youtube"
              />
              <p className="overview__card__number">1407</p>
              <p className="trend">12%</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
