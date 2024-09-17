import classNames from 'classnames/bind';
import styles from './Video.module.scss';

import VideoOptions from './VideoOptions/VideoOptions';
import VideoContent from './VideoContent/VideoContent';
import { useEffect, useRef, useState } from 'react';
import * as videoSevice from '../../sevices/videoSevice';

const cx = classNames.bind(styles);
function Video({ initPage }) {
    const [page, setPage] = useState(initPage);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState([]);
    const videoRef = useRef([]);
    // lấy video từ api
    useEffect(() => {
        const fetchVideo = (page) => {
            videoSevice.video({ type: 'for-you', page: page }).then((res) => {
                setData((preV) => [...preV, ...res]);
            });
        };
        fetchVideo(page);
    }, [page]);

    // xử lí khi người dùng click chuyển video
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowUp') {
                // Chuyển sang video trước
                if (currentIndex > 0) {
                    setCurrentIndex((prevIndex) => prevIndex - 1);
                }
            } else if (event.key === 'ArrowDown') {
                // Chuyển sang video tiếp theo
                if (currentIndex < data.length - 1) {
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                } else {
                    // Nếu là video cuối cùng, gọi API để tải thêm
                    setPage((prevPage) => prevPage + 1);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentIndex, page, data]);
    useEffect(() => {
        videoRef.current.forEach((video, index) => {
            if (video) {
                if (index === currentIndex) {
                    video.play();
                } else {
                    video.pause();
                }
            }
        });
    }, [currentIndex]);

    return (
        <div>
            {data.map((video, index) => (
                <article
                    key={index}
                    style={{ display: currentIndex === index ? 'block' : 'none' }}
                    className={cx('wrapper')}
                >
                    <div className={cx('video-wrap')}>
                        <VideoContent datas={video} ref={(el) => (videoRef.current[index] = el)} />
                        <VideoOptions datas={video} />
                    </div>
                </article>
            ))}
        </div>
    );
}

export default Video;
