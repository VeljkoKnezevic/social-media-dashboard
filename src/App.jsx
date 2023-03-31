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
            <div className="stats__card__image-and-handle">
              <img
                className="stats__card__image"
                src="./src/images/icon-facebook.svg"
                alt="Facebook"
              />
              <p className="stats__card__handle">@nathanf</p>
            </div>
            <p className="stats__card__text">
              <span>1987</span> Followers
            </p>
            <p className="stats__card__trend">12 Today</p>
          </div>

          <div className="stats__card" id="twitter">
            <div className="stats__card__image-and-handle">
              <img
                className="stats__card__image"
                src="./src/images/icon-twitter.svg"
                alt="Twitter"
              />
              <p className="stats__card__handle">@nathanf</p>
            </div>
            <p className="stats__card__text">
              <span>1044</span> Followers
            </p>
            <p className="stats__card__trend"> 99 Today</p>
          </div>

          <div className="stats__card" id="instagram">
            <div className="stats__card__image-and-handle">
              <img
                className="stats__card__image"
                src="./src/images/icon-instagram.svg"
                alt="Instagram"
              />
              <p className="stats__card__handle">@realnathanf</p>
            </div>
            <p className="stats__card__text">
              <span>11k</span> Followers
            </p>
            <p className="stats__card__trend">1099 Today</p>
          </div>

          <div className="stats__card" id="youtube">
            <div className="stats__card__image-and-handle">
              <img
                className="stats__card__image"
                src="./src/images/icon-youtube.svg"
                alt="Youtube"
              />
              <p className="stats__card__handle">Nathan F.</p>
            </div>
            <p className="stats__card__text">
              <span>8239</span> Subscribers
            </p>
            <p className="stats__card__trend stats__card__trend--down">
              144 Today
            </p>
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
              <p className="overview__card__trend">3%</p>
            </div>
            <div className="overview__card">
              <p className="overview__card__text">Likes</p>
              <img
                className="overview__card__logo"
                src="./src/images/icon-facebook.svg"
                alt="Facebook"
              />
              <p className="overview__card__number">52</p>
              <p className="overview__card__trend overview__card__trend--down">
                2%
              </p>
            </div>
            <div className="overview__card">
              <p className="overview__card__text">Likes</p>
              <img
                className="overview__card__logo"
                src="./src/images/icon-instagram.svg"
                alt="Instagram"
              />
              <p className="overview__card__number">5462</p>
              <p className="overview__card__trend">2257%</p>
            </div>
            <div className="overview__card">
              <p className="overview__card__text">Profile Views</p>
              <img
                className="overview__card__logo"
                src="./src/images/icon-instagram.svg"
                alt="Instagram"
              />
              <p className="overview__card__number">52k</p>
              <p className="overview__card__trend">1375%</p>
            </div>
            <div className="overview__card">
              <p className="overview__card__text">Retweets</p>
              <img
                className="overview__card__logo"
                src="./src/images/icon-twitter.svg"
                alt="Twitter"
              />
              <p className="overview__card__number">117</p>
              <p className="overview__card__trend">303%</p>
            </div>
            <div className="overview__card">
              <p className="overview__card__text">Likes</p>
              <img
                className="overview__card__logo"
                src="./src/images/icon-twitter.svg"
                alt="Twitter"
              />
              <p className="overview__card__number">507</p>
              <p className="overview__card__trend">553%</p>
            </div>
            <div className="overview__card">
              <p className="overview__card__text">Likes</p>
              <img
                className="overview__card__logo"
                src="./src/images/icon-youtube.svg"
                alt="Youtube"
              />
              <p className="overview__card__number">107</p>
              <p className="overview__card__trend overview__card__trend--down">
                19%
              </p>
            </div>
            <div className="overview__card">
              <p className="overview__card__text">Total Views</p>
              <img
                className="overview__card__logo"
                src="./src/images/icon-youtube.svg"
                alt="Youtube"
              />
              <p className="overview__card__number">1407</p>
              <p className="overview__card__trend overview__card__trend--down">
                12%
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
