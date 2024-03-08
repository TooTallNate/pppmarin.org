'use client';
import React from 'react';
import Link, { LinkProps } from 'next/link';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';

export function Menu() {
	return (
		<div>
			<DesktopMenu />
		</div>
	);
}

function MobileMenu() {
	return (
		<div className='md:hidden cursor-pointer border rounded-md border-slate-300 w-10 h-10 flex justify-center items-center p-1 mr-4'>
			<HamburgerMenuIcon className='fill-slate-700' width={18} height={18} />
		</div>
	);
}

function DesktopMenu() {
	return (
		<span className='flex flex-col md:flex-row gap-2 md:gap-4 text-right text-sm md:text-lg'>
			<MenuLink href='/our-schools'>Our Schools</MenuLink>
			<MenuLink href='/convention-2024'>Convention 2024</MenuLink>
		</span>
	);
}

function MenuLink(props: React.PropsWithChildren<LinkProps>) {
	return (
		<Link className='hover:underline font-medium text-slate-800' {...props} />
	);
}

const NavigationMenuDemo = () => {
	return (
		<NavigationMenu.Root className='relative z-[1] flex'>
			<NavigationMenu.List className='center shadow-blackA4 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]'>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className='fill-slate-800 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] p-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]'>
						<HamburgerMenuIcon className='text-slate-800' />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className='data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto'>
						<ul className='m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]'>
							<li className='row-span-3 grid'>
								<NavigationMenu.Link asChild>
									<a
										className='focus:shadow-violet7 from-purple9 to-indigo9 flex
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]'
										href='/'
									>
										<svg
											aria-hidden
											width='38'
											height='38'
											viewBox='0 0 25 25'
											fill='white'
										>
											<path d='M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z'></path>
											<path d='M12 0H4V8H12V0Z'></path>
											<path d='M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z'></path>
										</svg>
										<div className='mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white'>
											Radix Primitives
										</div>
										<p className='text-mauve4 text-[14px] leading-[1.3]'>
											Unstyled, accessible components for React.
										</p>
									</a>
								</NavigationMenu.Link>
							</li>

							<ListItem href='https://stitches.dev/' title='Stitches'>
								CSS-in-JS with best-in-class developer experience.
							</ListItem>
							<ListItem href='/colors' title='Colors'>
								Beautiful, thought-out palettes with auto dark mode.
							</ListItem>
							<ListItem href='https://icons.radix-ui.com/' title='Icons'>
								A crisp set of 15x15 icons, balanced and consistent.
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>
			</NavigationMenu.List>

			<div className='perspective-[2000px] absolute top-full right-0 flex w-full justify-center'>
				<NavigationMenu.Viewport className='data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]' />
			</div>
		</NavigationMenu.Root>
	);
};

const ListItem = React.forwardRef(
	({ className, children, title, ...props }: any, forwardedRef) => (
		<li>
			<NavigationMenu.Link asChild>
				<a
					className={classNames(
						'focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors',
						className,
					)}
					{...props}
					ref={forwardedRef}
				>
					<div className='text-violet12 mb-[5px] font-medium leading-[1.2]'>
						{title}
					</div>
					<p className='text-mauve11 leading-[1.4]'>{children}</p>
				</a>
			</NavigationMenu.Link>
		</li>
	),
);
ListItem.displayName = 'ListItem';

export default NavigationMenuDemo;
