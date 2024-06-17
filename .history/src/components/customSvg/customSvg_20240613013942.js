export default function CustomSvg ({height, width, color, name }){
    return (
        name === "createProfessionalTick"
        ?   
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14.5" r="14" fill="#EB1C25"/>
                <path d="M9.19629 14.5L12.6277 17.9313L19.4904 11.0686" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        :
        name === "blueFacebook"
        ?   
            <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.782227" width="59.5777" height="59.5777" rx="8.27468" fill="#1877F2"/>
                <g clip-path="url(#clip0_1_119)">
                <path d="M49.3979 30C49.3979 19.4901 40.8778 10.97 30.3679 10.97C19.858 10.97 11.3379 19.4901 11.3379 30C11.3379 39.4983 18.2969 47.3712 27.3945 48.7988V35.5008H22.5626V30H27.3945V25.8074C27.3945 21.038 30.2356 18.4036 34.5824 18.4036C36.6644 18.4036 38.8422 18.7752 38.8422 18.7752V23.4584H36.4426C34.0786 23.4584 33.3413 24.9254 33.3413 26.4304V30H38.6192L37.7755 35.5008H33.3413V48.7988C42.4389 47.3712 49.3979 39.4985 49.3979 30Z" fill="#1877F2"/>
                <path d="M37.7753 35.5008L38.6191 30H33.3412V26.4304C33.3412 24.9252 34.0785 23.4584 36.4425 23.4584H38.8421V18.7752C38.8421 18.7752 36.6643 18.4036 34.5822 18.4036C30.2355 18.4036 27.3943 21.038 27.3943 25.8074V30H22.5625V35.5008H27.3943V48.7988C28.378 48.9529 29.3721 49.0302 30.3678 49.03C31.3634 49.0303 32.3576 48.953 33.3412 48.7988V35.5008H37.7753Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_1_119">
                <rect width="38.06" height="38.06" fill="white" transform="translate(11.3379 10.97)"/>
                </clipPath>
                </defs>
            </svg>
        :
        name === "dropDownArrow"
        ?   
            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Vector" d="M13.8115 1.5791L7.81152 7.5791L1.81152 1.5791" stroke="#737373" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 
        :
        name === "expertLedCourses"
        ? 
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="white"/>
                <path d="M22.8369 32.3664H28.6669C29.1017 32.3664 29.6921 33.3648 30.5605 33.982V33.2716C30.5605 33.2716 30.5325 32.8504 30.6997 32.5956C30.8693 32.34 31.2229 32.272 31.3333 32.272H37.1633C37.1633 32.272 38.9237 31.976 40.8809 31.0544L19.3633 31.26C21.2201 32.0928 22.8369 32.3664 22.8369 32.3664Z" fill="#EB1C25"/>
                <path d="M16.7476 32.0444C16.6031 31.9343 16.4615 31.8202 16.3232 31.7024C16.422 31.8608 16.5668 31.9836 16.7476 32.0444ZM17.8156 16.2244H42.0988V30.4308C42.95 29.9588 43.4072 29.6372 43.7204 29.4312V15.4112C43.7202 15.196 43.6346 14.9896 43.4823 14.8375C43.3301 14.6854 43.1236 14.6 42.9084 14.6H17.0036C16.5544 14.6 16.1904 14.964 16.1904 15.4112V29.4672C16.4988 29.6616 16.9416 29.9876 17.8156 30.4752V16.2244Z" fill="#EB1C25"/>
                <path d="M45.1164 29.1912C44.9072 29.0244 44.6176 29.0252 44.158 29.1912C44.024 29.24 43.8884 29.3212 43.72 29.4312C43.4068 29.6372 42.95 29.9588 42.0984 30.4308C41.8356 30.5748 41.5492 30.73 41.202 30.904C41.0932 30.9584 40.9884 31.0028 40.8808 31.0548C38.9236 31.9764 37.1632 32.2724 37.1632 32.2724H31.3332C31.2228 32.2724 30.8692 32.3404 30.6996 32.596C30.5324 32.8512 30.5604 33.272 30.5604 33.272V33.9824C30.7708 34.1316 30.9932 34.2652 31.2384 34.3496C32.996 34.9488 34.1852 34.4264 34.704 33.6984C35.3108 32.8448 35.6196 32.3668 36.286 32.6164C36.9524 32.866 36.286 34.4884 35.454 35.3216C34.62 36.1552 33.6204 36.8212 32.206 36.8212C31.6116 36.8212 31.0356 36.732 30.5604 36.6308V42.6832C30.5604 44.3912 32.3756 45.304 33.6236 45.304C34.8712 45.304 37.3704 44.5968 38.5784 41.5988C39.7852 38.6016 38.4964 34.6464 38.4964 34.6464C38.4964 34.6464 40.4516 33.77 42.4928 32.4808C44.532 31.1908 45.0748 29.9824 45.1164 29.8128C45.1564 29.642 45.3228 29.3584 45.1164 29.1912Z" fill="#EB1C25"/>
                <path d="M35.4543 35.3212C36.2863 34.488 36.9527 32.8656 36.2863 32.616C35.6199 32.3664 35.3111 32.8444 34.7043 33.698C34.1855 34.426 32.9963 34.9484 31.2387 34.3492C30.9935 34.2648 30.7711 34.1312 30.5607 33.982C29.6927 33.3648 29.1019 32.3664 28.6671 32.3664H22.8371C22.8371 32.3664 21.2199 32.0928 19.3635 31.26C19.1771 31.176 18.9895 31.0928 18.7991 30.9972C18.4672 30.8308 18.1392 30.6566 17.8155 30.4748C16.9415 29.9872 16.4987 29.6616 16.1903 29.4668C16.0619 29.3856 15.9531 29.3248 15.8419 29.2848C15.3843 29.1184 15.0927 29.1184 14.8843 29.2848C14.6771 29.452 14.8427 29.736 14.8843 29.906C14.9163 30.036 15.2495 30.7796 16.3227 31.702C16.697 32.02 17.093 32.3115 17.5079 32.5744C19.5471 33.8652 21.5043 34.7392 21.5043 34.7392C21.5043 34.7392 20.2135 38.6936 21.4223 41.6916C22.6295 44.6892 25.1275 45.3996 26.3763 45.3996C27.6255 45.3996 29.4407 44.4808 29.4407 42.774V36.3216C29.4407 36.3216 29.9015 36.4896 30.5603 36.63C31.0355 36.7312 31.6115 36.8204 32.2059 36.8204C33.6207 36.8208 34.6203 36.1548 35.4543 35.3212ZM34.4071 23.7524C33.4462 23.7525 32.5248 24.1343 31.8453 24.8136C31.1659 25.493 30.7841 26.4144 30.7839 27.3752C30.7839 29.3748 32.4059 30.9976 34.4071 30.9976C36.4063 30.9976 38.0279 29.3748 38.0279 27.3752C38.0279 25.3752 36.4063 23.7524 34.4071 23.7524Z" fill="#EB1C25"/>
                <path d="M25.8175 23.7524C23.8175 23.7524 22.1963 25.3752 22.1963 27.3752C22.1963 29.3748 23.8171 30.9976 25.8175 30.9976C27.8187 30.9976 29.4407 29.3748 29.4407 27.3752C29.4407 25.3752 27.8187 23.7524 25.8175 23.7524Z" fill="#EB1C25"/>
            </svg>
        :
        name === "facebook"
        ? 
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1.93188C5.1625 1.93188 1.25 5.86938 1.25 10.7319C1.25 15.1194 4.45 18.7694 8.6375 19.4319V13.2819H6.4125V10.7319H8.6375V8.79438C8.6375 6.58188 9.95 5.36938 11.9375 5.36938C12.9 5.36938 13.9 5.54438 13.9 5.54438V7.70688H12.8C11.7125 7.70688 11.375 8.38188 11.375 9.08188V10.7319H13.8L13.4125 13.2819H11.375V19.4319C15.5625 18.7694 18.7625 15.1319 18.7625 10.7319C18.7625 5.86938 14.85 1.93188 10.0125 1.93188H10Z" fill="#EB1C25"/>
            </svg>
        :
        name === "arrowTopRight"
        ?
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#EB1C25"/>
                <path d="M25.6567 14.3137H17.1714M25.6567 14.3137V22.799M25.6567 14.3137L18.2321 21.7383M14.343 25.6274L16.1108 23.8596" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        :
        name === "honda" 
        ?
            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.217773" y="0.789551" width="59.5777" height="59.5777" rx="8.27468" fill="#F5F5F5"/>
                <g clip-path="url(#clip0_1_249)">
                <path d="M49.0917 22.6542C48.5684 17.551 45.1747 16.4774 42.187 15.9873C40.6868 15.7336 38.0162 15.5116 36.294 15.4481C34.7938 15.353 31.2701 15.3054 30.2124 15.3054C29.1705 15.3054 25.6293 15.353 24.1307 15.4481C22.4243 15.5116 19.7379 15.7336 18.2377 15.9873C15.2516 16.4932 11.8532 17.5636 11.333 22.6542C11.2061 24.0449 11.1744 25.8623 11.1903 27.805C11.2379 31.0258 11.5075 33.2063 11.666 34.7239C11.777 35.7658 12.2021 38.8788 12.7555 40.49C13.5135 42.7023 14.2081 43.3493 15.0137 44.0138C16.4997 45.2142 18.9323 45.5933 19.4382 45.6884C22.1865 46.18 27.748 46.272 30.1965 46.272C32.645 46.272 38.205 46.1927 40.9548 45.6884C41.4765 45.5933 43.9092 45.2285 45.3793 44.0138C46.1849 43.3493 46.8795 42.7023 47.6375 40.49C48.1925 38.8788 48.6334 35.7658 48.7444 34.7239C48.903 33.2063 49.1869 31.0258 49.2186 27.805C49.282 25.8623 49.2344 24.0449 49.0917 22.6542ZM47.2268 31.2177C46.9255 35.2933 46.5639 37.7259 46.0422 39.4957C45.5823 41.0435 45.032 42.0695 44.1947 42.8133C42.8197 44.0613 40.9231 44.3293 39.8178 44.4879C37.4168 44.8527 33.3872 44.9637 30.2124 44.9637C27.0375 44.9637 23.0079 44.8368 20.607 44.4879C19.5016 44.3293 17.605 44.0613 16.2301 42.8133C15.4086 42.0695 14.8409 41.0276 14.3984 39.4941C13.8767 37.7418 13.5135 35.2917 13.2138 31.2161C13.0394 28.7691 13.0711 24.7871 13.3407 22.6526C13.7498 19.4635 15.3309 17.8665 18.7119 17.2671C20.2914 16.9816 22.4227 16.7755 24.4304 16.6803C26.0416 16.5693 28.7122 16.5218 30.1965 16.5376C31.6808 16.5218 34.3514 16.5852 35.9626 16.6803C37.9845 16.7755 40.1016 16.9816 41.6811 17.2671C45.078 17.8665 46.659 19.4793 47.0539 22.6542C47.3695 24.7871 47.4155 28.7691 47.2268 31.2177ZM38.9788 17.9125C38.1098 21.8169 37.7625 23.6025 37.0505 26.4285C36.3717 29.1482 35.8341 31.6585 34.9334 32.8749C34.0025 34.1071 32.7687 34.3767 31.9314 34.4702C31.489 34.5178 31.1734 34.5336 30.2409 34.5495C29.6715 34.5614 29.102 34.5349 28.5361 34.4702C27.6988 34.3751 26.4508 34.1071 25.5357 32.8749C24.6191 31.6585 24.0974 29.1482 23.4187 26.43C22.6733 23.6184 22.3435 21.8153 21.4586 17.9141C21.4586 17.9141 20.5895 17.9458 20.1947 17.9775C19.6729 18.0093 19.2622 18.0568 18.8197 18.1203C19.3637 26.6394 19.9171 35.6897 20.6054 43.6998C21.863 43.8579 23.1282 43.9473 24.3955 43.9678C24.9189 41.9601 25.5817 39.1786 26.3096 37.9939C26.9091 37.0297 27.8415 36.9203 28.3633 36.8569C29.1847 36.7459 29.8793 36.73 30.2108 36.73C30.5279 36.7142 31.221 36.73 32.0583 36.8569C32.5816 36.9362 33.5125 37.0313 34.1119 37.9939C34.8573 39.1786 35.5027 41.9585 36.0244 43.9662C36.0244 43.9662 36.5922 43.9503 37.8719 43.8869C38.5232 43.8584 39.1713 43.7949 39.8162 43.6966C40.5425 35.149 41.0611 26.6838 41.6018 18.1203C41.1578 18.0568 40.7486 18.0093 40.2269 17.9775C39.8622 17.9458 38.9788 17.9125 38.9788 17.9125Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_1_249">
                <rect width="38.06" height="38.06" fill="white" transform="translate(11.1875 11.7595)"/>
                </clipPath>
                </defs>
            </svg>
        :
        name === "insta"
        ?
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.22 1.18188H12.78C15.3839 1.18188 17.5 3.29803 17.5 5.90189V13.4619C17.5 14.7137 17.0027 15.9143 16.1175 16.7994C15.2324 17.6846 14.0318 18.1819 12.78 18.1819H5.22C2.61614 18.1819 0.5 16.0657 0.5 13.4619V5.90189C0.5 4.65006 0.997284 3.44951 1.88246 2.56434C2.76763 1.67917 3.96818 1.18188 5.22 1.18188ZM5.04 1.98188C4.04809 1.98188 3.09681 2.37592 2.39542 3.07731C1.69403 3.77869 1.3 4.72997 1.3 5.72188V13.6419C1.3 15.709 2.97286 17.3819 5.04 17.3819H12.96C13.9519 17.3819 14.9032 16.9879 15.6046 16.2865C16.306 15.5851 16.7 14.6338 16.7 13.6419V5.72188C16.7 3.65474 15.0271 1.98188 12.96 1.98188H5.04ZM13.725 4.33188C13.8908 4.33188 14.0497 4.39773 14.1669 4.51494C14.2842 4.63215 14.35 4.79112 14.35 4.95688C14.35 5.12265 14.2842 5.28162 14.1669 5.39883C14.0497 5.51604 13.8908 5.58188 13.725 5.58188C13.5592 5.58188 13.4003 5.51604 13.2831 5.39883C13.1658 5.28162 13.1 5.12265 13.1 4.95688C13.1 4.79112 13.1658 4.63215 13.2831 4.51494C13.4003 4.39773 13.5592 4.33188 13.725 4.33188ZM9 5.68188C10.0609 5.68188 11.0783 6.10331 11.8284 6.85346C12.5786 7.6036 13 8.62102 13 9.68188C13 10.7428 12.5786 11.7602 11.8284 12.5103C11.0783 13.2605 10.0609 13.6819 9 13.6819C7.93913 13.6819 6.92172 13.2605 6.17157 12.5103C5.42143 11.7602 5 10.7428 5 9.68188C5 8.62102 5.42143 7.6036 6.17157 6.85346C6.92172 6.10331 7.93913 5.68188 9 5.68188ZM9 6.48188C8.15131 6.48188 7.33737 6.81903 6.73726 7.41914C6.13714 8.01926 5.8 8.83319 5.8 9.68188C5.8 10.5306 6.13714 11.3445 6.73726 11.9446C7.33737 12.5447 8.15131 12.8819 9 12.8819C9.84869 12.8819 10.6626 12.5447 11.2627 11.9446C11.8629 11.3445 12.2 10.5306 12.2 9.68188C12.2 8.83319 11.8629 8.01926 11.2627 7.41914C10.6626 6.81903 9.84869 6.48188 9 6.48188Z" stroke="#EB1C25"/>
            </svg>
        :
        name === "linkedin"
        ?
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4167 3.43188C17.9029 3.43188 18.3692 3.62504 18.713 3.96886C19.0568 4.31267 19.25 4.77899 19.25 5.26522V18.0986C19.25 18.5848 19.0568 19.0511 18.713 19.3949C18.3692 19.7387 17.9029 19.9319 17.4167 19.9319H4.58333C4.0971 19.9319 3.63079 19.7387 3.28697 19.3949C2.94315 19.0511 2.75 18.5848 2.75 18.0986V5.26522C2.75 4.77899 2.94315 4.31267 3.28697 3.96886C3.63079 3.62504 4.0971 3.43188 4.58333 3.43188H17.4167ZM16.9583 17.6402V12.7819C16.9583 11.9893 16.6435 11.2292 16.0831 10.6688C15.5226 10.1084 14.7626 9.79355 13.97 9.79355C13.1908 9.79355 12.2833 10.2702 11.8433 10.9852V9.96772H9.28583V17.6402H11.8433V13.1211C11.8433 12.4152 12.4117 11.8377 13.1175 11.8377C13.4579 11.8377 13.7843 11.9729 14.025 12.2136C14.2656 12.4543 14.4008 12.7807 14.4008 13.1211V17.6402H16.9583ZM6.30667 8.52855C6.7151 8.52855 7.10681 8.3663 7.39561 8.0775C7.68442 7.78869 7.84667 7.39699 7.84667 6.98855C7.84667 6.13605 7.15917 5.43938 6.30667 5.43938C5.8958 5.43938 5.50177 5.6026 5.21124 5.89313C4.92072 6.18365 4.7575 6.57769 4.7575 6.98855C4.7575 7.84105 5.45417 8.52855 6.30667 8.52855ZM7.58083 17.6402V9.96772H5.04167V17.6402H7.58083Z" fill="#EB1C25"/>
            </svg>
        :
        name === "macdonald"
        ?
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.405273" width="59.5777" height="59.5777" rx="8.27468" fill="#FF0000"/>
            <path d="M43.0921 42.7167C43.0921 36.4495 41.5602 17.3434 36.6885 17.3434C31.8168 17.3434 30.4054 31.7539 30.4054 40.7439C30.4054 31.7539 28.9845 17.3434 24.1223 17.3434C19.2618 17.3434 17.7188 36.4495 17.7188 42.7167" stroke="#FFB800" stroke-width="3.17167" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        :
        name === "microsoft"
        ?
            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.40625" y="0.789551" width="59.5777" height="59.5777" rx="8.27468" fill="#F5F5F5"/>
                <g clip-path="url(#clip0_1_210)">
                <path d="M29.4643 29.8478H11.376V11.7595H29.4643V29.8478Z" fill="#F1511B"/>
                <path d="M49.4358 29.8478H31.3477V11.7595H49.4358V29.8478Z" fill="#80CC28"/>
                <path d="M29.4638 49.8198H11.376V31.7314H29.4638V49.8198Z" fill="#00ADEF"/>
                <path d="M49.4358 49.8198H31.3477V31.7314H49.4358V49.8198Z" fill="#FBBC09"/>
                </g>
                <defs>
                <clipPath id="clip0_1_210">
                <rect width="38.06" height="38.06" fill="white" transform="translate(11.376 11.7595)"/>
                </clipPath>
                </defs>
            </svg>
        :
        name === "nike"
        ?
            <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.594727" width="59.5777" height="59.5777" rx="8.27468" fill="black"/>
                <g clip-path="url(#clip0_1_138)">
                <path d="M49.4147 23.1277L21.5681 34.9845C19.2589 35.9625 17.3197 36.4515 15.7507 36.4515C13.9744 36.4515 12.686 35.8293 11.8856 34.5848C11.3834 33.7855 11.2354 32.7715 11.4416 31.5429C11.6488 30.3143 12.1965 29.0043 13.0846 27.6128C13.8248 26.4868 15.0391 25.0065 16.7276 23.1721C16.1542 24.0737 15.734 25.0641 15.4842 26.103C15.0402 27.9977 15.4398 29.3891 16.6832 30.2773C17.2753 30.6917 18.0895 30.899 19.1256 30.899C19.9535 30.899 20.8861 30.7658 21.9233 30.4993L49.4147 23.1277Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_1_138">
                <rect width="38.0635" height="38.0635" fill="white" transform="translate(11.3516 10.7571)"/>
                </clipPath>
                </defs>
            </svg>
        :
        name === "oracle"
        ?
            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.789551" width="59.5777" height="59.5777" rx="8.27468" fill="#FF0000"/>
                <mask id="path-2-inside-1_1_192" fill="white">
                <path d="M27.4384 31.5236H29.9162L28.6058 29.4154L26.2009 33.2271H25.1063L28.0316 28.6486C28.0958 28.556 28.1817 28.4805 28.2818 28.4288C28.3819 28.3771 28.4931 28.3507 28.6058 28.3518C28.8333 28.3518 29.0453 28.4598 29.1684 28.6409L32.1049 33.2271H31.0104L30.4942 32.3752H27.9852L27.4384 31.5236ZM38.8074 32.3752V28.3982H37.8787V32.7647C37.8787 32.8843 37.9251 32.9999 38.0137 33.0885C38.1024 33.1771 38.2219 33.2271 38.353 33.2271H42.5884L43.1358 32.3752H38.8074ZM23.4415 31.6625C24.3434 31.6625 25.0757 30.9343 25.0757 30.0324C25.0757 29.1306 24.3437 28.3982 23.4415 28.3982H19.3783V33.2274H20.3069V29.2498H23.38C23.8117 29.2498 24.1584 29.6007 24.1584 30.0321C24.1584 30.4636 23.8114 30.8144 23.38 30.8144L20.7616 30.8106L23.534 33.2271H24.8833L23.0178 31.6622L23.4415 31.6625ZM13.6631 33.2271C12.3301 33.2271 11.248 32.148 11.248 30.8144C11.248 29.4809 12.3298 28.3979 13.6631 28.3979H16.4697C17.8033 28.3979 18.8844 29.4812 18.8844 30.8144C18.8844 32.1477 17.8033 33.2271 16.4697 33.2271H13.6631ZM16.4073 32.3752C16.6124 32.3755 16.8157 32.3354 17.0053 32.2571C17.195 32.1788 17.3673 32.0639 17.5125 31.9189C17.6577 31.774 17.7729 31.6018 17.8516 31.4123C17.9302 31.2228 17.9707 31.0196 17.9707 30.8144C17.9708 30.609 17.9305 30.4056 17.852 30.2158C17.7734 30.026 17.6583 29.8535 17.5131 29.7081C17.3679 29.5628 17.1956 29.4475 17.0058 29.3688C16.8161 29.2901 16.6127 29.2496 16.4073 29.2495H13.7249C13.3102 29.2498 12.9125 29.4149 12.6194 29.7084C12.3264 30.0018 12.1618 30.3997 12.1621 30.8144C12.1621 31.0196 12.2026 31.2227 12.2812 31.4122C12.3597 31.6016 12.4749 31.7738 12.62 31.9187C12.7652 32.0637 12.9375 32.1786 13.1271 32.2569C13.3166 32.3352 13.5198 32.3754 13.7249 32.3752H16.4073ZM34.0439 33.2271C32.7106 33.2271 31.6277 32.148 31.6277 30.8144C31.6277 29.4809 32.7106 28.3979 34.0439 28.3979H37.3777L36.8339 29.2495H34.1058C33.6908 29.2498 33.2928 29.4147 32.9993 29.7081C32.7059 30.0015 32.5409 30.3994 32.5405 30.8144C32.5405 31.6776 33.2423 32.3752 34.1058 32.3752H37.4547L36.9076 33.2271H34.0439ZM45.4015 32.3752C45.0613 32.3754 44.7304 32.2644 44.4591 32.0591C44.1877 31.8539 43.9909 31.5656 43.8985 31.2382H47.868L48.4151 30.3866H43.8985C43.9916 30.0595 44.1886 29.7717 44.4598 29.5666C44.731 29.3614 45.0615 29.2502 45.4015 29.2495H48.1261L48.6774 28.3979H45.3397C44.0064 28.3979 42.9235 29.4812 42.9235 30.8144C42.9235 32.1477 44.0064 33.2271 45.3397 33.2271H48.2034L48.7508 32.3752H45.4015Z"/>
                </mask>
                <path d="M27.4384 31.5236H29.9162L28.6058 29.4154L26.2009 33.2271H25.1063L28.0316 28.6486C28.0958 28.556 28.1817 28.4805 28.2818 28.4288C28.3819 28.3771 28.4931 28.3507 28.6058 28.3518C28.8333 28.3518 29.0453 28.4598 29.1684 28.6409L32.1049 33.2271H31.0104L30.4942 32.3752H27.9852L27.4384 31.5236ZM38.8074 32.3752V28.3982H37.8787V32.7647C37.8787 32.8843 37.9251 32.9999 38.0137 33.0885C38.1024 33.1771 38.2219 33.2271 38.353 33.2271H42.5884L43.1358 32.3752H38.8074ZM23.4415 31.6625C24.3434 31.6625 25.0757 30.9343 25.0757 30.0324C25.0757 29.1306 24.3437 28.3982 23.4415 28.3982H19.3783V33.2274H20.3069V29.2498H23.38C23.8117 29.2498 24.1584 29.6007 24.1584 30.0321C24.1584 30.4636 23.8114 30.8144 23.38 30.8144L20.7616 30.8106L23.534 33.2271H24.8833L23.0178 31.6622L23.4415 31.6625ZM13.6631 33.2271C12.3301 33.2271 11.248 32.148 11.248 30.8144C11.248 29.4809 12.3298 28.3979 13.6631 28.3979H16.4697C17.8033 28.3979 18.8844 29.4812 18.8844 30.8144C18.8844 32.1477 17.8033 33.2271 16.4697 33.2271H13.6631ZM16.4073 32.3752C16.6124 32.3755 16.8157 32.3354 17.0053 32.2571C17.195 32.1788 17.3673 32.0639 17.5125 31.9189C17.6577 31.774 17.7729 31.6018 17.8516 31.4123C17.9302 31.2228 17.9707 31.0196 17.9707 30.8144C17.9708 30.609 17.9305 30.4056 17.852 30.2158C17.7734 30.026 17.6583 29.8535 17.5131 29.7081C17.3679 29.5628 17.1956 29.4475 17.0058 29.3688C16.8161 29.2901 16.6127 29.2496 16.4073 29.2495H13.7249C13.3102 29.2498 12.9125 29.4149 12.6194 29.7084C12.3264 30.0018 12.1618 30.3997 12.1621 30.8144C12.1621 31.0196 12.2026 31.2227 12.2812 31.4122C12.3597 31.6016 12.4749 31.7738 12.62 31.9187C12.7652 32.0637 12.9375 32.1786 13.1271 32.2569C13.3166 32.3352 13.5198 32.3754 13.7249 32.3752H16.4073ZM34.0439 33.2271C32.7106 33.2271 31.6277 32.148 31.6277 30.8144C31.6277 29.4809 32.7106 28.3979 34.0439 28.3979H37.3777L36.8339 29.2495H34.1058C33.6908 29.2498 33.2928 29.4147 32.9993 29.7081C32.7059 30.0015 32.5409 30.3994 32.5405 30.8144C32.5405 31.6776 33.2423 32.3752 34.1058 32.3752H37.4547L36.9076 33.2271H34.0439ZM45.4015 32.3752C45.0613 32.3754 44.7304 32.2644 44.4591 32.0591C44.1877 31.8539 43.9909 31.5656 43.8985 31.2382H47.868L48.4151 30.3866H43.8985C43.9916 30.0595 44.1886 29.7717 44.4598 29.5666C44.731 29.3614 45.0615 29.2502 45.4015 29.2495H48.1261L48.6774 28.3979H45.3397C44.0064 28.3979 42.9235 29.4812 42.9235 30.8144C42.9235 32.1477 44.0064 33.2271 45.3397 33.2271H48.2034L48.7508 32.3752H45.4015Z" fill="white"/>
                <path d="M27.4384 31.5236V28.5236H21.9469L24.914 33.1445L27.4384 31.5236ZM29.9162 31.5236V34.5236H35.3132L32.4641 29.9399L29.9162 31.5236ZM28.6058 29.4154L31.1537 27.8317L28.6248 23.7632L26.0686 27.8146L28.6058 29.4154ZM26.2009 33.2271V36.2271H27.8553L28.7381 34.8279L26.2009 33.2271ZM25.1063 33.2271L22.5783 31.6119L19.6296 36.2271H25.1063V33.2271ZM28.0316 28.6486L25.5662 26.9393L25.534 26.9857L25.5036 27.0334L28.0316 28.6486ZM28.6058 28.3518L28.5742 31.3517L28.59 31.3518H28.6058V28.3518ZM29.1684 28.6409L31.6948 27.0232L31.6726 26.9884L31.6494 26.9543L29.1684 28.6409ZM32.1049 33.2271V36.2271H37.5881L34.6314 31.6094L32.1049 33.2271ZM31.0104 33.2271L28.4447 34.7818L29.3204 36.2271H31.0104V33.2271ZM30.4942 32.3752L33.06 30.8205L32.1842 29.3752H30.4942V32.3752ZM27.9852 32.3752L25.4608 33.9961L26.3463 35.3752H27.9852V32.3752ZM38.8074 32.3752H35.8074V35.3752H38.8074V32.3752ZM38.8074 28.3982H41.8074V25.3982H38.8074V28.3982ZM37.8787 28.3982V25.3982H34.8787V28.3982H37.8787ZM42.5884 33.2271V36.2271H44.2266L45.1122 34.8489L42.5884 33.2271ZM43.1358 32.3752L45.6596 33.997L48.6295 29.3752H43.1358V32.3752ZM23.4415 31.6625L23.4394 34.6625H23.4415V31.6625ZM19.3783 28.3982V25.3982H16.3783V28.3982H19.3783ZM19.3783 33.2274H16.3783V36.2274H19.3783V33.2274ZM20.3069 33.2274V36.2274H23.3069V33.2274H20.3069ZM20.3069 29.2498V26.2498H17.3069V29.2498H20.3069ZM23.38 30.8144L23.3755 33.8144H23.38V30.8144ZM20.7616 30.8106L20.766 27.8106L12.7403 27.7987L18.7904 33.0721L20.7616 30.8106ZM23.534 33.2271L21.5628 35.4886L22.4101 36.2271H23.534V33.2271ZM24.8833 33.2271V36.2271H33.1276L26.8114 30.9287L24.8833 33.2271ZM23.0178 31.6622L23.0199 28.6622L14.7667 28.6564L21.0898 33.9606L23.0178 31.6622ZM16.4073 32.3752L16.4118 29.3752H16.4073V32.3752ZM17.9707 30.8144L14.9707 30.8127L14.9707 30.8139L17.9707 30.8144ZM16.4073 29.2495L16.4084 26.2495H16.4073V29.2495ZM13.7249 29.2495V26.2495L13.7226 26.2495L13.7249 29.2495ZM12.1621 30.8144L15.1621 30.8139L15.1621 30.8127L12.1621 30.8144ZM13.7249 32.3752V29.3752L13.7215 29.3752L13.7249 32.3752ZM37.3777 28.3979L39.9061 30.0126L42.8531 25.3979H37.3777V28.3979ZM36.8339 29.2495V32.2495H38.4776L39.3623 30.8642L36.8339 29.2495ZM34.1058 29.2495V26.2495L34.104 26.2495L34.1058 29.2495ZM32.5405 30.8144L29.5405 30.8122V30.8144H32.5405ZM37.4547 32.3752L39.979 33.9964L42.9468 29.3752H37.4547V32.3752ZM36.9076 33.2271V36.2271H38.5463L39.4319 34.8483L36.9076 33.2271ZM45.4015 32.3752V29.3752L45.4002 29.3752L45.4015 32.3752ZM43.8985 31.2382V28.2382H39.9346L41.0113 32.053L43.8985 31.2382ZM47.868 31.2382V34.2382H49.5064L50.392 32.8597L47.868 31.2382ZM48.4151 30.3866L50.9391 32.0081L53.9083 27.3866H48.4151V30.3866ZM43.8985 30.3866L41.0131 29.5651L39.9251 33.3866H43.8985V30.3866ZM45.4015 29.2495V26.2495L45.396 26.2495L45.4015 29.2495ZM48.1261 29.2495V32.2495H49.7578L50.6445 30.8798L48.1261 29.2495ZM48.6774 28.3979L51.1958 30.0282L54.1932 25.3979H48.6774V28.3979ZM48.2034 33.2271V36.2271H49.8416L50.7273 34.8489L48.2034 33.2271ZM48.7508 32.3752L51.2747 33.997L54.2446 29.3752H48.7508V32.3752ZM27.4384 34.5236H29.9162V28.5236H27.4384V34.5236ZM32.4641 29.9399L31.1537 27.8317L26.0579 30.9992L27.3683 33.1073L32.4641 29.9399ZM26.0686 27.8146L23.6637 31.6263L28.7381 34.8279L31.143 31.0163L26.0686 27.8146ZM26.2009 30.2271H25.1063V36.2271H26.2009V30.2271ZM27.6344 34.8423L30.5597 30.2638L25.5036 27.0334L22.5783 31.6119L27.6344 34.8423ZM30.497 30.3579C30.282 30.668 29.9944 30.9207 29.6592 31.0939L26.9044 25.7637C26.369 26.0404 25.9096 26.444 25.5662 26.9393L30.497 30.3579ZM29.6592 31.0939C29.324 31.2671 28.9515 31.3556 28.5742 31.3517L28.6374 25.352C28.0347 25.3457 27.4398 25.487 26.9044 25.7637L29.6592 31.0939ZM28.6058 31.3518C27.9007 31.3518 27.1562 31.0171 26.6874 30.3275L31.6494 26.9543C30.9343 25.9024 29.7658 25.3518 28.6058 25.3518V31.3518ZM26.6419 30.2586L29.5785 34.8448L34.6314 31.6094L31.6948 27.0232L26.6419 30.2586ZM32.1049 30.2271H31.0104V36.2271H32.1049V30.2271ZM33.5761 31.6724L33.06 30.8205L27.9285 33.9299L28.4447 34.7818L33.5761 31.6724ZM30.4942 29.3752H27.9852V35.3752H30.4942V29.3752ZM30.5096 30.7543L29.9628 29.9027L24.914 33.1445L25.4608 33.9961L30.5096 30.7543ZM41.8074 32.3752V28.3982H35.8074V32.3752H41.8074ZM38.8074 25.3982H37.8787V31.3982H38.8074V25.3982ZM34.8787 28.3982V32.7647H40.8787V28.3982H34.8787ZM34.8787 32.7647C34.8787 33.6744 35.2373 34.5547 35.8924 35.2099L40.1351 30.9672C40.613 31.4451 40.8787 32.0941 40.8787 32.7647H34.8787ZM35.8924 35.2099C36.5523 35.8698 37.4386 36.2271 38.353 36.2271V30.2271C39.0052 30.2271 39.6524 30.4845 40.1351 30.9672L35.8924 35.2099ZM38.353 36.2271H42.5884V30.2271H38.353V36.2271ZM45.1122 34.8489L45.6596 33.997L40.6119 30.7534L40.0645 31.6053L45.1122 34.8489ZM43.1358 29.3752H38.8074V35.3752H43.1358V29.3752ZM23.4415 34.6625C25.9902 34.6625 28.0757 32.6011 28.0757 30.0324H22.0757C22.0757 29.2675 22.6965 28.6625 23.4415 28.6625V34.6625ZM28.0757 30.0324C28.0757 27.4741 26.0009 25.3982 23.4415 25.3982V31.3982C22.6865 31.3982 22.0757 30.7871 22.0757 30.0324H28.0757ZM23.4415 25.3982H19.3783V31.3982H23.4415V25.3982ZM16.3783 28.3982V33.2274H22.3783V28.3982H16.3783ZM19.3783 36.2274H20.3069V30.2274H19.3783V36.2274ZM23.3069 33.2274V29.2498H17.3069V33.2274H23.3069ZM20.3069 32.2498H23.38V26.2498H20.3069V32.2498ZM23.38 32.2498C22.1348 32.2498 21.1584 31.2374 21.1584 30.0321H27.1584C27.1584 27.964 25.4886 26.2498 23.38 26.2498V32.2498ZM21.1584 30.0321C21.1584 28.8261 22.1352 27.8144 23.38 27.8144V33.8144C25.4876 33.8144 27.1584 32.101 27.1584 30.0321H21.1584ZM23.3844 27.8144L20.766 27.8106L20.7571 33.8106L23.3755 33.8144L23.3844 27.8144ZM18.7904 33.0721L21.5628 35.4886L25.5052 30.9656L22.7327 28.5491L18.7904 33.0721ZM23.534 36.2271H24.8833V30.2271H23.534V36.2271ZM26.8114 30.9287L24.9458 29.3638L21.0898 33.9606L22.9553 35.5255L26.8114 30.9287ZM23.0157 34.6622L23.4394 34.6625L23.4436 28.6625L23.0199 28.6622L23.0157 34.6622ZM13.6631 30.2271C13.9826 30.2271 14.248 30.4868 14.248 30.8144H8.24805C8.24805 33.8092 10.6776 36.2271 13.6631 36.2271V30.2271ZM14.248 30.8144C14.248 31.1356 13.9888 31.3979 13.6631 31.3979V25.3979C10.6708 25.3979 8.24805 27.8262 8.24805 30.8144H14.248ZM13.6631 31.3979H16.4697V25.3979H13.6631V31.3979ZM16.4697 31.3979C16.1433 31.3979 15.8844 31.1349 15.8844 30.8144H21.8844C21.8844 27.8274 19.4633 25.3979 16.4697 25.3979V31.3979ZM15.8844 30.8144C15.8844 30.4878 16.1496 30.2271 16.4697 30.2271V36.2271C19.457 36.2271 21.8844 33.8077 21.8844 30.8144H15.8844ZM16.4697 30.2271H13.6631V36.2271H16.4697V30.2271ZM16.4027 35.3752C17.0022 35.3761 17.5959 35.2588 18.1501 35.0301L15.8606 29.4841C16.0354 29.4119 16.2227 29.3749 16.4118 29.3752L16.4027 35.3752ZM18.1501 35.0301C18.7042 34.8013 19.2078 34.4656 19.632 34.0421L15.393 29.7958C15.5269 29.6622 15.6857 29.5563 15.8606 29.4841L18.1501 35.0301ZM19.632 34.0421C20.0563 33.6185 20.3929 33.1155 20.6226 32.5618L15.0805 30.2628C15.153 30.0881 15.2592 29.9294 15.393 29.7958L19.632 34.0421ZM20.6226 32.5618C20.8523 32.0081 20.9706 31.4145 20.9707 30.815L14.9707 30.8139C14.9707 30.6248 15.008 30.4375 15.0805 30.2628L20.6226 32.5618ZM20.9707 30.8162C20.971 30.2167 20.8533 29.6231 20.6242 29.0692L15.0797 31.3624C15.0076 31.1881 14.9706 31.0013 14.9707 30.8127L20.9707 30.8162ZM20.6242 29.0692C20.3951 28.5153 20.0591 28.0119 19.6355 27.5878L15.3908 31.8285C15.2575 31.695 15.1518 31.5367 15.0797 31.3624L20.6242 29.0692ZM19.6355 27.5878C19.2118 27.1638 18.7087 26.8273 18.155 26.5977L15.8566 32.14C15.6824 32.0677 15.5241 31.9619 15.3908 31.8285L19.6355 27.5878ZM18.155 26.5977C17.6013 26.3681 17.0078 26.2498 16.4084 26.2495L16.4061 32.2495C16.2175 32.2495 16.0308 32.2122 15.8566 32.14L18.155 26.5977ZM16.4073 26.2495H13.7249V32.2495H16.4073V26.2495ZM13.7226 26.2495C12.5123 26.2504 11.352 26.7321 10.4967 27.5884L14.7422 31.8283C14.4731 32.0977 14.108 32.2492 13.7272 32.2495L13.7226 26.2495ZM10.4967 27.5884C9.64146 28.4448 9.16139 29.6059 9.16208 30.8162L15.1621 30.8127C15.1623 31.1935 15.0113 31.5588 14.7422 31.8283L10.4967 27.5884ZM9.16208 30.815C9.1622 31.4143 9.28043 32.0078 9.51002 32.5614L15.0523 30.2629C15.1247 30.4376 15.162 30.6248 15.1621 30.8139L9.16208 30.815ZM9.51002 32.5614C9.73961 33.115 10.0761 33.6179 10.5001 34.0415L14.7399 29.796C14.8737 29.9296 14.9799 30.0883 15.0523 30.2629L9.51002 32.5614ZM10.5001 34.0415C10.9242 34.465 11.4276 34.8007 11.9815 35.0296L14.2726 29.4842C14.4473 29.5564 14.6062 29.6624 14.7399 29.796L10.5001 34.0415ZM11.9815 35.0296C12.5354 35.2584 13.129 35.3759 13.7283 35.3752L13.7215 29.3752C13.9106 29.375 14.0978 29.412 14.2726 29.4842L11.9815 35.0296ZM13.7249 35.3752H16.4073V29.3752H13.7249V35.3752ZM34.0439 30.2271C34.3615 30.2271 34.6277 30.4852 34.6277 30.8144H28.6277C28.6277 33.8109 31.0598 36.2271 34.0439 36.2271V30.2271ZM34.6277 30.8144C34.6277 31.1375 34.3677 31.3979 34.0439 31.3979V25.3979C31.0535 25.3979 28.6277 27.8242 28.6277 30.8144H34.6277ZM34.0439 31.3979H37.3777V25.3979H34.0439V31.3979ZM34.8493 26.7833L34.3055 27.6348L39.3623 30.8642L39.9061 30.0126L34.8493 26.7833ZM36.8339 26.2495H34.1058V32.2495H36.8339V26.2495ZM34.104 26.2495C32.8941 26.2502 31.7339 26.7311 30.8782 27.5866L35.1205 31.8296C34.8518 32.0983 34.4874 32.2493 34.1075 32.2495L34.104 26.2495ZM30.8782 27.5866C30.0226 28.4421 29.5415 29.6022 29.5405 30.8122L35.5405 30.8167C35.5402 31.1967 35.3892 31.561 35.1205 31.8296L30.8782 27.5866ZM29.5405 30.8144C29.5405 33.3453 31.5962 35.3752 34.1058 35.3752V29.3752C34.8883 29.3752 35.5405 30.01 35.5405 30.8144H29.5405ZM34.1058 35.3752H37.4547V29.3752H34.1058V35.3752ZM34.9305 30.754L34.3834 31.6059L39.4319 34.8483L39.979 33.9964L34.9305 30.754ZM36.9076 30.2271H34.0439V36.2271H36.9076V30.2271ZM45.4002 29.3752C45.7138 29.3751 46.0189 29.4774 46.269 29.6666L42.6492 34.4516C43.4419 35.0514 44.4089 35.3757 45.4029 35.3752L45.4002 29.3752ZM46.269 29.6666C46.5191 29.8558 46.7005 30.1215 46.7857 30.4233L41.0113 32.053C41.2813 33.0097 41.8564 33.852 42.6492 34.4516L46.269 29.6666ZM43.8985 34.2382H47.868V28.2382H43.8985V34.2382ZM50.392 32.8597L50.9391 32.0081L45.8911 28.765L45.344 29.6166L50.392 32.8597ZM48.4151 27.3866H43.8985V33.3866H48.4151V27.3866ZM46.7838 31.2081C46.6985 31.5076 46.5181 31.7712 46.2697 31.9591L42.6499 27.174C41.8592 27.7722 41.2846 28.6115 41.0131 29.5651L46.7838 31.2081ZM46.2697 31.9591C46.0213 32.147 45.7185 32.2489 45.4071 32.2495L45.396 26.2495C44.4045 26.2514 43.4406 26.5759 42.6499 27.174L46.2697 31.9591ZM45.4015 32.2495H48.1261V26.2495H45.4015V32.2495ZM50.6445 30.8798L51.1958 30.0282L46.159 26.7677L45.6077 27.6193L50.6445 30.8798ZM48.6774 25.3979H45.3397V31.3979H48.6774V25.3979ZM45.3397 25.3979C42.3491 25.3979 39.9235 27.8248 39.9235 30.8144H45.9235C45.9235 31.1375 45.6637 31.3979 45.3397 31.3979V25.3979ZM39.9235 30.8144C39.9235 33.8104 42.3553 36.2271 45.3397 36.2271V30.2271C45.6575 30.2271 45.9235 30.4851 45.9235 30.8144H39.9235ZM45.3397 36.2271H48.2034V30.2271H45.3397V36.2271ZM50.7273 34.8489L51.2747 33.997L46.227 30.7534L45.6796 31.6053L50.7273 34.8489ZM48.7508 29.3752H45.4015V35.3752H48.7508V29.3752Z" fill="black" mask="url(#path-2-inside-1_1_192)"/>
            </svg>
        :
        name === "satisfactionrate"
        ?
            <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22.5" cy="22" r="22" fill="white"/>
                <path d="M31.0547 18.3337C31.0553 16.8609 30.6756 15.413 29.9524 14.13C29.2293 12.847 28.1872 11.7724 26.9269 11.0103C25.6667 10.2482 24.2311 9.82433 22.759 9.77974C21.2869 9.73515 19.8283 10.0714 18.5242 10.7558C17.2202 11.4403 16.1149 12.4498 15.3155 13.6867C14.516 14.9235 14.0494 16.3459 13.9608 17.8159C13.8722 19.286 14.1647 20.7541 14.8098 22.078C15.455 23.4019 16.431 24.5369 17.6434 25.373L13.9453 31.7768L16.7024 31.8904L18.1787 34.221L22.4145 26.8835L22.5 26.8884C22.5428 26.8908 22.5562 26.8847 22.5856 26.8835L26.8214 34.221L28.327 31.9405L31.0547 31.7768L27.3566 25.373C28.4976 24.5874 29.4304 23.5361 30.0746 22.3098C30.7189 21.0835 31.0552 19.7189 31.0547 18.3337ZM16.3895 18.3337C16.3895 17.1251 16.7479 15.9437 17.4193 14.9389C18.0907 13.934 19.0451 13.1508 20.1616 12.6883C21.2782 12.2258 22.5068 12.1048 23.6921 12.3406C24.8774 12.5764 25.9662 13.1583 26.8208 14.0129C27.6754 14.8675 28.2573 15.9562 28.4931 17.1416C28.7289 18.3269 28.6079 19.5555 28.1454 20.6721C27.6829 21.7886 26.8997 22.7429 25.8948 23.4144C24.89 24.0858 23.7086 24.4442 22.5 24.4442C20.8794 24.4442 19.3252 23.8004 18.1792 22.6544C17.0333 21.5085 16.3895 19.9543 16.3895 18.3337Z" fill="#EB1C25"/>
                <path d="M22.5003 22C24.5251 22 26.1666 20.3585 26.1666 18.3337C26.1666 16.3088 24.5251 14.6674 22.5003 14.6674C20.4754 14.6674 18.834 16.3088 18.834 18.3337C18.834 20.3585 20.4754 22 22.5003 22Z" fill="#EB1C25"/>
            </svg>
        :
        name === "telegram"
        ?
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="#EB1C25"/>
                <path d="M38.1438 11.8545C38.2619 11.9728 38.3426 12.1231 38.376 12.2868C38.4093 12.4506 38.3938 12.6205 38.3314 12.7755L28.4071 37.5855C28.3196 37.804 28.1736 37.9941 27.985 38.135C27.7965 38.2758 27.5727 38.3619 27.3384 38.3838C27.1041 38.4056 26.8683 38.3624 26.6569 38.2589C26.4455 38.1554 26.2668 37.9955 26.1405 37.797L20.7204 29.278L12.2014 23.8579C12.0024 23.7316 11.8421 23.5529 11.7383 23.3413C11.6344 23.1298 11.5911 22.8937 11.6129 22.659C11.6348 22.4244 11.7211 22.2003 11.8623 22.0116C12.0034 21.8229 12.1939 21.6768 12.4129 21.5896L37.2229 11.6686C37.3779 11.6062 37.5478 11.5907 37.7115 11.6241C37.8753 11.6574 38.0256 11.7382 38.1438 11.8562V11.8545ZM22.4225 28.78L27.1314 36.1785L35.2035 15.9989L22.4225 28.78ZM33.9977 14.7931L13.8182 22.8653L21.2184 27.5725L33.9977 14.7931Z" fill="white"/>
            </svg>
        :
        name === "t_mobile"
        ?
            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.811523" y="0.789551" width="59.5777" height="59.5777" rx="8.27468" fill="#0056D7"/>
                <path d="M34.2051 22.0627V46.1372C34.2051 46.2006 34.1543 46.2514 34.0909 46.2514H31.4219C30.3601 46.2514 29.3417 45.8296 28.5908 45.0789C27.8399 44.3281 27.4179 43.3098 27.4177 42.2479V22.0627C27.4177 22.0324 27.4057 22.0033 27.3843 21.9819C27.3628 21.9605 27.3338 21.9485 27.3035 21.9485H19.0683C19.0532 21.9485 19.0383 21.9455 19.0244 21.9397C19.0105 21.9339 18.9979 21.9255 18.9873 21.9148C18.9767 21.9041 18.9683 21.8914 18.9626 21.8775C18.9569 21.8635 18.954 21.8486 18.9541 21.8335V19.3319C18.9541 18.27 19.3759 17.2516 20.1266 16.5007C20.8774 15.7498 21.8957 15.3278 22.9575 15.3276H42.5545C42.6179 15.3284 42.6687 15.38 42.6687 15.4426V17.9443C42.6687 19.0061 42.2469 20.0245 41.4961 20.7754C40.7454 21.5263 39.7271 21.9483 38.6652 21.9485H34.3192C34.3042 21.9484 34.2892 21.9513 34.2753 21.957C34.2614 21.9626 34.2487 21.971 34.238 21.9817C34.2273 21.9923 34.2188 22.0049 34.213 22.0188C34.2072 22.0327 34.2051 22.0476 34.2051 22.0627Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        :
        name === "twitter"
        ?
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.217773" width="59.5777" height="59.5777" rx="8.27468" fill="black"/>
                <path d="M32.6501 27.6735L43.5686 14.1416H38.6953L30.3618 24.4765L22.9686 14.1416H12.3594L24.7384 31.443L13.1047 45.8583H17.9796L27.0267 34.6464L35.0527 45.8583H45.6619L32.6501 27.6735ZM28.8758 32.3517L26.5843 29.1499L17.6878 16.7218H21.3511L28.5317 26.7395L30.8201 29.9428L40.3636 43.2781H36.7003L28.8758 32.3517Z" fill="white"/>
            </svg>
        :
        name === "x"
        ?
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4955 7.64284L17.233 1.59863H14.6722L10.293 6.21484L6.40801 1.59863H0.833008L7.33801 9.32655L1.22467 15.7653H3.78634L8.54051 10.7574L12.758 15.7653H18.333L11.4955 7.64284ZM9.51217 9.73242L8.30801 8.3023L3.63301 2.75109H5.55801L9.33134 7.22563L10.5338 8.65647L15.5488 14.6128H13.6238L9.51217 9.73242Z" fill="#EB1C25"/>
            </svg>
        :
        <></>
        )
}