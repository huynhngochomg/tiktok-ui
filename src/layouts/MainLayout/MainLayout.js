import styles from './MainLayout.module.scss'
import classNames from 'classnames/bind';
import Header from "../components/Header";
import Sidebar from "~/layouts/components/Sidebar";
import PropTypes from 'prop-types';

const cx = classNames.bind(styles)

function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>

        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayout;