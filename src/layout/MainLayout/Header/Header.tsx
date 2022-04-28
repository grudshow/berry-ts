import { useTheme } from '@mui/material/styles'
import { Avatar, Box, ButtonBase } from '@mui/material'

import LogoSection from '../LogoSection/LogoSection'
import SearchSection from './SearchSection/SearchSection'
// import ProfileSection from './ProfileSection'
// import NotificationSection from './NotificationSection'

import { IconMenu2 } from '@tabler/icons'
import { FC } from 'react'

const Header: FC = () => {
	const theme = useTheme()

	return (
		<>
			<Box
				sx={{
					width: 228,
					display: 'flex',
					[theme.breakpoints.down('md')]: {
						width: 'auto',
					},
				}}
			>
				<Box component='span' sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
					<LogoSection />
				</Box>
				<ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
					<Avatar
						variant='rounded'
						sx={{
							// ...theme.typography.commonAvatar,
							// ...theme.typography.mediumAvatar,
							transition: 'all .2s ease-in-out',
							background: theme.palette.secondary.light,
							color: theme.palette.secondary.dark,
							'&:hover': {
								background: theme.palette.secondary.dark,
								color: theme.palette.secondary.light,
							},
						}}
						color='inherit'
					>
						<IconMenu2 stroke={1.5} size='1.3rem' />
					</Avatar>
				</ButtonBase>
			</Box>

			<SearchSection />
			<Box sx={{ flexGrow: 1 }} />
			<Box sx={{ flexGrow: 1 }} />

			{/* <NotificationSection />
			<ProfileSection /> */}
		</>
	)
}

export default Header
