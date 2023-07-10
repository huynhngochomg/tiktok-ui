import config from '~/config';
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, HomeActiveIcon, GroupUserIcon, GroupUserActiveIcon, CompassIcon, CompassActiveIcon, LiveIcon, LiveActiveIcon } from '~/components/Icons'
import SuggestedAccounts from '~/components/SuggestedAccounts';
import Footer from '~/layouts/components/Sidebar/Footer';
import Button from '~/components/Button/Button';
import { ModalContext } from '~/components/ModalProvider'
import { useContext, useEffect, useState } from 'react';
import * as suggestedAccountService from '~/services/suggestedAccountService';




const cx = classNames.bind(styles)

function Sidebar() {
    const currentUser = true;
    const context = useContext(ModalContext)


    const [seeAll, setSeeAll] = useState(true)
    const [accounts, setAccounts] = useState([])

    useEffect(() => {

        const fetchApi = async () => {
            if (seeAll) {
                const result = await suggestedAccountService.suggest(1, 10)
                setAccounts(result)
            }
            else {
                const result = await suggestedAccountService.suggest(1, 20)
                setAccounts(result)
            }
        }
        fetchApi()
    }, [seeAll])


    return (
        <aside className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('menu-container')}>
                    <Menu>
                        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                        <MenuItem title="Following" to={config.routes.following} icon={<GroupUserIcon />} activeIcon={<GroupUserActiveIcon />} />
                        <MenuItem title="Explore" to={config.routes.explore} icon={<CompassIcon />} activeIcon={<CompassActiveIcon />} />
                        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                    </Menu>
                </div>
                {currentUser ? (
                    <div className={cx('following-container')}>
                        <p className={cx('label')}>Following accounts</p>
                        {accounts.map((account) => (
                            <SuggestedAccounts data={account} key={account.id} />
                        ))}
                        {seeAll ? <div className={cx('see-all')} onClick={() => setSeeAll(false)}>See all</div> : <div className={cx('see-all')} onClick={() => setSeeAll(true)}>See less</div>}
                    </div>
                ) : (
                    <div className={cx('login-container')}>
                        <h4 className={cx('login-content')}>
                            Log in to follow creators, like videos, and view comments.
                        </h4>
                        <Button outline large onClick={context.handleShowModal}>Login</Button>
                    </div>
                )
                }
                <div className={cx('footer')}><Footer /></div>
            </div>
        </aside >
    );
}

export default Sidebar;