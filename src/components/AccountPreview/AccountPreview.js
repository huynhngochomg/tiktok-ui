import classNames from "classnames/bind";
import styles from './AccountPreview.module.scss'
import Image from "~/components/Image";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import { useContext } from "react";
import { ModalContext } from "../ModalProvider";


const cx = classNames.bind(styles)


function AccountPreview({ data }) {

    const context = useContext(ModalContext)

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src={data?.avatar}
                    alt={data?.avatar}
                />

                <Button outline onClick={context.handleShowModal}>Follow</Button>
            </div>
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>{data?.nickname}</span>
                    {data?.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                </h4>
                <span className={cx('name')}>{data?.full_name || `${data?.first_name} ${data?.last_name}`}</span>
            </div>
            <div className={cx('statistic')}>
                <strong className={cx('value')}>{data?.followers_count}</strong>
                <span className={cx('label')} >Followers</span>
                <strong className={cx('value')}>{data?.likes_count}</strong>
                <span className={cx('label')}>Likes</span>
            </div>
            {data?.bio && <div className={cx('line')}></div>}
            {data?.bio && <div className={cx('bio')}>{data?.bio}</div>}

        </div>
    );
}
AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
}


export default AccountPreview;