import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import Video from '../../component/Video/Video';

const cx = classNames.bind(styles);
function Following() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('video-list')}>
                    <Video initPage={3} />
                </div>
            </div>
        </div>
    );
}
export default Following;
