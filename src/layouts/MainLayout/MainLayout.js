import styles from './MainLayout.module.scss'
import classNames from 'classnames/bind';
import { useContext } from 'react';

import Header from "../components/Header";
import Sidebar from "~/layouts/components/Sidebar";
import PropTypes from 'prop-types';
import { ModalContext } from '~/components/ModalProvider';
import ModalForm from '~/components/ModalForm';
import GetApp from '~/components/GetApp/GetApp';

const cx = classNames.bind(styles)

function MainLayout({ children }) {

    const context = useContext(ModalContext)

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('sidebar')}><Sidebar /></div>
                <div className={cx('content')}>
                    {children}
                    <GetApp />
                </div>
            </div>
            {context.active && <ModalForm onHide={context.handleHideModal} />}
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayout;