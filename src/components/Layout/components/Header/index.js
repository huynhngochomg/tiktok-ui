
import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEllipsisVertical, faLanguage, faGear, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion, faKeyboard, faMoon, faUser, faBookmark } from '@fortawesome/free-regular-svg-icons'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';



const cx = classNames.bind(styles)

function Header() {

    // Menu item
    const MENU_ITEM = [
        {
            icon: <FontAwesomeIcon icon={faLanguage} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        code: "en",
                        title: "English"
                    },
                    {
                        code: "vi",
                        title: "Tiếng Việt"
                    },
                ]
            }
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts'
        },
    ];

    // Menu User
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Favorites',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Get coins',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/feedback'
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faMoon} />,
            title: 'Dark mode',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
            title: 'Log out',
            to: '/feedback',
            separate: true,
        },
    ]

    // Handle
    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
    }

    const currentUser = true

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>

            {/* Logo */}
            <div className={cx('logo')}>
                <img src={images.logo} alt='Tiktok' />
            </div>

            {/* Search */}
            <Search />

            {/* Action Account */}
            <div className={cx('action')}>
                {currentUser ? (
                    <>
                        <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                            Upload
                        </Button>
                        <Tippy delay={[0, 100]} content="Messages" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <UploadIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 100]} content="Inbox" placement='bottom'>
                            <button className={cx('action-btn', 'notice-btn')}>
                                <MessageIcon />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
                        <Button primary>Log in</Button>
                    </>
                )}
                <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                    {currentUser ? (
                        <Image
                            className={cx('user-avatar')}
                            src="1https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b2769441f7afc4dd6e44c8d50c388cd8~c5_100x100.jpeg?x-expires=1688194800&x-signature=sa6WFHnmD%2BD6lJRL2ZIIdVJMosQ%3D"
                            alt='Nguyen van a'
                        //fallback='https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'
                        />
                    ) : (

                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>
        </div >
    </header >
}

export default Header;