import style from './Popper.module.scss';
import classNames from 'classnames/bind';

function Wrapper({ children, className }) {
    const cx = classNames.bind(style);
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Wrapper;
