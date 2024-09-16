import classNames from 'classnames/bind';
import styles from './VideoContent.module.scss';
import { useEffect, useRef, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
const cx = classNames.bind(styles);

function VideoContent({ width = '304px', height = '541px', datas }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMute] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isDraggingVolume, setIsDraggingVolume] = useState(false);
    const [volume, setVolume] = useState(1);
    const videoRef = useRef(null);
    const videoProgress = useRef(null);
    const volumeBarRef = useRef(null);

    const handleTimeUpdate = () => {
        const currentTime = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        const progressPercent = (currentTime / duration) * 100;
        setProgress(progressPercent);
    };
    // cập nhật tiến trình video
    const handleClickVideo = () => {
        if (!isPlaying) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };
    // xử lí khi kéo thanh tiến trình
    const handleProgressMouseDown = (event) => {
        setIsDragging(true);
        updateProgress(event);
    };
    // Dừng kéo thanh điều chỉnh tiến trình
    const handleProgressMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);
        }
    };
    const handleProgressMouseMove = (event) => {
        if (isDragging) {
            updateProgress(event);
        }
    };
    const updateProgress = (e) => {
        const rect = videoProgress.current.getBoundingClientRect();
        const clickPosition = e.clientX - rect.left;
        const totalWidth = rect.width;
        const clickPercent = (clickPosition / totalWidth) * 100;
        const newTime = (clickPercent / 100) * videoRef.current.duration;
        videoRef.current.currentTime = newTime;
        setProgress(clickPercent);
    };

    useEffect(() => {
        document.addEventListener('mouseup', handleProgressMouseUp);
        document.addEventListener('mousemove', handleProgressMouseMove);
        return () => {
            document.removeEventListener('mouseup', handleProgressMouseUp);
            document.removeEventListener('mousemove', handleProgressMouseMove);
        };
    }, [isDragging]);
    // xử lí nút âm thanh
    const toggleMute = () => {
        setIsMute(!isMuted);
        videoRef.current.muted = !isMuted;
    };
    // cập nhật âm thanh
    const updateVolume = (volumeValue) => {
        setVolume(volumeValue);
        videoRef.current.volume = volumeValue;
    };
    // bắt đầu kéo thanh volume
    const handleVolumeMouseDown = (event) => {
        setIsDraggingVolume(true);
        handleVolumeChange(event);
    };
    // kéo thanh volume
    const handleMouseMove = (event) => {
        if (isDraggingVolume) {
            handleVolumeChange(event);
        }
    };
    // Dừng kéo thanh điều chỉnh âm lượng
    const handleMouseUp = () => {
        if (isDraggingVolume) {
            setIsDraggingVolume(false);
        }
    };
    // Cập nhật âm lượng khi người dùng kéo
    const handleVolumeChange = (event) => {
        const rect = volumeBarRef.current.getBoundingClientRect();
        const clickPositionX = event.clientX - rect.left;
        const volumeLevel = clickPositionX / rect.width;
        const newVolume = Math.min(Math.max(volumeLevel, 0), 1);
        updateVolume(newVolume);
    };

    useEffect(() => {
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDraggingVolume]);

    return (
        <section className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('video-main')}>
                    <video
                        key={datas.id}
                        onTimeUpdate={handleTimeUpdate}
                        ref={videoRef}
                        onClick={handleClickVideo}
                        width={width}
                        height={height}
                        className={cx('video')}
                    >
                        <source src={datas.file_url} type="video/mp4" />
                        Trình duyệt của bạn không hỗ trợ thẻ video.
                    </video>
                </div>
                {/* video detail */}
                <div className={cx('video-detail')}>
                    <p className={cx('detail-name')}>
                        {datas.user.nickname}
                        {datas.user.tick && (
                            <span style={{ color: '#20D5EC' }}>
                                <FaCheckCircle className={cx('check')} />
                            </span>
                        )}
                    </p>
                    <p className={cx('detail-desc')}>{datas.description}</p>
                </div>
                {/* video progress bar */}
                <div ref={videoProgress} onMouseDown={handleProgressMouseDown} className={cx('video-progress')}>
                    <div style={{ width: `${progress}%` }} className={cx('progress-fill')}></div>
                </div>
                {/* Nút bật/tắt âm thanh */}
                <div className={cx('volume-control')}>
                    <div className={cx('volume-wrap')}>
                        <button onClick={toggleMute}>{isMuted ? '🔇' : '🔊'}</button>

                        {/* Thanh chỉnh âm lượng */}
                        <div className={cx('volume-bar')} ref={volumeBarRef} onMouseDown={handleVolumeMouseDown}>
                            <div className={cx('volume-line')}>
                                <div
                                    className={cx('volume-fill')}
                                    style={{ width: `${volume * 100}%` }} // Hiển thị mức âm lượng hiện tại
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VideoContent;
