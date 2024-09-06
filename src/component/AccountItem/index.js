import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';
import { FaCheckCircle } from 'react-icons/fa';
import Images from '../Images';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AccountItem({ data }) {
    const cx = classNames.bind(style);
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Images src={data.avatar} alt={data.full_name} className={cx('avatar')} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FaCheckCircle className={cx('check')} />}
                </p>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
