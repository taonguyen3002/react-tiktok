import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestAccounts({ label, data = [], onSeeMore }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <ul className={cx('accounts')}>
                {data.map((user) => (
                    <AccountItem key={user.id} user={user} />
                ))}
            </ul>
            <p className={cx('more-btn')} onClick={onSeeMore}>
                See more
            </p>
        </div>
    );
}
SuggestAccounts.propTypes = {
    label: PropTypes.string,
    data: PropTypes.array,
};
export default SuggestAccounts;
