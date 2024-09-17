import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Avatar.module.scss';
import Image from '../../component/Images';

const cx = classNames.bind(styles);
function Avatar({ to, src, alt, width, height, borderRadius, ...passStyle }) {
    return (
        <Link to={to}>
            <Image src={src} alt={alt} style={{ width, height, borderRadius, ...passStyle }} className={cx('avatar')} />
        </Link>
    );
}

export default Avatar;
