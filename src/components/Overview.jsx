const Overview = () => {
  return (
    <div className="overview">
      <h2 className="overview__heading">Overview - Today</h2>
      <div className="overview__cards">
        <div className="overview__card">
          <p className="overview__card__text">Page Views</p>
          <img
            className="overview__card__logo"
            src="../../public/images/icon-facebook.svg"
            alt="Facebook"
          />
          <p className="overview__card__number">87</p>
          <p className="overview__card__trend">3%</p>
        </div>
        <div className="overview__card">
          <p className="overview__card__text">Likes</p>
          <img
            className="overview__card__logo"
            src="../../public/images/icon-facebook.svg"
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
            src="/images/icon-instagram.svg"
            alt="Instagram"
          />
          <p className="overview__card__number">5462</p>
          <p className="overview__card__trend">2257%</p>
        </div>
        <div className="overview__card">
          <p className="overview__card__text">Profile Views</p>
          <img
            className="overview__card__logo"
            src="../../public/images/icon-instagram.svg"
            alt="Instagram"
          />
          <p className="overview__card__number">52k</p>
          <p className="overview__card__trend">1375%</p>
        </div>
        <div className="overview__card">
          <p className="overview__card__text">Retweets</p>
          <img
            className="overview__card__logo"
            src="../../public/images/icon-twitter.svg"
            alt="Twitter"
          />
          <p className="overview__card__number">117</p>
          <p className="overview__card__trend">303%</p>
        </div>
        <div className="overview__card">
          <p className="overview__card__text">Likes</p>
          <img
            className="overview__card__logo"
            src="../../public/images/icon-twitter.svg"
            alt="Twitter"
          />
          <p className="overview__card__number">507</p>
          <p className="overview__card__trend">553%</p>
        </div>
        <div className="overview__card">
          <p className="overview__card__text">Likes</p>
          <img
            className="overview__card__logo"
            src="../../public/images/icon-youtube.svg"
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
            src="../../public/images/icon-youtube.svg"
            alt="Youtube"
          />
          <p className="overview__card__number">1407</p>
          <p className="overview__card__trend overview__card__trend--down">
            12%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
