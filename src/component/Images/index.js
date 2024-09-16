import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import image from '../../assets/image';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';
const Image = forwardRef(({ src, alt, style, className, fallBack: customFB = image.user, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');
    const handleErr = () => {
        setFallBack(customFB);
    };
    return (
        <img
            ref={ref}
            alt={alt}
            style={style}
            src={fallBack || src}
            onError={handleErr}
            className={classNames(styles.wrapper, className)}
            {...props}
        />
    );
});
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
};
export default Image;
