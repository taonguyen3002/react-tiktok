import classNames from 'classnames/bind';
import styles from './Video.module.scss';

import VideoOptions from './VideoOptions/VideoOptions';
import VideoContent from './VideoContent/VideoContent';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Video() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=2');
            const result = await res.json();
            const results = await result.data;
            setData(results);
        };
        fetchData();
    }, []);
    return (
        <div>
            {data.map((videos) => (
                <article key={videos.id} className={cx('wrapper')}>
                    <div className={cx('video-wrap')}>
                        <VideoContent datas={videos} />
                        <VideoOptions datas={videos} />
                    </div>
                </article>
            ))}
        </div>
    );
}

export default Video;
