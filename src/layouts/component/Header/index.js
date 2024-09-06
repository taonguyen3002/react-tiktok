import { Fragment } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import style from './Header.module.scss';
import classNames from 'classnames/bind';

import { FaLanguage, FaRegLightbulb, FaRegUser } from 'react-icons/fa6';
import { TbHomeEdit } from 'react-icons/tb';
import { FiLogOut, FiMoreVertical } from 'react-icons/fi';
import { MdFeedback } from 'react-icons/md';
import { CiDark } from 'react-icons/ci';
import { IoSettingsOutline } from 'react-icons/io5';

import { IconInbox, IconMessage, IconPlus } from '../../../component/Icons';
import Search from '../Search';
import image from '../../../assets/image';
import Button from '../../../component/Button';
import Menu from '../../../component/Popper/Menu';
import Image from '../../../component/Images';
import { Link } from 'react-router-dom';
import configs from '../../../configs';

const cx = classNames.bind(style);

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
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={configs.routes.root} className={cx('logo')}>
                    <Image src={image.logo.default} alt="tiktok" />
                </Link>
                <Search />
                <div className={cx('action')}>
                    {currentuser ? (
                        <Fragment>
                            <div className={cx('action-btn__wrap')}>
                                <Button
                                    leftIcon={<IconPlus className={cx('upload-icon')} />}
                                    to={configs.routes.upload}
                                    className={cx('upload-btn')}
                                >
                                    Upload
                                </Button>
                            </div>

                            <Tippy content="Messages">
                                <div className={cx('action-btn__wrap')}>
                                    <Button size={'small'} to={'/message'} className={cx('action-btn')}>
                                        <IconMessage />
                                    </Button>
                                </div>
                            </Tippy>

                            <Tippy content="Thông báo">
                                <div className={cx('action-btn__wrap')}>
                                    <Button size={'small'} className={cx('action-btn')}>
                                        <IconInbox />
                                    </Button>
                                </div>
                            </Tippy>
                        </Fragment>
                    ) : (
                        <Button primary>Log in</Button>
                    )}
                    <Menu items={currentuser ? userMenu : MENU_ITEMS} onChange={handdleMenuChange}>
                        {currentuser ? (
                            <Image
                                src="https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/11/avatar-vo-tri-thumbnail.jpg"
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
