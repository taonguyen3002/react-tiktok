import { Fragment } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import style from './Header.module.scss';
import classNames from 'classnames/bind';

import { FiMoreVertical } from 'react-icons/fi';
import { IconInbox, IconMessage, IconPlus } from '../../../component/Icons';
import Search from '../Search';
import image from '../../../assets/image';
import Button from '../../../component/Button';
import Menu from '../../../component/Popper/Menu';
import Image from '../../../component/Images';
import { Link } from 'react-router-dom';
import configs from '../../../configs';
import { menuItemHeader, userMenuHeader } from '../../../constant';

const cx = classNames.bind(style);

const handdleMenuChange = (dataChange) => {
    console.log(dataChange);
};
function Header({ currentUser }) {
    const currentuser = true;
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
                    <Menu items={currentuser ? userMenuHeader : menuItemHeader} onChange={handdleMenuChange}>
                        {currentuser ? (
                            <Image
                                src={currentUser.avatar}
                                alt={`${currentUser.first_name} ${currentUser.last_name}`}
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
