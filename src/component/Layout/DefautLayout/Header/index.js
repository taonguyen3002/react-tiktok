import { useEffect, useState } from 'react';
import style from './Header.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '../../../Popper';
import Tippy from '@tippyjs/react/headless';
import { FaCircleXmark, FaMagnifyingGlass } from 'react-icons/fa6';
import { BiLoaderCircle } from 'react-icons/bi';
import image from '../../../../assets/image';
import AccountItem from '../../../AccountItem';

function Header() {
    const cx = classNames.bind(style);
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 3000);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={image.logo.default} alt="tiktok" />

                <Tippy
                    popperOptions={{
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, 0],
                                },
                            },
                            {
                                name: 'computeStyles',
                                options: {
                                    gpuAcceleration: false,
                                    // Để tắt GPU acceleration nếu muốn canh giữa chính xác hơn
                                },
                            },
                        ],
                    }}
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('search-title')}>Account list</h3>
                                <ul className={cx('search-list')}>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </ul>
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>

                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
