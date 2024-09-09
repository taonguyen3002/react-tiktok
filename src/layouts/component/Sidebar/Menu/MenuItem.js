import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);
function MenuItem({ to, icon, title, activeIcon, ...passProps }) {
    return (
        <NavLink to={to} className={(nav) => cx('item', { active: nav.isActive })}>
            {({ isActive }) => (
                <>
                    {isActive ? activeIcon : icon} {/* Hiển thị icon dựa trên trạng thái active */}
                    <span className={cx('title')}>{title}</span>
                </>
            )}
        </NavLink>
    );
}
MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};
export default MenuItem;
