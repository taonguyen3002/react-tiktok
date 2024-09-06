import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import style from './Image.module.scss';
import image from '../../assets/image';
import PropTypes from 'prop-types';
const Image = forwardRef(({ src, alt, className, fallBack: customFB = image.user, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');
    const handleErr = () => {
        setFallBack(customFB);
    };
    return (
        <img
            ref={ref}
            alt={alt}
            src={fallBack || src}
            onError={handleErr}
            className={classNames(style.wrapper, className)}
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
