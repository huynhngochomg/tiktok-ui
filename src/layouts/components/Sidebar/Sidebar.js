import config from '~/config';
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, HomeActiveIcon, GroupUserIcon, GroupUserActiveIcon, CompassIcon, CompassActiveIcon, LiveIcon, LiveActiveIcon } from '~/components/Icons'
const cx = classNames.bind(styles)


function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<GroupUserIcon />} activeIcon={<GroupUserActiveIcon />} />
                <MenuItem title="Explore" to={config.routes.explore} icon={<CompassIcon />} activeIcon={<CompassActiveIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;