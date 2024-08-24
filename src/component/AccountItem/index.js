import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';
import { FaCheckCircle } from 'react-icons/fa';

function AccountItem() {
    const cx = classNames.bind(style);
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/6b76c354cab3fbf57217e0097d9cbe3c~c5_300x300.webp?lk3s=a5d48078&nonce=56686&refresh_token=9b9b3094cd11d25fee7bd8982debf6eb&x-expires=1724565600&x-signature=DZCSOdEBZ1AZ%2FYbjFq6UcapDAno%3D&shp=a5d48078&shcp=c1333099"
                alt="avatar"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van Thien</span>
                    <FaCheckCircle className={cx('check')} />
                </p>
                <span className={cx('username')}>NguyenVanThien</span>
            </div>
        </div>
    );
}

export default AccountItem;
