import style from './Popper.module.scss';
import classNames from 'classnames/bind';

function Wrapper({ children }) {
    const cx = classNames.bind(style);
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
