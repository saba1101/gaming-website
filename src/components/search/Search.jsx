import style from '@/components/search/Search.module.scss'

const Search = ({ value, onChange }) => {
    return (
        <>
            <div className={style.searchField}>
                <div className={style.icon}>
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g>
                            <path
                                d="M14.9084 14.0247L10.5511 9.66728C11.3775 8.64696 11.875 7.34981 11.875 5.93752C11.875 2.66359 9.21142 0 5.93749 0C2.66356 0 0 2.66359 0 5.93752C0 9.21145 2.66359 11.875 5.93752 11.875C7.34981 11.875 8.64696 11.3775 9.66729 10.5511L14.0247 14.9085C14.1468 15.0305 14.3446 15.0305 14.4667 14.9085L14.9085 14.4666C15.0305 14.3446 15.0305 14.1467 14.9084 14.0247ZM5.93752 10.625C3.35268 10.625 1.25001 8.52236 1.25001 5.93752C1.25001 3.35268 3.35268 1.25001 5.93752 1.25001C8.52236 1.25001 10.625 3.35268 10.625 5.93752C10.625 8.52236 8.52236 10.625 5.93752 10.625Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_638">
                                <rect
                                    width="15"
                                    height="15"
                                    fill="white"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <input
                    type="text"
                    value={value}
                    placeholder="Search...."
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </>
    )
}

export default Search
