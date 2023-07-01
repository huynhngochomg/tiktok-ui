import classNames from "classnames/bind";
import styles from "./Popper.module.scss";
import PropTypes from 'prop-types';

const cx = classNames.bind(styles)

function Wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>
        {children}
    </div>
}

classNames.propTypes = {
    children: PropTypes.node.isRequired,
    classNames: PropTypes.string
}
export default Wrapper;