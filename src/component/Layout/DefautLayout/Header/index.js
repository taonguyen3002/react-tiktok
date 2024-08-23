import style from './Header.module.scss';
import classNames from 'classnames/bind';
import image from '../../../../assets/image';
import { FaCircleXmark, FaMagnifyingGlass } from 'react-icons/fa6';
import { BiLoaderCircle } from 'react-icons/bi';
function Header() {
    const cx = classNames.bind(style);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={image.logo.default} alt="tiktok" />

                <div className={cx('search')}>
                    <input placeholder="Search" spellCheck={false} className={cx('search-input')} />

                    <button className={cx('search-clear')}>
                        <FaCircleXmark />
                    </button>
                    <BiLoaderCircle className={cx('search-loading')} />
                    <button className={cx('search-btn')}>
                        <FaMagnifyingGlass />
                    </button>
                </div>

                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
