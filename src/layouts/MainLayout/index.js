import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
import style from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

function MainLayout({ children, currentUser }) {
    const cx = classNames.bind(style);
    return (
        <div className={cx('wrapper')}>
            <Header currentUser={currentUser} />
            <div className={cx('container')}>
                <Sidebar currentUser={currentUser} />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default MainLayout;
