import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, avatar, location, tag, stat }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stat}>
        <li>
          <span className={css.lable}>Followers </span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.lable}>Views </span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.lable}>Likes </span>
          <span className={css.quantity}>{stat.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stat: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
