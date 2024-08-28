import { Fragment, useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import style from './Header.module.scss';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import {
    FaCircleXmark,
    FaMagnifyingGlass,
    FaLanguage,
    FaRegLightbulb,
    FaMessage,
    FaPlus,
    FaRegUser,
} from 'react-icons/fa6';
import { BiLoaderCircle } from 'react-icons/bi';
import { TbHomeEdit } from 'react-icons/tb';
import { FiLogOut, FiMoreVertical } from 'react-icons/fi';
import { MdFeedback } from 'react-icons/md';
import { CiDark } from 'react-icons/ci';
import { FaTelegramPlane } from 'react-icons/fa';

import { Wrapper as PopperWrapper } from '../../../Popper';
import image from '../../../../assets/image';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import { IoSettingsOutline } from 'react-icons/io5';

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
    const currentuser = true;
    const userMenu = [
        {
            icon: <FaRegUser />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <IoSettingsOutline />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FiLogOut />,
            title: 'Log out',
            separate: true,
        },
    ];
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
                <TippyHeadless
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
                </TippyHeadless>
                <div className={cx('action')}>
                    {currentuser ? (
                        <Fragment>
                            <Button leftIcon={<FaPlus />} to={'/upload'} className={cx('upload-btn')}>
                                Upload
                            </Button>

                            <Tippy content="Messages" delay={[0, 200]}>
                                <span>
                                    <Button size={'small'} to={'/message'} className={cx('action-btn')}>
                                        <FaTelegramPlane />
                                    </Button>
                                </span>
                            </Tippy>

                            <Button size={'small'} className={cx('action-btn')}>
                                <FaMessage />
                            </Button>
                        </Fragment>
                    ) : (
                        <Button primary>Log in</Button>
                    )}
                    <Menu items={currentuser ? userMenu : MENU_ITEMS} onChange={handdleMenuChange}>
                        {currentuser ? (
                            <img
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5a02f274d0d4025e46ec4fa6b63291d2~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=70722&refresh_token=534cc74f38e9e88712b5b49b69f33bfd&x-expires=1724893200&x-signature=04EWne18F2rOSjBhLCy7inYlzbU%3D&shp=a5d48078&shcp=81f88b70"
                                alt="nguyen van A"
                                className={cx('avatar')}
                            />
                        ) : (
                            <div>
                                <Button className={cx('more-btn')}>
                                    <FiMoreVertical />
                                </Button>
                            </div>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
