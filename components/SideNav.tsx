'use client'
import { cn } from '@/lib/utils'
import { HomeIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SideNav() {
	const list = [
		{
			iconComp: <HomeIcon className="w-4 h-4" />,
			href: '/dashboard',
			title: 'Home',
		},
		{
			iconComp: <HomeIcon className="w-4 h-4" />,
			href: '/dashboard/customer',
			title: 'Customers',
		},
		{
			iconComp: <HomeIcon className="w-4 h-4" />,
			href: '/dashboard/invoice',
			title: 'Invoices',
		},
	]
	const pathname = usePathname()

	return (
		<div className="hidden border-r bg-gray-100/40 lg:block">
			<div className="flex flex-col gap-2">
				<div className="flex h-[60px] items-center px-6">
					<Link href="/" className="flex font-semibold">
						<span>Next Admin</span>
					</Link>
				</div>
				<div className="flex-1">
					<nav className="grid items-start px-4 text-sm font-medium">
						{list.map((item) => {
							return (
								<Link
									href={item.href}
									key={item.href}
									className={cn(
										'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900',
										{
											'bg-gray-100 text-gray-900':
												pathname === item.href,
										}
									)}
								>
									{item.iconComp}
									{item.title}
								</Link>
							)
						})}
					</nav>
				</div>
			</div>
		</div>
	)
}
