import Popper from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner, faMagnifyingGlass, } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService'
import { Link } from 'react-router-dom';



const cx = classNames.bind(styles)


function Search() {
    const inputRef = useRef()
    const [showResult, setShowResult] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(false)

    const debouncedValue = useDebounce(searchValue, 500)

    useEffect(() => {
        if (!debouncedValue.trim()) {
            return
        }

        const fetchApi = async () => {
            setLoading(true)
            const result = await searchService.search(debouncedValue);
            setSearchResult(result)
            setLoading(false)
        }

        fetchApi()
    }, [debouncedValue])

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    const handleSpaceInput = (e) => {
        if (!e.target.value.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    }

    const handleHideResult = () => {
        setShowResult(false);
    }

    const handleShowResult = attrs => (
        <div className={cx('search-result')} tabIndex='-1' {...attrs}>
            <Popper>
                <h4 className={cx('search-title')}>Account</h4>
                {searchResult.map((result) => (
                    <AccountItem key={result.id} data={result} state={result} />
                ))}
                <Link to='/' className={cx('search-value')}>View all results for "{searchValue}"</Link>
            </Popper>
        </div>
    )

    return (
        <HeadlessTippy
            appendTo={() => document.body}
            interactive
            visible={showResult && searchResult.length > 0 && searchValue}
            onClickOutside={handleHideResult}
            render={handleShowResult}>
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Search'
                    spellCheck={false}
                    onChange={handleSpaceInput}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;