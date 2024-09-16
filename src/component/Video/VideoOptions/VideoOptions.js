import Avatar from '../../Avatar/Avatar';
import { IconArrow, IconComment, IconLabel, IconLove, IconPlus, IconThreeDot } from '../../Icons';
import Button from '../../Button';
import classNames from 'classnames/bind';
import styles from './VideoOptions.module.scss';

const cx = classNames.bind(styles);
function VideoOptions({ datas }) {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('avatar-group')}>
                <Avatar
                    src={datas.user.avatar}
                    alt={`${datas.user.first_name} ${datas.user.last_name}`}
                    width={'48px'}
                    height={'48px'}
                />
                <button className={cx('follow-btn')}>
                    <IconPlus className={cx('follow-icon')} width="2.4rem" height="2.4rem" />
                </button>
            </div>
            <Button
                className={cx('like-btn__group')}
                rightIcon={<IconLove color={datas.is_liked ? 'red' : 'rgb(22 24 35)'} className={cx('like-btn')} />}
            >
                {datas.likes_count}
            </Button>
            <Button className={cx('like-btn__group')} rightIcon={<IconComment className={cx('like-btn')} />}>
                {datas.comments_count}
            </Button>
            <Button className={cx('like-btn__group')} rightIcon={<IconLabel className={cx('like-btn')} />}>
                0
            </Button>
            <Button className={cx('like-btn__group')} rightIcon={<IconArrow className={cx('like-btn')} />}>
                {datas.shares_count}
            </Button>
            <Button className={cx('like-btn__group')} rightIcon={<IconThreeDot className={cx('like-btn')} />} />
        </section>
    );
}

export default VideoOptions;
