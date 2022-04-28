import { FC, useState } from 'react'

import { useTheme } from '@mui/material/styles'
import { ButtonBase, Card, Grid, Box, InputAdornment } from '@mui/material'

import PopupState, { bindPopper, bindToggle } from 'material-ui-popup-state'

// import Transitions from 'ui-component/extended/Transitions'

import { IconAdjustmentsHorizontal, IconSearch } from '@tabler/icons'
import { HeaderAvatarStyle, OutlineInputStyle, PopperStyle } from './searchSection.styled'

const SearchSection: FC = () => {
	const theme = useTheme()
	const [value, setValue] = useState('')

	return (
		<>
			<Box sx={{ display: { xs: 'block', md: 'none' } }}>
				<PopupState variant='popper' popupId='demo-popup-popper'>
					{popupState => (
						<>
							<Box sx={{ ml: 2 }}>
								<ButtonBase sx={{ borderRadius: '12px' }}>
									<HeaderAvatarStyle variant='rounded' {...bindToggle(popupState)}>
										<IconSearch stroke={1.5} size='1.2rem' />
									</HeaderAvatarStyle>
								</ButtonBase>
							</Box>
							<PopperStyle {...bindPopper(popupState)} transition>
								{({ TransitionProps }) => (
									<>
										{/* <Transitions
											type='zoom'
											{...TransitionProps}
											sx={{ transformOrigin: 'center left' }}
										>
											<Card
												sx={{
													background: '#fff',
													[theme.breakpoints.down('sm')]: {
														border: 0,
														boxShadow: 'none',
													},
												}}
											></Card>
										</Transitions> */}
									</>
								)}
							</PopperStyle>
						</>
					)}
				</PopupState>
			</Box>
			<Box sx={{ display: { xs: 'none', md: 'block' } }}>
				<OutlineInputStyle
					id='input-search-header'
					value={value}
					onChange={e => setValue(e.target.value)}
					placeholder='Search'
					startAdornment={
						<InputAdornment position='start'>
							<IconSearch stroke={1.5} size='1rem' color={theme.palette.grey[500]} />
						</InputAdornment>
					}
					endAdornment={
						<InputAdornment position='end'>
							<ButtonBase sx={{ borderRadius: '12px' }}>
								<HeaderAvatarStyle variant='rounded'>
									<IconAdjustmentsHorizontal stroke={1.5} size='1.3rem' />
								</HeaderAvatarStyle>
							</ButtonBase>
						</InputAdornment>
					}
					aria-describedby='search-helper-text'
					inputProps={{ 'aria-label': 'weight' }}
				/>
			</Box>
		</>
	)
}

export default SearchSection
