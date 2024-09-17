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

function Sidebar({ currentUser }) {
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
                    to={`/@${currentUser.nickname}`}
                    title={'Profile'}
                    icon={
                        <Image
                            src={currentUser.avatar}
                            alt={`${currentUser.first_name} ${currentUser.last_name}`}
                            className={cx('avatar')}
                        />
                    }
                    activeIcon={
                        <Image
                            src={currentUser.avatar}
                            alt={`${currentUser.first_name} ${currentUser.last_name}`}
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
