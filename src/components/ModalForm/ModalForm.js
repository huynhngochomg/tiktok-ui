import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ModalForm.module.scss'
import classNames from 'classnames/bind';

import images from '~/assets/images';
import { UserIcon, QRIcon, XMarkIcon, ChevronDownIcon } from '../Icons';
import Button from '../Button/Button';

const cx = classNames.bind(styles)

function ModalForm({ onHide }) {
    const [formLoginState, setFormLoginState] = useState('login');
    const [filteredForm, setFilteredForm] = useState([]);

    const loginRegisterForm = useMemo(() => [
        {
            type: 'login',
            title: 'Log in to TikTok',
            contents: [
                {
                    icon: <QRIcon />,
                    title: 'Use QR code',
                    link: '/'
                },
                {
                    icon: <UserIcon />,
                    title: 'Use phone / email / username',
                    link: '/'
                },
                {
                    icon: <img src={images.facebook} alt="" />,
                    title: 'Continue with Facebook',
                    link: 'https://facebook.com'
                },
                {
                    icon: <img src={images.google} alt="" />,
                    title: 'Continue with Google',
                    link: 'https://accounts.google.com'
                },
                {
                    icon: <img src={images.twitter} alt="" />,
                    title: 'Continue with Twitter',
                    link: 'https://twitter.com/login'
                },
                {
                    icon: <img src={images.line} alt="" />,
                    title: 'Continue with LINE',
                    link: 'https://access.line.me/oauth2/v2.1/login?returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fclient_id%3D1569196861%26redirect_uri%3Dhttps%253A%252F%252Fwww.tiktok.com%252FoauthLine%252F%26response_type%3Dcode%26scope%3Dopenid%2Bprofile%26state%3D1line&loginChannelId=1569196861&loginState=qSKMcj4OjpDpGWWtw5EPaK#/'
                },
                {
                    icon: <img src={images.kakaotalk} alt="" />,
                    title: 'Continue with KakaoTalk',
                    link: 'https://accounts.kakao.com'
                },
                {
                    icon: <img src={images.apple} alt="" />,
                    title: 'Continue with Apple',
                    link: 'https://appleid.apple.com'
                },
                {
                    icon: <img src={images.instagram} alt="" />,
                    title: 'Continue with Instagram',
                    link: 'https://instagram.com'
                },
            ]
        },
        {
            type: 'register',
            title: 'Sign up for TikTok',
            showMore: true,
            contents: [
                {
                    icon: <UserIcon />,
                    title: 'Use phone or email',
                    link: '/'
                },
                {
                    icon: <img src={images.facebook} alt="" />,
                    title: 'Continue with Facebook',
                    link: 'https://facebook.com'
                },
                {
                    icon: <img src={images.google} alt="" />,
                    title: 'Continue with Google',
                    link: 'https://accounts.google.com'
                },
            ]
        },
        {
            type: 'register-expanded',
            title: 'Sign up for TikTok',
            contents: [
                {
                    icon: <UserIcon />,
                    title: 'Use phone or email',
                    link: '/'
                },
                {
                    icon: <img src={images.facebook} alt="" />,
                    title: 'Continue with Facebook',
                    link: 'https://facebook.com'
                },
                {
                    icon: <img src={images.google} alt="" />,
                    title: 'Continue with Google',
                    link: 'https://accounts.google.com'
                },
                {
                    icon: <img src={images.twitter} alt="" />,
                    title: 'Continue with Twitter',
                    link: 'https://twitter.com/login'
                },
                {
                    icon: <img src={images.line} alt="" />,
                    title: 'Continue with LINE',
                    link: 'https://access.line.me/oauth2/v2.1/login?returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fclient_id%3D1569196861%26redirect_uri%3Dhttps%253A%252F%252Fwww.tiktok.com%252FoauthLine%252F%26response_type%3Dcode%26scope%3Dopenid%2Bprofile%26state%3D1line&loginChannelId=1569196861&loginState=qSKMcj4OjpDpGWWtw5EPaK#/'
                },
                {
                    icon: <img src={images.kakaotalk} alt="" />,
                    title: 'Continue with KakaoTalk',
                    link: 'https://accounts.kakao.com'
                },
            ]
        }
    ], [])

    useEffect(() => {
        const newForm = loginRegisterForm.find(form => form.type === formLoginState)
        setFilteredForm(newForm)
    }, [loginRegisterForm, formLoginState])


    return (
        <div className={cx('modal-mask')}>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('inner')}>
                        <div className={cx('title')}>{filteredForm.title}</div>
                        <div className={cx('list')}>
                            {filteredForm.contents?.map((content, index) => (
                                <Button className={cx('item')} to={content.link} target='blank' key={index} style={{ height: '44px', marginBottom: '16px' }} onClick={content.onClick}>
                                    <span className={cx('icon')}>{content.icon}</span> <span>{content.title}</span>
                                </Button>
                            ))}
                            {filteredForm.showMore && <div className={cx('more-btn')} onClick={() => setFormLoginState('register-expanded')}><ChevronDownIcon /></div>}
                        </div>
                    </div>
                    {formLoginState && <div className={cx('agreement')}>
                        <p> By continuing, you agree to TikTok's <Link to="/">Terms of Service</Link> and confirm that you have read TikTok's <Link to="/">Privacy Policy</Link>.</p>
                    </div>
                    }

                    <div className={cx('footer')}>
                        {formLoginState === 'login' ?
                            <>Don't have an account? <p onClick={() => setFormLoginState('register')}>Sign Up</p></>
                            :
                            <>Already have an account? <p onClick={() => setFormLoginState('login')}>Log in</p></>
                        }
                    </div>
                </div>
                <div className={cx('close-btn')} onClick={onHide}> <XMarkIcon /> </div>
            </div>
        </div >
    );
}

export default ModalForm;