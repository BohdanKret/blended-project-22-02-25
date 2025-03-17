import { IconContext } from 'react-icons';
import style from './StatisticsItem.module.css';

const StatisticsItem = ({title, total, icon}) => {
  return (
    <>
      <IconContext.Provider value={{ size: 30, color: '#29a14f' }}>
        {icon}
      </IconContext.Provider>
      <span className={style.counter}>{title}</span>
      <p className={style.text}>{total}</p>
    </>
  );
};

export default StatisticsItem;
