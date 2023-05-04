import classNames from 'classnames/bind';
import style from './Header.module.scss';
const cx = classNames.bind(style); // có thể viết css có dấu -
function Header() {
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>{/* search */}</div>
      </header>
   );
}

export default Header;
