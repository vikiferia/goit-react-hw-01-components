import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistical.module.css';


const Statistics = ({title, stats}) => (
    <section className={styles.statistics}>
  {title && <h2 className={styles.title} >{title}</h2>}

  <ul className={styles.stat_list} >
    {stats.map(stat =>(<li className={styles.item} key={stat.id} style={{ backgroundColor: `${randomColor()}` }}>
      <span className={styles.label} >{stat.label}</span>
      <span className={styles.percentage}>{stat.percentage}%</span>
    </li>))}
  </ul>
</section>
)
const randomColor = () => {
  let col = Math.round(255.0 * Math.random());
  const r = col.toString(16);
  col = Math.round(255.0 * Math.random());
  const g = col.toString(16);
  col = Math.round(255.0 * Math.random());
  const b = col.toString(16);
  col = `#${r}${g}${b}`;
  return col;
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired, 
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
  
};

export default Statistics