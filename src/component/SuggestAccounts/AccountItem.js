import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import PropTypes from 'prop-types';
import Image from '../Images';
import { FaCheckCircle } from 'react-icons/fa';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <li className={cx('account')}>
            <div className={cx('account-inner')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/01c6eb8a9d4ec9a0e491cb3882255a68.jpeg?lk3s=a5d48078&nonce=12214&refresh_token=d75dcbf4cece4cc7a0f703b7e802d25c&x-expires=1726045200&x-signature=xsnzGZ4zCn%2BIiulOXG2ZSQXdPco%3D&shp=a5d48078&shcp=81f88b70"
                    alt=""
                />
                <div className={cx('info')}>
                    <p className={cx('nickname')}>
                        <strong>nguyenvan</strong>
                        <FaCheckCircle className={cx('check')} />
                    </p>
                    <p className={cx('name')}>Nguyen Van</p>
                </div>
            </div>
        </li>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
