import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <ul className={cx('accounts')}>
                <AccountItem />
            </ul>
            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}
SuggestAccounts.propTypes = {
    label: PropTypes.string,
};
export default SuggestAccounts;
