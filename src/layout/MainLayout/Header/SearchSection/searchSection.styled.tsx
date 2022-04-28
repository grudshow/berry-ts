import { styled } from '@mui/material/styles'
import { Avatar, OutlinedInput, Popper } from '@mui/material'
import { shouldForwardProp } from '@mui/system'

export const PopperStyle = styled(Popper, { shouldForwardProp })(({ theme }) => ({
	zIndex: 1099,
	width: '98%',
	top: '-56px !important',
	padding: '-1 12px',
	[theme.breakpoints.down('sm')]: {
		padding: '-1 10px',
	},
}))

export const OutlineInputStyle = styled(OutlinedInput, { shouldForwardProp })(({ theme }) => ({
	width: 433,
	marginLeft: 15,
	paddingLeft: 15,
	paddingRight: 15,
	'& input': {
		background: 'transparent !important',
		paddingLeft: '3px !important',
	},
	[theme.breakpoints.down('lg')]: {
		width: 249,
	},
	[theme.breakpoints.down('md')]: {
		width: '99%',
		marginLeft: 3,
		background: '#fff',
	},
}))

export const HeaderAvatarStyle = styled(Avatar, { shouldForwardProp })(({ theme }) => ({
	// ...theme.typography.commonAvatar,
	// ...theme.typography.mediumAvatar,
	background: theme.palette.secondary.light,
	color: theme.palette.secondary.dark,
	'&:hover': {
		background: theme.palette.secondary.dark,
		color: theme.palette.secondary.light,
	},
}))
