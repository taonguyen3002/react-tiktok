import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Video from '../../component/Video/Video';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('video-list')}>
                    <Video />
                </div>
            </div>
        </div>
    );
}

export default Home;
