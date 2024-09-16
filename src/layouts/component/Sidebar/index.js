import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import { useEffect, useState } from 'react';
import Menu, { MenuItem } from './Menu';
import Image from '../../../component/Images';
import configs from '../../../configs';
import * as userSevice from '../../../sevices/userSevice';
import SuggestAccount from '../../../component/SuggestAccounts/SuggestAccounts';
import { MenuItemSidebar } from '../../../constant';
const INIT_PAGE = 1;
const PER_PAGE = 5;
const cx = classNames.bind(style);

function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [userSuggest, setUserSuggest] = useState([]);
    useEffect(() => {
        userSevice
            .suggest({ page, perPage: PER_PAGE })
            .then((data) => setUserSuggest((pre) => [...pre, ...data]))
            .catch((error) => console.log(error));
    }, [page]);

    const handleSeeMore = () => {
        setPage(page + 1);
    };
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {MenuItemSidebar.map((item) => (
                    <MenuItem
                        key={item.id}
                        to={item.path}
                        title={item.title}
                        icon={item.icon}
                        activeIcon={item.activeIcon}
                    />
                ))}
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
            <SuggestAccount label="Suggested for you" data={userSuggest} onSeeMore={handleSeeMore} />
        </aside>
    );
}

export default Sidebar;
