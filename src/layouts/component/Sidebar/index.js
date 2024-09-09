import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import Image from '../../../component/Images';
import configs from '../../../configs';
import {
    IconCompass,
    IconFriendArrow,
    IconFriendGroup,
    IconHome,
    IconRecord,
    iconActivePath,
} from '../../../component/Icons';

function Sidebar() {
    const cx = classNames.bind(style);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    to={configs.routes.root}
                    title={'For You'}
                    icon={<IconHome className={cx('icon')} />}
                    activeIcon={<IconHome d={Object.values(iconActivePath.home)} className={cx('icon')} />}
                />
                <MenuItem
                    to={configs.routes.explore}
                    title={'Explore'}
                    icon={<IconCompass className={cx('icon')} />}
                    activeIcon={<IconCompass d={Object.values(iconActivePath.compass)} className={cx('icon')} />}
                />
                <MenuItem
                    to={configs.routes.following}
                    title={'Following'}
                    icon={<IconFriendArrow className={cx('icon')} />}
                    activeIcon={<IconFriendArrow className={cx('icon')} />}
                />
                <MenuItem
                    to={configs.routes.friends}
                    title={'Friend'}
                    icon={<IconFriendGroup className={cx('icon')} />}
                    activeIcon={
                        <IconFriendGroup d={Object.values(iconActivePath.friendGroup)} className={cx('icon')} />
                    }
                />
                <MenuItem
                    to={configs.routes.live}
                    title={'Live'}
                    icon={<IconRecord className={cx('icon')} />}
                    activeIcon={
                        <IconRecord
                            d={Object.values(iconActivePath.record)}
                            viewBox="0 0 48 48"
                            pathFill="white"
                            className={cx('icon')}
                        />
                    }
                />
                <MenuItem
                    to={configs.routes.profile}
                    title={'Profile'}
                    icon={
                        <Image
                            src="https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/11/avatar-vo-tri-thumbnail.jpg"
                            alt="nguyen van A"
                            className={cx('avatar')}
                        />
                    }
                    activeIcon={
                        <Image
                            src="https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/11/avatar-vo-tri-thumbnail.jpg"
                            alt="nguyen van A"
                            className={cx('avatar')}
                        />
                    }
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
