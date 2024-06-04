import { CalendarFold, LucideProps, PencilLine, PieChart } from 'lucide-react'

export const Icons = {
    logo: (props: LucideProps) => (
        <svg {...props} width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="256" height="256" rx="64" fill="url(#paint0_radial_427_1146)" />
            <g clip-path="url(#clip0_427_1146)">
                <path d="M153.131 204H102.327C96.5105 204 91.0416 201.744 86.9287 197.647C82.8159 193.55 80.5505 188.103 80.5505 182.309V164.337C80.5505 160.716 83.4978 157.78 87.1332 157.78C90.7686 157.78 93.7159 160.716 93.7159 164.337V182.309C93.7159 187.039 97.5786 190.886 102.327 190.886H153.131C157.879 190.886 161.742 187.039 161.742 182.309V162.445C161.742 158.824 164.689 155.889 168.325 155.889C171.96 155.889 174.908 158.824 174.908 162.445V182.309C174.908 188.103 172.642 193.55 168.529 197.647C164.417 201.744 158.948 204 153.131 204Z" fill="white" />
                <path d="M86.6971 170.188C86.5593 170.188 86.4206 170.183 86.2811 170.175C79.5369 169.756 72.8585 167.789 66.9701 164.487C61.0817 161.186 55.9287 156.52 52.0695 150.994C48.2103 145.468 45.6106 139.033 44.5512 132.385C43.4919 125.738 43.9632 118.818 45.9152 112.373C47.8663 105.929 51.3156 99.9029 55.8884 94.9476C60.4611 89.9924 66.1995 86.0627 72.482 83.5833C78.7645 81.1049 85.6482 80.0549 92.388 80.5471C99.1287 81.0393 105.784 83.0789 111.636 86.4447C114.784 88.2553 115.863 92.2655 114.044 95.4014C112.825 97.5048 110.612 98.6807 108.337 98.6807C107.22 98.6807 106.089 98.3974 105.051 97.8012C100.909 95.418 96.1963 93.9746 91.4234 93.6258C86.6514 93.277 81.7776 94.0201 77.3295 95.7755C72.8813 97.531 68.8185 100.313 65.5798 103.822C62.342 107.331 59.9003 111.598 58.5179 116.16C57.1365 120.723 56.8021 125.623 57.5525 130.33C58.3029 135.037 60.1434 139.594 62.8757 143.506C65.6079 147.419 69.2565 150.722 73.4255 153.06C77.5954 155.397 82.3235 156.79 87.0982 157.086C90.7266 157.312 93.4851 160.424 93.2587 164.038C93.041 167.513 90.1438 170.188 86.6953 170.188H86.6971Z" fill="white" />
                <path d="M164.194 106.321C163.86 106.321 163.522 106.295 163.183 106.243C159.589 105.691 157.126 102.343 157.679 98.7637C158.296 94.7763 158.152 90.7592 157.248 86.8259C156.344 82.8927 154.722 79.213 152.425 75.8883C150.128 72.5644 147.257 69.7406 143.891 67.4955C140.525 65.2505 136.811 63.6803 132.85 62.8306C128.889 61.9808 124.856 61.8864 120.859 62.5517C116.863 63.217 113.08 64.6123 109.612 66.6991C106.144 68.7859 103.144 71.4733 100.694 74.6871C98.2448 77.9008 96.4517 81.5009 95.3642 85.3887C94.3891 88.8769 90.759 90.9174 87.257 89.9461C83.755 88.9748 81.7065 85.359 82.6816 81.8707C84.2167 76.3805 86.7488 71.2959 90.2096 66.7568C93.6694 62.2177 97.9069 58.4226 102.804 55.4755C107.702 52.5285 113.046 50.5579 118.689 49.6181C124.332 48.6783 130.03 48.8112 135.623 50.0115C141.217 51.2119 146.463 53.4289 151.217 56.5998C155.971 59.7707 160.026 63.759 163.27 68.4537C166.514 73.1484 168.806 78.3458 170.082 83.9007C171.358 89.4565 171.564 95.1295 170.692 100.761C170.191 104.001 167.387 106.32 164.195 106.32L164.194 106.321Z" fill="white" />
                <path d="M165.906 168.902C162.911 168.902 159.915 168.601 156.937 168C153.374 167.28 151.071 163.82 151.794 160.27C152.516 156.721 155.991 154.428 159.553 155.147C163.924 156.03 168.35 155.998 172.706 155.052C177.062 154.105 181.099 152.3 184.703 149.684C188.307 147.068 191.27 143.795 193.509 139.956C195.749 136.115 197.137 131.929 197.633 127.516C198.129 123.102 197.705 118.715 196.372 114.477C195.04 110.237 192.877 106.392 189.943 103.048C187.008 99.7044 183.471 97.0537 179.433 95.1723C175.394 93.2901 171.086 92.2847 166.628 92.1833C162.994 92.1011 160.114 89.0998 160.197 85.4796C160.278 81.9101 163.209 79.0714 166.775 79.0714C166.826 79.0714 166.877 79.0714 166.928 79.0731C173.223 79.2156 179.308 80.6354 185.013 83.294C190.717 85.9526 195.71 89.6943 199.855 94.4179C204 99.1405 207.055 104.57 208.938 110.557C210.819 116.543 211.419 122.74 210.718 128.974C210.018 135.207 208.059 141.118 204.896 146.543C201.733 151.967 197.547 156.59 192.457 160.283C187.367 163.977 181.666 166.527 175.513 167.865C172.33 168.556 169.12 168.903 165.909 168.903L165.906 168.902Z" fill="white" />
            </g>
            <defs>
                <radialGradient id="paint0_radial_427_1146" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(45) scale(362.039)">
                    <stop stop-color="#A027FF" />
                    <stop offset="1" stop-color="#44009A" />
                </radialGradient>
                <clipPath id="clip0_427_1146">
                    <rect width="167" height="155" fill="white" transform="translate(44 49)" />
                </clipPath>
            </defs>
        </svg>
    ),
    logo2: (props: LucideProps) => (
        <svg {...props} width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M173.411 181.732C174.745 185.937 175.919 190.076 177.406 194.099C179.296 199.211 175.821 203.728 170.699 204.211C169.385 204.335 168.225 203.934 167.127 203.294C162.472 200.583 157.926 197.689 153.497 194.63C151.77 193.437 150.349 193.174 148.291 193.934C135.993 198.474 123.423 199.303 110.618 196.295C107.483 195.558 104.434 194.598 101.467 193.379C100.621 193.031 99.9869 193.045 99.206 193.554C94.6478 196.523 90.0567 199.442 85.475 202.375C83.7495 203.48 81.9166 204.318 79.8128 204.118C75.0551 203.665 72.1797 199.34 73.5413 194.665C74.6962 190.7 75.8727 186.739 77.1635 182.817C77.6186 181.434 77.3945 180.531 76.3486 179.514C70.0819 173.42 65.0374 166.472 61.6248 158.364C58.607 151.194 56.9778 143.778 57.2816 135.989C57.3495 134.249 56.8242 133.433 55.0379 132.913C50.2423 131.519 47.045 128.458 46.1365 123.335C44.8845 116.274 50.6424 110.492 56.8945 110.435C57.1121 110.433 57.3298 110.429 57.5474 110.426C62.7306 110.373 62.7306 110.373 64.6646 105.333C64.315 104.614 63.5313 104.39 62.9327 103.955C59.3424 101.347 56.6547 98.1288 56.6615 93.4629C56.6695 87.9544 59.8733 84.3779 64.4365 81.9C70.6653 78.5177 77.4747 76.861 84.3494 75.38C90.3658 74.0839 96.4394 73.2769 102.564 72.8315C103.761 72.7445 104.013 72.2593 103.988 71.2091C103.937 69.0335 103.95 66.8555 103.978 64.679C104.014 61.8117 105.853 59.8265 108.417 59.8363C110.992 59.8463 112.998 61.9695 113.01 64.7739C113.031 69.7805 113.051 74.7876 112.998 79.7938C112.966 82.8791 111.084 84.7866 108.302 84.7126C106.404 84.6621 105.139 83.6275 104.378 81.9837C103.983 81.13 103.493 80.7161 102.517 80.8098C94.8798 81.5431 87.2757 82.4419 80.0004 85.0756C79.5072 85.2542 78.9436 85.3602 78.5816 86.0351C80.4225 87.0511 82.4717 87.3372 84.4471 87.7468C91.6946 89.2495 99.0567 89.8269 106.419 90.4844C116.853 91.4161 127.296 91.0926 137.731 91.0005C144.404 90.9416 151.052 90.0377 157.691 89.2726C161.963 88.7803 166.192 88.0934 170.313 86.8402C170.912 86.658 171.6 86.6104 172.065 85.9122C171.134 85.0883 169.977 84.7782 168.867 84.4218C164.034 82.8689 159.037 82.1198 154.019 81.4945C152.132 81.2593 150.239 81.068 148.35 80.8427C147.447 80.735 146.862 80.9682 146.428 81.8968C145.433 84.0215 143.592 84.9242 141.533 84.4898C139.608 84.0839 138.032 82.3416 137.997 80.1258C137.916 74.9577 137.891 69.784 138.046 64.6186C138.139 61.5379 140.143 59.7149 142.744 59.8879C145.298 60.0577 146.97 62.1194 146.982 65.1287C146.991 67.1422 147.04 69.1578 146.966 71.1686C146.923 72.3398 147.296 72.7649 148.513 72.8521C156.819 73.4474 165.038 74.6923 173.111 76.7334C178.176 78.0142 183.134 79.6537 187.619 82.4688C191.841 85.1188 194.416 88.7825 194.246 93.8703C194.093 98.4558 191.254 101.582 187.722 104.064C186.543 104.893 186.54 105.393 186.938 106.749C187.906 110.04 189.967 110.543 193.037 110.438C199.211 110.227 203.748 113.922 204.815 119.526C205.946 125.468 202.164 131.451 196.113 132.931C194.354 133.362 193.964 134.092 193.949 135.789C193.861 146.1 191.312 155.773 186.174 164.752C182.965 170.36 179.244 175.539 174.235 179.701C173.64 180.195 173.039 180.699 173.411 181.732ZM172.162 100.575C175.717 99.7737 179.245 98.8831 182.578 97.3589C183.781 96.8086 184.902 96.1655 185.56 94.942C186.25 93.6609 185.966 92.5057 185.053 91.4882C184.207 90.5452 183.184 90.7774 182.207 91.2582C178.666 93.0019 174.884 94.0557 171.059 94.8515C158.415 97.4817 145.591 98.6775 132.704 99.0295C118.611 99.4145 104.548 98.7905 90.5761 96.7733C83.1455 95.7004 75.7784 94.3197 68.8419 91.2665C68.0182 90.9039 67.2113 90.2703 66.2779 91.0505C65.2833 91.8818 65.0911 92.9558 65.3232 94.1524C65.5841 95.4974 66.4605 96.3511 67.6494 96.9078C70.2648 98.1327 72.9729 99.1166 75.757 99.8773C80.8494 101.269 86.0726 101.926 91.2835 102.688C98.6034 103.757 105.952 104.663 113.337 104.726C126.92 104.84 140.527 105.36 154.055 103.492C160.022 102.668 166.031 102.108 172.162 100.575ZM73.799 127.434C74.8916 122.933 76.269 118.537 78.5745 114.483C79.0329 113.677 79.4688 112.858 79.5616 111.915C79.7771 109.727 77.5759 108.108 75.5376 108.938C74.6302 109.307 74.0377 110 73.5697 110.814C69.5794 117.757 67.4318 125.267 66.6142 133.202C66.1377 137.827 66.4658 142.417 66.9508 147.015C67.2216 149.581 68.59 151.274 70.4542 151.152C72.5071 151.019 73.6504 149.315 73.236 146.486C72.3132 140.184 72.5 133.934 73.799 127.434ZM92.0879 121.041C91.1001 119.526 89.6499 119.042 87.9922 119.494C86.6541 119.86 85.7808 120.865 85.6008 122.292C85.4071 123.827 85.9396 125.071 87.3429 125.836C88.7112 126.583 90.0983 126.571 91.2828 125.535C92.6026 124.381 92.9085 122.905 92.0879 121.041ZM89.2516 152.541C89.3116 149.761 87.3728 147.946 85.0608 148.618C83.4994 149.072 82.5478 150.382 82.5785 152.035C82.6069 153.568 83.6034 154.799 85.0304 155.064C86.9262 155.416 88.2867 154.676 89.2516 152.541ZM81.6408 137.555C81.9632 139.175 83.0801 139.9 84.6011 140.085C85.9726 140.251 87.0215 139.681 87.7061 138.477C88.4601 137.152 88.3302 135.849 87.3917 134.704C86.5058 133.623 85.3333 133.151 83.9243 133.634C82.3677 134.167 81.6515 135.312 81.6408 137.555ZM56.8214 124.243C57.4667 124.489 58.2418 125.29 58.619 124.01C59.0252 122.631 59.5205 121.26 59.6167 119.826C58.7394 119.297 57.8599 119.428 57.0034 119.404C56.119 119.379 55.3646 119.655 55.0008 120.501C54.6102 121.409 54.6936 122.327 55.3775 123.084C55.735 123.48 56.202 123.777 56.8214 124.243ZM192.39 123.21C192.602 123.688 192.548 124.299 193.071 124.615C195.481 123.998 196.727 122.623 196.293 121.075C195.848 119.491 194.247 119.052 191.656 119.85C191.573 120.942 192.145 121.915 192.39 123.21Z" fill="white" />
            <path d="M130.01 63.0942C130.009 68.6396 130.02 74.0219 130.003 79.404C129.993 82.4522 127.983 84.7188 125.4 84.6555C122.856 84.5931 120.964 82.3753 120.961 79.3927C120.95 70.9117 120.947 62.4307 120.961 53.9497C120.965 50.9228 122.729 48.9169 125.324 48.9093C128.243 48.9008 129.984 50.7654 130.003 53.9605C130.021 56.9506 130.009 59.9408 130.01 63.0942Z" fill="white" />
            <path d="M109.921 46.3103C112.655 47.851 113.383 50.2357 111.919 52.4847C110.575 54.5477 107.733 54.9987 105.759 53.4622C104.208 52.2549 103.779 50.1513 104.706 48.3027C105.673 46.374 107.416 45.6777 109.921 46.3103Z" fill="white" />
            <path d="M138.367 51.428C138.086 47.9794 139.558 46 142.267 46C144.442 46 145.978 47.3044 146.446 49.55C146.815 51.3215 145.733 53.2566 143.96 53.9956C142.003 54.8112 140.012 54.206 138.845 52.4261C138.668 52.157 138.551 51.8488 138.367 51.428Z" fill="white" />
        </svg>
    ),
    apple: (props: LucideProps) => (
        <svg {...props} width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_474_1125)">
                <path d="M16.844 14.0277C16.5718 14.6566 16.2495 15.2355 15.8762 15.7677C15.3674 16.4932 14.9507 16.9954 14.6296 17.2743C14.1318 17.732 13.5985 17.9665 13.0274 17.9798C12.6174 17.9798 12.123 17.8632 11.5475 17.6265C10.97 17.3909 10.4394 17.2743 9.95419 17.2743C9.44532 17.2743 8.89956 17.3909 8.3158 17.6265C7.73115 17.8632 7.26016 17.9865 6.90006 17.9987C6.35242 18.022 5.80654 17.7809 5.26167 17.2743C4.91391 16.971 4.47892 16.451 3.95783 15.7143C3.39873 14.9277 2.93908 14.0155 2.57898 12.9755C2.19333 11.8522 2 10.7645 2 9.7114C2 8.5051 2.26066 7.46469 2.78275 6.59283C3.19307 5.89251 3.73894 5.34009 4.42214 4.93454C5.10535 4.529 5.84354 4.32234 6.63852 4.30912C7.0735 4.30912 7.64393 4.44367 8.3528 4.70811C9.05966 4.97343 9.51354 5.10798 9.71253 5.10798C9.8613 5.10798 10.3655 4.95065 11.2203 4.637C12.0286 4.34612 12.7108 4.22568 13.2696 4.27312C14.784 4.39534 15.9218 4.99232 16.6784 6.06784C15.324 6.88848 14.654 8.03789 14.6674 9.5124C14.6796 10.6609 15.0962 11.6167 15.9151 12.3755C16.2862 12.7278 16.7006 13 17.1617 13.1933C17.0617 13.4833 16.9562 13.7611 16.844 14.0277ZM13.3707 0.360347C13.3707 1.26055 13.0419 2.10107 12.3863 2.87905C11.5952 3.80391 10.6384 4.33834 9.60076 4.25401C9.58753 4.14601 9.57987 4.03235 9.57987 3.91291C9.57987 3.04871 9.95608 2.12385 10.6242 1.36765C10.9577 0.984772 11.3819 0.666415 11.8963 0.412456C12.4097 0.162285 12.8952 0.0239359 13.3519 0.000244141C13.3652 0.120588 13.3707 0.240939 13.3707 0.360335V0.360347Z" fill="black" />
            </g>
            <defs>
                <clipPath id="clip0_474_1125">
                    <rect width="18" height="18" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>
    )
}
