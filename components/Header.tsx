import { Input } from './ui/input'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function Header() {
	return (
		<header className="flex h-14 lg:h-[60px] items-center border-b px-6 bg-gray-100/40">
			<div className="flex-1">
				<h1 className=" font-semibold text-lg">NavTitle</h1>
			</div>
			<div className="flex flex-1 items-center gap-4">
				<Input type="text" placeholder="" />
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Avatar className="w-8 h-8">
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56">
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuItem>Settings</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>GitHub</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Log out</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	)
}
