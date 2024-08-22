import style from './Header.module.scss';
import classNames from 'classnames/bind';
function Header() {
    const cx = classNames.bind(style);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
