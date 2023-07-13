
import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEllipsisVertical, faLanguage, faGear, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion, faKeyboard, faMoon, faUser, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import Tippy from '@tippyjs/react';
import { useContext, useState } from 'react'
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import { MessageIcon, UploadIcon } from '~/components/Icons';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Menu';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import { ModalContext } from '~/components/ModalProvider'


const cx = classNames.bind(styles)

function Header() {
    const [isDark, setIsDark] = useState(true)

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
        {
            icon: <FontAwesomeIcon icon={faMoon} />,
            title: 'Dark mode',
            mode: true
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
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="118" height="42" fill="currentColor" alt="TikTok">
                        <path fill="#25F4EE" d="M9.875 16.842v-1.119A8.836 8.836 0 0 0 8.7 15.64c-4.797-.006-8.7 3.9-8.7 8.707a8.706 8.706 0 0 0 3.718 7.135A8.675 8.675 0 0 1 1.38 25.55c0-4.737 3.794-8.598 8.495-8.707Z"></path>
                        <path fill="#25F4EE" d="M10.086 29.526c2.14 0 3.89-1.707 3.967-3.83l.006-18.968h3.463a6.78 6.78 0 0 1-.11-1.202h-4.726l-.006 18.969a3.978 3.978 0 0 1-3.967 3.829 3.93 3.93 0 0 1-1.846-.46 3.949 3.949 0 0 0 3.22 1.662Zm13.906-16.36v-1.055a6.506 6.506 0 0 1-3.583-1.068 6.571 6.571 0 0 0 3.583 2.123Z"></path>
                        <path fill="#FE2C55" d="M20.409 11.043a6.54 6.54 0 0 1-1.616-4.315h-1.265a6.557 6.557 0 0 0 2.88 4.316ZM8.706 20.365a3.98 3.98 0 0 0-3.973 3.976c0 1.528.869 2.858 2.134 3.523a3.936 3.936 0 0 1-.754-2.321 3.98 3.98 0 0 1 3.973-3.976c.409 0 .805.07 1.175.185v-4.833a8.837 8.837 0 0 0-1.175-.083c-.07 0-.134.006-.204.006v3.708a3.999 3.999 0 0 0-1.176-.185Z"></path>
                        <path fill="#FE2C55" d="M23.992 13.166v3.676c-2.453 0-4.727-.786-6.58-2.116v9.621c0 4.802-3.902 8.714-8.706 8.714a8.669 8.669 0 0 1-4.988-1.579 8.69 8.69 0 0 0 6.368 2.781c4.797 0 8.707-3.906 8.707-8.714v-9.621a11.25 11.25 0 0 0 6.579 2.116v-4.73c-.48 0-.94-.052-1.38-.148Z"></path>
                        <path fill="currentColor" d="M17.413 24.348v-9.622a11.251 11.251 0 0 0 6.58 2.116v-3.676a6.571 6.571 0 0 1-3.584-2.123 6.61 6.61 0 0 1-2.888-4.315H14.06l-.006 18.968a3.978 3.978 0 0 1-3.967 3.83A3.99 3.99 0 0 1 6.86 27.87a3.991 3.991 0 0 1-2.133-3.523A3.98 3.98 0 0 1 8.7 20.372c.409 0 .805.07 1.175.185v-3.708c-4.701.103-8.495 3.964-8.495 8.701 0 2.29.888 4.373 2.338 5.933a8.669 8.669 0 0 0 4.988 1.58c4.798 0 8.707-3.913 8.707-8.714Zm12.635-11.169h14.774l-1.354 4.232h-3.832v15.644h-4.778V17.41l-4.804.006-.006-4.238Zm38.984 0h15.12l-1.355 4.232h-4.17v15.644h-4.785V17.41l-4.804.006-.006-4.238ZM45.73 19.502h4.733v13.553h-4.708l-.026-13.553Zm6.617-6.374h4.733v9.257l4.689-4.61h5.646l-5.934 5.76 6.644 9.52h-5.213l-4.433-6.598-1.405 1.362v5.236H52.34V13.128h.006Zm50.143 0h4.734v9.257l4.688-4.61h5.647l-5.934 5.76 6.643 9.52h-5.206l-4.433-6.598-1.405 1.362v5.236h-4.734V13.128Zm-54.397 4.826a2.384 2.384 0 0 0 2.382-2.384 2.384 2.384 0 1 0-2.382 2.384Z"></path>
                        <path fill="#25F4EE" d="M83.544 24.942a8.112 8.112 0 0 1 7.474-8.087 8.748 8.748 0 0 0-.709-.026c-4.478 0-8.106 3.631-8.106 8.113 0 4.482 3.628 8.113 8.106 8.113.21 0 .498-.013.71-.026-4.178-.326-7.475-3.823-7.475-8.087Z">
                        </path>
                        <path fill="#FE2C55" d="M92.858 16.83c-.217 0-.505.012-.716.025a8.111 8.111 0 0 1 7.468 8.087 8.112 8.112 0 0 1-7.468 8.087c.211.02.499.026.716.026 4.478 0 8.106-3.631 8.106-8.113 0-4.482-3.628-8.113-8.106-8.113Z"></path>
                        <path fill="currentColor" d="M91.58 28.887a3.94 3.94 0 0 1-3.94-3.945 3.94 3.94 0 1 1 7.882 0c0 2.18-1.77 3.945-3.942 3.945Zm0-12.058c-4.477 0-8.106 3.631-8.106 8.113 0 4.482 3.629 8.113 8.106 8.113 4.478 0 8.106-3.631 8.106-8.113 0-4.482-3.628-8.113-8.106-8.113Z"></path>
                    </svg>
                </i>
                {/* <img src={images.logoTiktokLight} alt='Tiktok' /> */}
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