import { BreadcrumbWithCustomSeparator } from '@/components/BreadcrumbWithCustomSeparator'
import Header from '@/components/Header'
import SideNav from '@/components/SideNav'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
			{/* 侧边栏 */}
			<SideNav />
			{/* 右侧菜单 */}
			<div className="flex flex-col">
				<Header />
				<main className="flex flex-1 flex-col p-6 gap-y-4">
					<BreadcrumbWithCustomSeparator />
					{children}
				</main>
			</div>
		</div>
	)
}
