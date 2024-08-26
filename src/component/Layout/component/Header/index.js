import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import style from './Header.module.scss';
import classNames from 'classnames/bind';
import { FaCircleXmark, FaMagnifyingGlass, FaLanguage, FaRegLightbulb } from 'react-icons/fa6';
import { BiLoaderCircle } from 'react-icons/bi';
import { TbHomeEdit } from 'react-icons/tb';
import { FiMoreVertical } from 'react-icons/fi';
import { MdFeedback } from 'react-icons/md';
import { CiDark } from 'react-icons/ci';
import { Wrapper as PopperWrapper } from '../../../Popper';
import image from '../../../../assets/image';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';

const MENU_ITEMS = [
    {
        icon: <TbHomeEdit />,
        title: 'Creater tools',
        children: {
            title: 'Creator tool',
            data: [
                {
                    icon: <FaRegLightbulb />,
                    title: 'Live Creator Hub',
                    to: '/creatorlive',
                },
            ],
        },
    },
    {
        icon: <FaLanguage />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                    type: 'language',
                },
                {
                    code: 'en',
                    title: 'English',
                    type: 'language',
                },
            ],
        },
    },
    { icon: <MdFeedback />, title: 'Feedback and helps', to: '/feedback' },
    {
        icon: <CiDark />,
        title: 'Dark mode',
        children: {
            title: 'Dark Mode',
            data: [
                {
                    title: 'Use devide thame',
                    code: 'devideThame',
                    type: 'thame',
                },
                {
                    title: 'Light mode',
                    code: 'lightThame',
                    type: 'thame',
                },
                {
                    title: 'Dark mode',
                    code: 'darkThame',
                    type: 'thame',
                },
            ],
        },
    },
];
const handdleMenuChange = (dataChange) => {
    console.log(dataChange);
};
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
                        ],
                    }}
                    visible={searchResult}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('search-title')}>Account list</h3>
                                <ul className={cx('search-list')}>
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

                <div className={cx('action')}>
                    <Button primary>Log in</Button>
                    <Menu items={MENU_ITEMS} onChange={handdleMenuChange}>
                        <div>
                            <button className={cx('more-btn')}>
                                <FiMoreVertical />
                            </button>
                        </div>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
