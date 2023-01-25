import css from '../Statistics/Statistics.module.css';

export const StElement = ({ lable, percentage }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{lable}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};
