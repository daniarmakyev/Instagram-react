import React from 'react'
import styles from "./sidebar.module.css"
import { NavLink } from 'react-router-dom'
const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <nav>
            <NavLink className={styles.logo}><svg  width="150" height="133" viewBox="0 0 469 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.1496 0.461076C14.5469 4.47815 3.98761 15.815 0.654782 30.0743C-3.57368 48.1257 14.0061 55.7488 15.4425 53.2616C17.1326 50.3117 12.2823 49.3216 11.2919 39.9618C10.0175 27.8581 15.6319 14.3352 22.7166 8.40146C24.0381 7.31679 23.974 8.84749 23.974 11.6692C23.974 16.758 23.69 62.2869 23.69 71.7922C23.69 84.6595 23.1627 88.711 22.1893 92.7117C21.2326 96.7802 19.6847 99.5238 20.8508 100.592C22.1723 101.771 27.7867 98.9629 31.0417 94.4215C34.9355 88.9812 36.3078 82.4428 36.5613 75.3468C36.8485 66.8012 36.8317 53.2143 36.8485 45.4797C36.8485 38.3667 36.96 17.5722 36.7369 5.05292C36.6728 1.99178 28.155 -1.21509 24.1496 0.461076ZM466.881 68.0114C465.509 68.0114 464.856 69.4473 464.329 71.8566C462.511 80.2603 460.598 82.1559 458.123 82.1559C455.365 82.1559 452.891 77.9964 452.239 69.6703C451.745 63.1319 451.823 51.0756 452.462 39.0834C452.59 36.6269 451.918 34.1905 445.313 31.7814C442.46 30.7608 438.326 29.2301 436.271 34.2042C430.447 48.2238 428.183 59.3847 427.639 63.899C427.626 64.1354 427.338 64.1694 427.287 63.6286C426.956 60.0064 426.189 53.4205 426.094 39.5768C426.06 36.9006 425.502 34.5858 422.504 32.7039C420.574 31.494 414.703 29.3247 412.58 31.8929C410.762 33.9979 408.642 39.6442 406.425 46.3416C404.637 51.7953 403.393 55.4954 403.393 55.4954C403.393 55.4954 403.406 40.7897 403.441 35.2077C403.441 33.1025 402.004 32.4031 401.575 32.2746C399.611 31.7003 395.734 30.7608 394.108 30.7608C392.084 30.7608 391.604 31.8929 391.604 33.5351C391.604 33.7412 391.269 52.8767 391.269 66.2576V68.1396C390.167 74.2964 386.534 82.6526 382.593 82.6526C378.651 82.6526 376.785 79.1586 376.785 63.213C376.785 53.914 377.073 49.866 377.201 43.1349C377.279 39.259 377.438 36.2787 377.424 35.5929C377.391 33.5351 373.801 32.4809 372.141 32.0989C370.468 31.7003 369.015 31.5718 367.869 31.6192C366.274 31.717 365.141 32.768 365.141 34.2379V36.468C363.083 33.2173 359.747 30.9502 357.516 30.2978C351.55 28.5274 345.31 30.1052 340.605 36.6741C336.874 41.9083 334.622 47.8216 333.747 56.3233C333.091 62.5439 333.301 68.8426 334.464 74.1679C333.061 80.1792 330.475 82.6526 327.653 82.6526C323.536 82.6526 320.572 75.952 320.906 64.3585C321.146 56.7389 322.661 51.3967 324.334 43.6451C325.054 40.3437 324.462 38.6239 323.012 36.9478C321.687 35.4475 318.848 34.6669 314.782 35.6064C311.892 36.2924 307.731 37.0256 303.948 37.5864C303.948 37.5864 304.171 36.6741 304.364 35.0658C305.338 26.6282 296.164 27.3142 293.244 30.0107C291.49 31.6192 290.293 33.5181 289.847 36.931C289.13 42.3544 293.548 44.9054 293.548 44.9054C292.098 51.5386 288.556 60.2124 284.871 66.4807C282.907 69.8462 281.407 72.3196 279.463 74.9654C279.446 73.9922 279.446 73.0021 279.446 72.0322C279.412 58.077 279.588 47.0917 279.669 43.1349C279.75 39.259 279.909 36.3565 279.909 35.6705C279.875 34.1702 278.999 33.5823 277.147 32.8795C275.521 32.2442 273.591 31.7814 271.597 31.6192C269.092 31.4299 267.561 32.768 267.609 34.3461V36.468C265.537 33.2173 262.2 30.9502 260 30.2978C254.017 28.5274 247.781 30.1052 243.076 36.6741C239.358 41.9083 236.901 49.2273 236.198 56.2422C235.562 62.8143 235.674 68.3626 236.566 73.0528C235.609 77.7394 232.882 82.6526 229.789 82.6526C225.848 82.6526 223.597 79.1586 223.597 63.213C223.597 53.914 223.884 49.866 224.029 43.1349C224.107 39.259 224.252 36.2787 224.235 35.5929C224.218 33.5351 220.632 32.4809 218.956 32.0989C217.218 31.6866 215.701 31.5584 214.552 31.6192C213.02 31.7474 211.952 33.1025 211.952 34.1398V36.468C209.88 33.2173 206.544 30.9502 204.327 30.2978C198.361 28.5274 192.172 30.1392 187.433 36.6741C184.341 40.9352 181.836 45.6692 180.545 56.1644C180.193 59.1954 180.018 62.0305 180.034 64.6796C178.804 72.2046 173.366 80.8819 168.931 80.8819C166.315 80.8819 163.827 75.8405 163.827 65.0782C163.827 50.758 164.719 30.3452 164.878 28.3685C164.878 28.3685 170.492 28.2704 171.594 28.257C174.386 28.24 176.938 28.3044 180.656 28.1118C182.539 28.0172 184.341 21.3029 182.394 20.4583C181.532 20.0898 175.343 19.7553 172.885 19.7081C170.814 19.6607 165.084 19.2317 165.084 19.2317C165.084 19.2317 165.598 5.69182 165.71 4.27262C165.804 3.05947 164.273 2.45479 163.381 2.08631C161.224 1.16383 159.294 0.731483 157.03 0.268471C153.856 -0.383597 152.436 0.25504 152.166 2.91425C151.75 6.95211 151.527 18.7856 151.527 18.7856C149.198 18.7856 141.302 18.3193 138.987 18.3193C136.837 18.3193 134.505 27.571 137.49 27.6825C140.92 27.8109 146.869 27.9394 150.824 28.0474C150.824 28.0474 150.648 48.798 150.648 55.1912V57.168C148.465 68.5045 140.822 74.6309 140.822 74.6309C142.465 67.1193 139.115 61.4897 133.055 56.7389C130.821 54.9682 126.42 51.6331 121.488 48.0142C121.488 48.0142 124.344 45.1928 126.879 39.5464C128.668 35.5423 128.749 30.9365 124.344 29.9296C117.07 28.257 111.088 33.5992 109.286 39.3064C107.914 43.7092 108.634 46.9936 111.358 50.3896L111.98 51.1567C110.354 54.3126 108.09 58.5702 106.19 61.8716C100.88 71.0424 96.8744 78.2835 93.8595 78.2835C91.436 78.2835 91.4664 70.9309 91.4664 64.0409C91.4664 58.1074 91.9126 49.163 92.2642 39.9146C92.3757 36.8667 90.8446 35.113 88.2791 33.5351C86.714 32.5787 83.3948 30.6967 81.4649 30.6967C78.5952 30.6967 70.2665 31.0784 62.4046 53.8025C61.4141 56.6745 59.4672 61.8886 59.4672 61.8886L59.6431 34.5554C59.6431 33.9168 59.3085 33.3121 58.5277 32.8795C57.2027 32.1631 53.6467 30.6967 50.5203 30.6967C49.0025 30.6967 48.2522 31.3995 48.2522 32.785L47.9986 75.5229C47.9986 78.777 48.0765 82.5715 48.3977 84.2307C48.7153 85.8896 49.2426 87.2447 49.8814 88.0557C50.5203 88.8395 51.2673 89.4445 52.4806 89.7149C53.613 89.9546 59.8492 90.7352 60.1704 88.3598C60.5692 85.5044 60.5826 82.4296 63.8546 70.9004C68.9585 52.9745 75.597 44.2363 78.7235 41.1243C79.2812 40.5837 79.9033 40.55 79.8693 41.4453C79.7274 45.3818 79.2645 55.1912 78.9466 63.5308C78.1016 85.8729 82.1509 90.002 87.9749 90.002C92.4095 90.002 98.6627 85.5855 105.379 74.4246C109.574 67.4538 113.626 60.645 116.56 55.7184C118.571 57.597 120.866 59.6244 123.148 61.7938C128.461 66.8152 130.199 71.5999 129.036 76.1312C128.157 79.6047 124.824 83.1765 118.906 79.7027C117.182 78.6959 116.449 77.9153 114.711 76.7663C113.785 76.1446 112.348 75.969 111.503 76.6076C109.269 78.2835 108.008 80.4022 107.275 83.0345C106.589 85.6025 109.158 86.9406 111.821 88.1198C114.103 89.1573 119.017 90.0661 122.158 90.1776C134.393 90.5933 144.189 84.2778 151 68.0114C152.23 82.0614 157.411 90.019 166.426 90.019C172.47 90.019 178.517 82.22 181.167 74.5498C181.914 77.6753 183.046 80.3852 184.5 82.7C191.456 93.702 204.949 91.3434 211.712 81.997C213.818 79.0945 214.139 78.0572 214.139 78.0572C215.126 86.8798 222.241 89.985 226.311 89.985C230.887 89.985 235.579 87.8192 238.878 80.3852C239.277 81.1997 239.693 81.9666 240.173 82.7C247.112 93.702 260.605 91.3434 267.386 81.997C267.69 81.5342 267.977 81.1523 268.214 80.7841L268.423 86.5891C268.423 86.5891 264.546 90.1305 262.17 92.3133C251.722 101.9 243.776 109.171 243.188 117.622C242.454 128.418 251.195 132.422 257.83 132.946C264.851 133.507 270.881 129.631 274.578 124.177C277.833 119.393 279.973 109.107 279.814 98.9328C279.75 94.8508 279.652 89.6845 279.557 84.1192C283.242 79.8783 287.389 74.4854 291.188 68.1736C295.349 61.314 299.784 52.0792 302.048 44.8887C302.048 44.8887 305.925 44.9224 310.042 44.6656C311.367 44.5845 311.749 44.8582 311.492 45.8144C311.205 46.9769 306.294 65.9399 310.776 78.5707C313.855 87.211 320.76 90.002 324.877 90.002C329.677 90.002 334.274 86.3661 336.728 80.9767C337.032 81.568 337.336 82.1559 337.688 82.7C344.627 93.702 358.073 91.3267 364.901 81.997C366.449 79.8783 367.31 78.0572 367.31 78.0572C368.777 87.1973 375.893 90.019 379.959 90.019C384.218 90.019 388.237 88.282 391.509 80.5611C391.637 83.9603 391.843 86.7346 392.194 87.6097C392.401 88.1538 393.614 88.8228 394.476 89.1573C398.367 90.5932 402.325 89.9075 403.775 89.6034C404.795 89.3971 405.593 88.5998 405.691 86.4946C405.975 80.9767 405.799 71.7114 407.476 64.808C410.298 53.2619 412.914 48.7813 414.158 46.5646C414.848 45.3177 415.642 45.1117 415.659 46.4194C415.706 49.0819 415.852 56.8976 416.95 67.4234C417.734 75.141 418.802 79.7162 419.631 81.1693C421.96 85.2984 424.863 85.491 427.209 85.491C428.709 85.491 431.836 85.0754 431.562 82.443C431.42 81.1693 431.66 73.2421 434.418 61.8582C436.237 54.4107 439.252 47.6966 440.337 45.2399C440.753 44.3311 440.928 45.0339 440.928 45.1758C440.688 50.295 440.178 67.0549 442.25 76.2087C445.093 88.6335 453.273 90.019 456.129 90.019C462.206 90.019 467.202 85.3929 468.875 73.2117C469.29 70.2752 468.683 68.0114 466.881 68.0114ZM211.824 60.4858C211.489 66.9264 210.228 72.3194 208.221 76.2254C204.55 83.3214 197.327 85.5549 194.149 75.3334C191.837 67.9503 192.618 57.8705 193.592 52.4304C194.994 44.3613 198.554 38.6541 204.104 39.1777C209.782 39.7388 212.557 47.0577 211.824 60.4858ZM267.481 60.5806C267.163 66.656 265.584 72.7788 263.861 76.2254C260.305 83.3688 252.869 85.6023 249.789 75.3334C247.687 68.2982 248.18 59.2256 249.232 53.5151C250.59 46.0846 253.859 39.1777 259.747 39.1777C265.473 39.1777 268.295 45.4627 267.481 60.5806ZM268.934 102.105C268.853 113.223 267.116 122.951 263.38 125.789C258.054 129.807 250.891 126.776 252.375 118.676C253.683 111.499 259.889 104.18 268.951 95.2325C268.951 95.2325 268.982 97.2734 268.934 102.105ZM365.029 60.6447C364.708 67.3284 363.224 72.5424 361.392 76.2254C357.833 83.3688 350.465 85.5853 347.321 75.3334C345.614 69.7344 345.533 60.388 346.763 52.5926C348.007 44.6484 351.502 38.6541 357.275 39.1777C362.984 39.7218 365.651 47.0577 365.029 60.6447Z" fill="#fff" />
                        </svg>
                        </NavLink>
                <ul className={styles.navList}>
                    <li>
 
                    </li>
                    <li><NavLink  className={({ isActive }) => (isActive ? styles.link : styles.active )} to={'/'}><svg width="26px" height="26px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.479 7.57827L15.093 3.12502C13.2787 1.62499 10.7213 1.62499 8.90703 3.12502L3.52097 7.57827C2.55059 8.38059 2 9.59706 2 10.8663V18.8739C2 20.5419 3.28643 22 5 22H7C8.65685 22 10 20.6569 10 19V15.6848C10 15.0044 10.5044 14.5587 11 14.5587H13C13.4956 14.5587 14 15.0044 14 15.6848V19C14 20.6569 15.3431 22 17 22H19C20.7136 22 22 20.5419 22 18.8739V10.8663C22 9.59706 21.4494 8.38059 20.479 7.57827Z" fill="currentColor" />
                    </svg>Home</NavLink></li>
                    <li><NavLink  className={({ isActive }) => (isActive ? styles.link : styles.active )} to={'/search'}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>Search</NavLink></li>
                    <li><NavLink to={'/explore'}  className={({ isActive }) => (isActive ? styles.link : styles.active )}><svg fill="currentColor" width="26px" height="26px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M17.5811388,6.41886117 L14.7905694,14.7905694 L6.41886117,17.5811388 L9.20943058,9.20943058 L17.5811388,6.41886117 Z M9.58113883,14.4188612 L13.2094306,13.2094306 L14.4188612,9.58113883 L10.7905694,10.7905694 L9.58113883,14.4188612 Z" />
                    </svg>Explore</NavLink></li>
                    <li>
                    <NavLink  className={({ isActive }) => (isActive ? styles.active : styles.link)}><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" height='28px' xmlnsXlink="http://www.w3.org/1999/xlink" fill='currentColor' x="0px" y="0px" viewBox="0 0 122.14 122.88" xmlSpace="preserve"><g><path d="M35.14,0H87c9.65,0,18.43,3.96,24.8,10.32c6.38,6.37,10.34,15.16,10.34,24.82v52.61c0,9.64-3.96,18.42-10.32,24.79 l-0.02,0.02c-6.38,6.37-15.16,10.32-24.79,10.32H35.14c-9.66,0-18.45-3.96-24.82-10.32l-0.24-0.27C3.86,105.95,0,97.27,0,87.74 V35.14c0-9.67,3.95-18.45,10.32-24.82S25.47,0,35.14,0L35.14,0z M91.51,31.02l0.07,0.11h21.6c-0.87-5.68-3.58-10.78-7.48-14.69 C100.9,11.64,94.28,8.66,87,8.66h-8.87L91.51,31.02L91.51,31.02z M81.52,31.13L68.07,8.66H38.57l13.61,22.47H81.52L81.52,31.13z M42.11,31.13L28.95,9.39c-4.81,1.16-9.12,3.65-12.51,7.05c-3.9,3.9-6.6,9.01-7.48,14.69H42.11L42.11,31.13z M113.48,39.79H8.66 v47.96c0,7.17,2.89,13.7,7.56,18.48l0.22,0.21c4.8,4.8,11.43,7.79,18.7,7.79H87c7.28,0,13.9-2.98,18.69-7.77l0.02-0.02 c4.79-4.79,7.77-11.41,7.77-18.69V39.79L113.48,39.79z M50.95,54.95l26.83,17.45c0.43,0.28,0.82,0.64,1.13,1.08 c1.22,1.77,0.77,4.2-1,5.42L51.19,94.67c-0.67,0.55-1.53,0.88-2.48,0.88c-2.16,0-3.91-1.75-3.91-3.91V58.15h0.02 c0-0.77,0.23-1.55,0.7-2.23C46.76,54.15,49.19,53.72,50.95,54.95L50.95,54.95L50.95,54.95z" /></g>
                    </svg> Reels</NavLink></li>
                    <li><NavLink  className={({ isActive }) => (isActive ? styles.active : styles.link)}><svg width="25px" height="28px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 2L2 8.66667L11.5833 12.4167M22 2L15.3333 22L11.5833 12.4167M22 2L11.5833 12.4167" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> Massanges</NavLink></li>
                    <li>
                    <NavLink  className={({ isActive }) => (isActive ? styles.active : styles.link)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" fill="currentColor" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg> Notifications</NavLink></li>
                    <li><NavLink  className={({ isActive }) => (isActive ? styles.active : styles.link)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg> Create</NavLink></li>
                    <li><NavLink  className={({ isActive }) => (isActive ? styles.active : styles.link)}><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="#FFF" strokeWidth="2"></path> <path d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" stroke="#FFFF" strokeWidth="2"></path> <path d="M6 19C6.63819 16.6928 8.27998 16 12 16C15.72 16 17.3618 16.6425 18 18.9497" stroke="#FFFF" strokeWidth="2" strokeLinecap="round"></path> </g></svg> Profile</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default SideBar
