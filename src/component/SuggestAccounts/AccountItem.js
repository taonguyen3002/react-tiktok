import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import Image from '../Images';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ user }) {
    return (
        <Link to={`/@${user.nickname}`}>
            <li className={cx('account')}>
                <div className={cx('account-inner')}>
                    <Image className={cx('avatar')} src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                    <div className={cx('info')}>
                        <p className={cx('nickname')}>
                            <strong>{user.nickname}</strong>
                            {user.tick && <FaCheckCircle className={cx('check')} />}
                        </p>
                        <p className={cx('name')}>{`${user.first_name} ${user.last_name}`}</p>
                    </div>
                </div>
            </li>
        </Link>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
