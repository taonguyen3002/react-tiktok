import { IoChevronBack } from 'react-icons/io5';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button onClick={onBack} className={cx('back-btn')}>
                <IoChevronBack />
            </button>
            <h3 className={cx('header-title')}>{title}</h3>
        </header>
    );
}

export default Header;
