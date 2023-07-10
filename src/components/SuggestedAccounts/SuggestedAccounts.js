import classNames from "classnames/bind";
import styles from './SuggestedAccounts.module.scss'
import PropTypes from 'prop-types';
import HeadlessTippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";


import AccountPreview from "~/components/AccountPreview/AccountPreview";
import Popper from "~/components/Popper/Popper";
import Image from "~/components/Image/Image";


const cx = classNames.bind(styles)
function SuggestedAccounts({ data, ...props }) {

    const renderPreview = attrs => (
        <div tabIndex='-1' {...attrs}>
            <Popper>
                <AccountPreview data={data} />
            </Popper>
        </div>
    )

    return (
        <div className={cx('wrapper')}>
            <HeadlessTippy
                appendTo={document.body}
                offset={[-30, -6]}
                delay={[500, 100]}
                interactive
                placement='bottom-end'
                render={renderPreview}
            >
                <Link to={`/@${data?.nickname}`} className={cx('account-item')} state={data}>
                    <Image
                        className={cx('avatar')}
                        src={data?.avatar}
                        alt={data?.avatar}
                    />
                    <div className={cx('info')}>
                        <h4 className={cx('username')}>
                            <span>{data?.nickname}</span>
                            {data?.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                        </h4>
                        <span className={cx('name')}>{data?.full_name || `${data?.first_name} ${data?.last_name}`}</span>
                    </div>
                </Link>
            </HeadlessTippy>
        </div>
    )
}

SuggestedAccounts.propTypes = {
    data: PropTypes.object.isRequired
}

export default SuggestedAccounts;