import { Fragment, useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import Tippy from '@tippyjs/react/headless';

import * as searchSevice from '../../../../apiSevices/searchSevice';
import { FaCircleXmark, FaMagnifyingGlass } from 'react-icons/fa6';
import { BiLoaderCircle } from 'react-icons/bi';
import { useDebounce } from '../../../../hooks';
import AccountItem from '../../../AccountItem';
import { Wrapper as PopperWrapper } from '../../../Popper';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 400);
    const inputRef = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        const fetchApi = async () => {
            setLoading(true);
            const result = await searchSevice.search(debounce);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounce]);

    const handleClearBtn = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleClickOutside = () => {
        setShowResult(false);
    };
    return (
        <Fragment>
            <Tippy
                visible={showResult && searchResult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h3 className={cx('search-title')}>Account</h3>
                            <div className={cx('search-list')}>
                                {searchResult.map((data) => (
                                    <AccountItem key={data.id} data={data} />
                                ))}
                            </div>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleClickOutside}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search"
                        spellCheck={false}
                        className={cx('search-input')}
                        onChange={(e) => {
                            if (!e.target.value.startsWith(' ')) {
                                setSearchValue(e.target.value);
                            }
                        }}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('search-clear')} onClick={handleClearBtn}>
                            <FaCircleXmark />
                        </button>
                    )}
                    {loading && <BiLoaderCircle className={cx('search-loading')} />}
                    <button className={cx('search-btn')}>
                        <FaMagnifyingGlass />
                    </button>
                </div>
            </Tippy>
        </Fragment>
    );
}

export default Search;
