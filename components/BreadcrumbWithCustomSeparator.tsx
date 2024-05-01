'use client'

import { SlashIcon } from '@radix-ui/react-icons'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { usePathname } from 'next/navigation'
import { Fragment, useEffect, useState } from 'react'

export function BreadcrumbWithCustomSeparator() {
	const [breadcrumbs, setBreadcrums] = useState<Record<string, any>[]>([])
	const pathname = usePathname()

	useEffect(() => {
		const linkPath = pathname.split('/')
		linkPath.shift()
		const pathArr = linkPath.map((path, i) => {
			return {
				breadcrumb: path,
				href: '/' + linkPath.slice(0, i + 1).join('/'),
			}
		})
		setBreadcrums(pathArr)
	}, [pathname])

	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbSeparator>
					<SlashIcon />
				</BreadcrumbSeparator>
				{breadcrumbs.map((item, i) => {
					return (
						<Fragment key={item.href}>
							<BreadcrumbItem>
								{item.href === pathname ? (
									<BreadcrumbPage>
										{item.breadcrumb}
									</BreadcrumbPage>
								) : (
									<BreadcrumbLink href={item.href}>
										{item.breadcrumb}
									</BreadcrumbLink>
								)}
							</BreadcrumbItem>
							{i !== breadcrumbs.length - 1 && (
								<BreadcrumbSeparator>
									<SlashIcon />
								</BreadcrumbSeparator>
							)}
						</Fragment>
					)
				})}
			</BreadcrumbList>
		</Breadcrumb>
	)
}
