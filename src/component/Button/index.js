import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary = false,
    outline = false,
    disable,
    rounded,
    size,
    children,
    leftIcon,
    rightIcon,
    className,
    onClick,
    ...passProp
}) {
    let Component = 'button';
    const classes = cx('wrapper', { primary, outline, disable, rounded, [className]: className, [size]: size });
    const prop = {
        onClick,
        ...passProp,
    };
    if (disable) {
        delete prop.onClick;
    }
    if (to) {
        prop.to = to;
        Component = Link;
    } else if (href) {
        prop.href = href;
        Component = 'a';
    }
    return (
        <Component className={cx(classes)} {...prop}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;
