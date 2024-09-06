import PropTypes from 'prop-types';
import './GlobalStyle.scss';
function GlobalStyte({ children }) {
    return children;
}
GlobalStyte.propTypes = {
    children: PropTypes.node.isRequired,
};
export default GlobalStyte;
