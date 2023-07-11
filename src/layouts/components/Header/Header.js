
import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEllipsisVertical, faLanguage, faGear, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion, faKeyboard, faMoon, faUser, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import Tippy from '@tippyjs/react';
import { useContext } from 'react'
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import { MessageIcon, UploadIcon } from '~/components/Icons';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import { ModalContext } from '~/components/ModalProvider'


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
                    {
                        code: "spain",
                        title: "Español"
                    },
                    {
                        code: "indo",
                        title: "Bahasa Indonesia"
                    },
                    {
                        code: "phi",
                        title: "Filipino (Pilipinas)"
                    },
                    {
                        code: "fance",
                        title: "Français"
                    },
                    {
                        code: "dan",
                        title: "Deutsch"
                    },
                    {
                        code: "tur",
                        title: "Türkçe (Türkiye)"
                    },
                    {
                        code: "malai",
                        title: "Bahasa Melayu "
                    },
                    {
                        code: "indo",
                        title: "Basa Jawa (Indonesia)"
                    },
                    {
                        code: "korea",
                        title: "한국어 (대한민국)"
                    },
                    {
                        code: "china",
                        title: "日本語（日本)"
                    }, {
                        code: "thailand",
                        title: "ไทย (ไทย)"
                    },
                    {
                        code: "russia",
                        title: "Русский (Россия)"
                    },

                ]
            }
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/'
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
            to: '/'
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Favorites',
            to: '/'
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Get coins',
            to: '/'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/'
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faMoon} />,
            title: 'Dark mode',
            to: '/'
        },
        {
            icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
            title: 'Log out',
            to: '/',
            separate: true,
        },
    ]

    const context = useContext(ModalContext);
    const currentUser = true

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>

            {/* Logo */}
            <Link to={config.routes.home} className={cx('logo')}>
                <img src={images.logo} alt='Tiktok' />
            </Link>

            {/* Search */}
            <div className={cx('search-container')}><Search /></div>

            {/* Action Account */}
            <div className={cx('action')}>
                {currentUser ? (
                    <>
                        <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />} onClick={context.handleShowModal}>
                            Upload
                        </Button>
                        <Tippy delay={[0, 100]} content="Messages" placement='bottom'>
                            <button className={cx('action-btn', 'message-btn')} onClick={context.handleShowModal}>
                                <UploadIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 100]} content="Inbox" placement='bottom'>
                            <button className={cx('action-btn', 'inbox-btn')} onClick={context.handleShowModal}>
                                <MessageIcon />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />} onClick={context.handleShowModal}>Upload</Button>
                        <Button primary onClick={context.handleShowModal}>Log in</Button>
                    </>
                )}
                <Menu items={currentUser ? userMenu : MENU_ITEM}>
                    {currentUser ? (
                        <Image
                            className={cx('user-avatar')}
                            src="1https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b2769441f7afc4dd6e44c8d50c388cd8~c5_100x100.jpeg?x-expires=1688194800&x-signature=sa6WFHnmD%2BD6lJRL2ZIIdVJMosQ%3D"
                            alt='Nguyen van a'
                            fallback='https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'
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