import PropTypes from 'prop-types';
import { StElement } from './StElement';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ stat, title = null }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stList}>
        {stat.map(({ id, lable, percentage }) => (
          <StElement key={id} lable={lable} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      lable: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
