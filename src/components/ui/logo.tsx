//import Image from "next/image";
import Link from "@components/ui/link";
import cn from "classnames";
import { siteSettings } from "@settings/site-settings";

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
	className,
	...props
}) => {
	return (
		<Link
			href={siteSettings.logo.href}
			className={cn("inline-flex focus:outline-none", className)}
			{...props}
		>
      <svg width={siteSettings.logo.width} height={siteSettings.logo.height} viewBox="0 0 221 49" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>{siteSettings.logo.alt}</title>
        <path d="M43.1587 24.8852C43.1587 31.5457 41.0717 37.185 36.8977 41.803C32.7682 46.3766 27.684 48.6634 21.645 48.6634C15.7393 48.6634 10.6773 46.3322 6.45893 41.6698C2.24056 37.0074 0.131383 31.3903 0.131383 24.8186C0.131383 18.0692 2.21836 12.4299 6.39232 7.9007C10.6107 3.37151 15.8281 1.10691 22.0447 1.10691C28.0392 1.10691 33.0568 3.39371 37.0976 7.9673C41.1383 12.4965 43.1587 18.1358 43.1587 24.8852ZM31.4361 25.9508C31.4361 17.1145 30.3926 10.5871 28.3056 6.36877C26.9291 3.61573 24.7533 2.23921 21.7782 2.23921C18.7588 2.23921 16.3388 4.17077 14.5182 8.03391C12.7421 11.897 11.854 17.0701 11.854 23.553C11.854 32.9667 13.4525 40.0047 16.6496 44.6671C17.9817 46.6208 19.9133 47.5977 22.4443 47.5977C25.375 47.5977 27.4397 46.199 28.6386 43.4016C30.5036 39.05 31.4361 33.2331 31.4361 25.9508ZM68.333 43.6014C68.333 44.0898 67.9112 44.7337 67.0675 45.5329C64.8918 47.6199 61.8945 48.6634 58.0758 48.6634C54.5679 48.6634 52.2589 47.7975 51.1488 46.0658C50.7047 45.3997 50.4383 44.7781 50.3495 44.2008C50.3051 43.6236 50.2829 42.136 50.2829 39.7382V36.5412C50.2829 35.6975 50.2829 34.8094 50.2829 33.8769C50.2385 32.9445 50.2163 32.4782 50.2163 32.4782V26.4837L50.1497 21.6881C50.1497 20.8888 50.0387 20.4226 49.8167 20.2894C49.5946 20.1562 48.9286 20.0895 47.8185 20.0895C46.4864 20.0895 45.8203 19.9119 45.8203 19.5567C45.8203 19.2903 46.0645 19.1127 46.553 19.0239C50.7269 18.8906 54.3236 16.626 57.3431 12.2301C57.7427 11.6084 58.0536 11.2976 58.2756 11.2976C58.542 11.2976 58.6752 11.6084 58.6752 12.2301C58.6308 16.0488 58.7862 18.1358 59.1415 18.491C59.4967 18.8462 60.5846 19.0239 62.4051 19.0239C64.2701 19.0239 65.58 18.935 66.3349 18.7574C66.4237 18.713 66.5125 18.6908 66.6013 18.6908C66.7789 18.6908 66.8677 18.824 66.8677 19.0905C66.8677 19.7121 66.5791 20.0229 66.0018 20.0229C64.1813 20.0673 62.1609 20.0895 59.9407 20.0895C59.7631 20.0895 59.4523 20.0673 59.0082 20.0229V21.4217C59.0082 33.3219 59.1637 40.2933 59.4745 42.3359C59.8741 44.9113 61.1174 46.199 63.2044 46.199C64.1369 46.199 65.3358 45.5329 66.8011 44.2008C67.5116 43.5792 67.9556 43.2683 68.1332 43.2683C68.2664 43.2683 68.333 43.3793 68.333 43.6014ZM85.278 47.3979C85.278 47.7531 84.4343 47.9307 82.7469 47.9307C82.3473 47.9307 81.104 47.8863 79.017 47.7975C77.9513 47.7531 76.9078 47.7309 75.8866 47.7309C74.9097 47.7309 73.0891 47.7753 70.4249 47.8641L68.4267 47.9307C67.4498 47.9751 66.9614 47.8197 66.9614 47.4645C66.9614 47.1093 67.472 46.9539 68.4933 46.9983C70.0474 47.0427 70.9355 46.8873 71.1575 46.532C71.424 46.1768 71.5572 44.8447 71.5572 42.5357V7.43446C71.5572 5.92473 71.4018 5.03665 71.0909 4.77023C70.7801 4.4594 69.8698 4.30399 68.3601 4.30399C67.25 4.30399 66.695 4.14857 66.695 3.83775C66.695 3.48252 67.2722 3.2827 68.4267 3.2383C73.3999 3.06068 77.4629 2.30582 80.6156 0.973699C80.5712 2.30582 80.549 10.0987 80.549 24.3523V40.9371C80.549 43.9566 80.6156 45.7328 80.7488 46.2656C80.9264 46.754 81.4814 46.9761 82.4139 46.9317L84.4121 46.865C84.9893 46.865 85.278 47.0427 85.278 47.3979ZM99.6799 5.23647C99.6799 6.47977 99.258 7.54547 98.4144 8.43354C97.5707 9.32162 96.5494 9.76566 95.3505 9.76566C94.1072 9.76566 93.0637 9.34382 92.22 8.50015C91.3764 7.65648 90.9545 6.59078 90.9545 5.30307C90.9545 4.05976 91.3764 3.03848 92.22 2.23921C93.0637 1.43994 94.1516 1.04031 95.4837 1.04031C96.6826 1.04031 97.6817 1.43994 98.481 2.23921C99.2803 3.03848 99.6799 4.03756 99.6799 5.23647ZM104.475 47.4645C104.475 47.7753 104.276 47.9307 103.876 47.9307L95.0175 47.7975L88.6233 47.9307C88.3569 47.9307 88.0239 47.9529 87.6242 47.9973C87.269 47.9973 87.0692 47.9973 87.0248 47.9973C86.492 47.9973 86.2255 47.8197 86.2255 47.4645C86.2255 47.1981 86.7362 47.0427 87.7575 46.9983C89.2672 46.9539 90.1553 46.7984 90.4217 46.532C90.6881 46.2212 90.8213 45.3331 90.8213 43.8678V24.7519C90.8213 23.0646 90.6659 22.0655 90.3551 21.7547C90.0887 21.3995 89.2228 21.2218 87.7575 21.2218C86.825 21.2218 86.2699 21.1996 86.0923 21.1552C85.9591 21.1108 85.8925 20.9554 85.8925 20.689C85.8925 20.3782 86.2255 20.2228 86.8916 20.2228C91.776 20.1784 95.95 19.4235 99.4135 17.9582C99.5023 18.491 99.6133 19.9563 99.7465 22.3541L99.8131 30.8131V43.3349C99.8131 45.1555 99.9685 46.2212 100.279 46.532C100.635 46.8428 101.789 46.9983 103.743 46.9983C104.231 46.9983 104.475 47.1537 104.475 47.4645ZM134.116 19.4235C134.116 19.6899 133.583 19.8453 132.518 19.8897C131.319 19.9341 130.475 20.2006 129.987 20.689C129.542 21.1774 128.943 22.4429 128.188 24.4855C127.433 26.6613 126.501 29.3477 125.391 32.5448L119.929 47.2647C119.574 48.286 119.174 48.7966 118.73 48.7966C118.331 48.7966 117.687 47.8197 116.799 45.866C115.955 43.9122 113.046 36.8742 108.073 24.7519C107.141 22.4874 106.586 21.1996 106.408 20.8888C106.008 20.3116 105.009 20.0229 103.411 20.0229C102.7 20.0229 102.345 19.8453 102.345 19.4901C102.345 19.1349 102.589 18.9572 103.078 18.9572C103.477 18.9572 103.833 18.9795 104.144 19.0239C104.854 19.2015 107.318 19.2459 111.537 19.1571L118.197 19.0239C118.464 18.9795 118.819 18.9572 119.263 18.9572C119.751 18.9572 119.996 19.1127 119.996 19.4235C119.996 19.6455 119.019 19.8231 117.065 19.9563C116.532 20.0007 116.266 20.2672 116.266 20.7556C116.266 21.2884 116.998 23.5752 118.464 27.616C119.929 31.6123 121.239 34.9648 122.393 37.6735C126.168 27.5938 128.055 22.0433 128.055 21.022C128.055 20.2228 127.211 19.8453 125.524 19.8897C124.369 19.9341 123.792 19.7787 123.792 19.4235C123.792 19.1571 123.97 19.0239 124.325 19.0239H127.322C127.9 19.0239 128.499 19.0239 129.121 19.0239C129.787 19.0683 130.164 19.0905 130.253 19.0905C130.608 19.0905 131.141 19.0683 131.851 19.0239C132.606 18.9795 133.161 18.9572 133.517 18.9572C133.916 18.9572 134.116 19.1127 134.116 19.4235ZM162.897 44.334C162.897 44.6893 162.542 45.1777 161.831 45.7994C159.922 47.5311 157.569 48.397 154.771 48.397C152.951 48.397 151.618 48.0195 150.775 47.2647C149.976 46.5098 149.443 45.1555 149.176 43.2017C147.178 46.8428 144.447 48.6634 140.984 48.6634C139.074 48.6634 137.52 48.064 136.321 46.865C135.167 45.6661 134.59 44.112 134.59 42.2026C134.59 36.6078 139.385 33.2997 148.976 32.2784V30.8797C148.976 26.4393 148.821 23.7085 148.51 22.6872L148.444 22.3541C147.822 20.1339 146.246 19.0239 143.715 19.0239C142.249 19.0239 141.073 19.4457 140.184 20.2894C139.296 21.133 138.852 21.9545 138.852 22.7538C138.852 23.1978 139.385 23.4642 140.451 23.553C142.049 23.6863 142.849 24.6631 142.849 26.4837C142.849 27.4606 142.516 28.2821 141.85 28.9481C141.228 29.5698 140.407 29.8806 139.385 29.8806C138.098 29.8806 137.032 29.5032 136.188 28.7483C135.389 27.949 134.989 26.9499 134.989 25.751C134.989 23.8417 135.944 22.1099 137.853 20.5558C139.763 19.0017 142.271 18.2246 145.38 18.2246C149.998 18.2246 153.217 19.0461 155.038 20.689C156.503 22.0655 157.236 24.4633 157.236 27.8824V39.272C157.236 41.4922 157.258 42.7799 157.302 43.1351C157.524 45.0001 158.168 45.9326 159.234 45.9326C159.989 45.9326 160.921 45.3997 162.031 44.334C162.253 44.112 162.431 44.001 162.564 44.001C162.786 44.001 162.897 44.112 162.897 44.334ZM148.976 36.408V33.1443C144.669 33.9879 142.516 36.4302 142.516 40.4709C142.516 43.5792 143.581 45.1333 145.713 45.1333C146.912 45.1333 147.755 44.4672 148.244 43.1351C148.732 41.803 148.976 39.5606 148.976 36.408ZM197.886 47.4645C197.886 47.8197 197.331 47.9973 196.221 47.9973C196.132 47.9973 195.555 47.9751 194.489 47.9307C193.423 47.8863 191.869 47.8641 189.827 47.8641H187.695L181.967 47.9307C181.345 47.9307 181.035 47.7531 181.035 47.3979C181.035 47.0871 181.301 46.9317 181.834 46.9317H182.367C183.521 46.9317 184.187 46.7984 184.365 46.532C184.587 46.2212 184.698 45.2221 184.698 43.5348V30.6799C184.698 25.9286 184.387 23.0868 183.765 22.1543C183.233 21.3551 182.278 20.9554 180.901 20.9554C179.525 20.9554 178.393 21.3773 177.505 22.2209C176.616 23.0646 176.172 24.1303 176.172 25.418L176.239 45.5995C176.328 46.1324 176.505 46.4876 176.772 46.6652C177.083 46.7984 177.815 46.8873 178.97 46.9317C179.325 46.9317 179.503 47.0649 179.503 47.3313C179.503 47.5977 179.347 47.7531 179.036 47.7975C178.726 47.8419 177.616 47.8641 175.706 47.8641C173.797 47.8641 172.22 47.8863 170.977 47.9307C168.535 48.0195 166.048 48.064 163.517 48.064C162.984 48.064 162.718 47.9085 162.718 47.5977C162.718 47.2425 163.384 47.0649 164.716 47.0649C166.093 47.0649 166.892 46.7984 167.114 46.2656L167.314 45.3331V30.0138C167.314 25.7066 167.269 23.4642 167.181 23.2866C167.047 22.6206 166.448 22.2875 165.382 22.2875C164.805 22.2875 164.294 22.3097 163.85 22.3541H163.118C162.407 22.3541 162.052 22.1987 162.052 21.8879C162.052 21.5771 162.318 21.3995 162.851 21.3551C167.824 21.133 171.799 20.0895 174.774 18.2246C175.129 18.047 175.373 17.9582 175.506 17.9582C175.862 17.9582 176.039 18.3134 176.039 19.0239C176.039 20.9776 176.017 22.2431 175.973 22.8204C178.326 19.7565 181.345 18.2246 185.031 18.2246C188.85 18.2246 191.336 19.5567 192.491 22.2209C192.979 23.331 193.268 24.5743 193.357 25.9508C193.49 27.3274 193.557 30.1692 193.557 34.4764V44.1342C193.557 45.5107 193.668 46.3322 193.89 46.5986C194.112 46.8206 194.822 46.9317 196.021 46.9317C197.264 46.9317 197.886 47.1093 197.886 47.4645ZM220.863 43.6014C220.863 44.0898 220.441 44.7337 219.597 45.5329C217.421 47.6199 214.424 48.6634 210.605 48.6634C207.098 48.6634 204.789 47.7975 203.678 46.0658C203.234 45.3997 202.968 44.7781 202.879 44.2008C202.835 43.6236 202.813 42.136 202.813 39.7382V36.5412C202.813 35.6975 202.813 34.8094 202.813 33.8769C202.768 32.9445 202.746 32.4782 202.746 32.4782V26.4837L202.679 21.6881C202.679 20.8888 202.568 20.4226 202.346 20.2894C202.124 20.1562 201.458 20.0895 200.348 20.0895C199.016 20.0895 198.35 19.9119 198.35 19.5567C198.35 19.2903 198.594 19.1127 199.083 19.0239C203.257 18.8906 206.853 16.626 209.873 12.2301C210.272 11.6084 210.583 11.2976 210.805 11.2976C211.072 11.2976 211.205 11.6084 211.205 12.2301C211.161 16.0488 211.316 18.1358 211.671 18.491C212.026 18.8462 213.114 19.0239 214.935 19.0239C216.8 19.0239 218.11 18.935 218.865 18.7574C218.953 18.713 219.042 18.6908 219.131 18.6908C219.309 18.6908 219.397 18.824 219.397 19.0905C219.397 19.7121 219.109 20.0229 218.532 20.0229C216.711 20.0673 214.691 20.0895 212.47 20.0895C212.293 20.0895 211.982 20.0673 211.538 20.0229V21.4217C211.538 33.3219 211.693 40.2933 212.004 42.3359C212.404 44.9113 213.647 46.199 215.734 46.199C216.667 46.199 217.866 45.5329 219.331 44.2008C220.041 43.5792 220.485 43.2683 220.663 43.2683C220.796 43.2683 220.863 43.3793 220.863 43.6014Z"/>
      </svg>
    </Link>
	);
};

export default Logo;
