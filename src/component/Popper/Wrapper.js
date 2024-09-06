import style from './Popper.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
function Wrapper({ children, className }) {
    const cx = classNames.bind(style);
    return <div className={cx('wrapper', className)}>{children}</div>;
}
Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
export default Wrapper;
