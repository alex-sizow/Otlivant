import SearchIcon from '@components/icons/search-icon';
import HeaderMenu from '@components/layout/header/header-menu';
import Logo from '@components/ui/logo';
import { useUI } from '@contexts/ui.context';
import { addActiveScroll } from '@utils/add-active-scroll';
import { ROUTES } from '@utils/routes';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef } from 'react';
import { useRefreshTokenMutation } from '../../../../generated/graphql';

const AuthMenu = dynamic(() => import('./auth-menu'), {
	ssr: false,
});
const CartButton = dynamic(
	() => import('@components/cart/cart-button'),
	{
		ssr: false,
	}
);

interface HeaderProps {
	menu: any;
}

type DivElementRef =
	React.MutableRefObject<HTMLDivElement>;
const Header: React.FC<HeaderProps> = ({ menu }) => {
	const {
		openSidebar,
		setDrawerView,
		openSearch,
		openModal,
		setModalView,
	} = useUI();

	const { t } = useTranslation('common');

	let isAuthorized = false;
	let needRefresh = false;
	if (typeof window !== 'undefined') {
		isAuthorized = !!sessionStorage.getItem('token');
		needRefresh =
			sessionStorage.getItem('needRefresh') !== 'false';
	}

	const [refresh, {}] = useRefreshTokenMutation({
		variables: { csrfToken: '' },
	});

	useEffect(() => {
		if (needRefresh && window !== undefined) {
			refresh({
				variables: {
					csrfToken:
						(sessionStorage.getItem(
							'csrfToken'
						) as string) ||
						(sessionStorage.getItem(
							'refreshToken'
						) as string) ||
						'',
				},
			}).then(({ data }) => {
				const token = data && data?.tokenRefresh?.token;
				if (token) {
					sessionStorage.setItem('token', token);
					localStorage.setItem('needsRefresh', 'false');
				}
			});
		}
	}, [needRefresh]);

	const siteHeaderRef = useRef() as DivElementRef;
	addActiveScroll(siteHeaderRef);

	function handleLogin() {
		setModalView('LOGIN_VIEW');
		return openModal();
	}

	function handleMobileMenu() {
		setDrawerView('MOBILE_MENU');
		return openSidebar();
	}

	return (
		<header
			id='siteHeader'
			ref={siteHeaderRef}
			className='w-full h-16 sm:h-20 lg:h-24 relative z-20 font-text'>
			<div
				style={{
					background:
						"url('/assets/client/bg.jpg') no-repeat center center / cover",
				}}
				className={`innerSticky text-secondary body-font bg-base-100 w-full h-16 sm:h-20 lg:h-24 z-20 ps-4 md:ps-0 lg:ps-6 pe-4 lg:pe-6 transition duration-200 ease-in-out`}>
				<div className='flex items-center justify-center mx-auto max-w-[1920px] h-full w-full'>
					<button
						aria-label='Menu'
						className='menuBtn hidden md:flex lg:hidden flex-col items-center justify-center px-5 2xl:px-7 flex-shrink-0 h-full outline-none focus:outline-none'
						onClick={handleMobileMenu}>
						<span className='menuIcon'>
							<span className='bar' />
							<span className='bar' />
							<span className='bar' />
						</span>
					</button>
					<Logo className='text-white' />

					<HeaderMenu
						data={menu}
						className='hidden lg:flex md:ms-6 xl:ms-10'
					/>
					<div className='hidden md:flex justify-end items-center space-s-6 lg:space-s-5 xl:space-s-8 2xl:space-s-10 ms-auto flex-shrink-0'>
						<button
							className='flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform'
							onClick={openSearch}
							aria-label='search-button'>
							<SearchIcon color='#fff' />
						</button>
						<div className='-mt-0.5 flex-shrink-0'>
							<AuthMenu
								isAuthorized={isAuthorized}
								href={ROUTES.ACCOUNT}
								className='text-sm xl:text-secondary text-secondary font-semibold'
								btnProps={{
									className:
										'text-sm xl:text-base text-base-100 font-semibold focus:outline-none',
									children: t('text-sign-in'),
									onClick: handleLogin,
								}}>
								{t('text-account')}
							</AuthMenu>
						</div>
						<CartButton color='#fff' />
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
