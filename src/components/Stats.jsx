const Stats = () => {
  return (
    <div className="stats">
      <div className="stats__card" id="facebook">
        <div className="stats__card__image-and-handle">
          <img
            className="stats__card__image"
            src="../src/images/icon-facebook.svg"
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
            src="../src/images/icon-instagram.svg"
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
            src="../src/images/icon-youtube.svg"
            alt="Youtube"
          />
          <p className="stats__card__handle">Nathan F.</p>
        </div>
        <p className="stats__card__text">
          <span>8239</span> Subscribers
        </p>
        <p className="stats__card__trend stats__card__trend--down">144 Today</p>
      </div>
    </div>
  );
};

export default Stats;
