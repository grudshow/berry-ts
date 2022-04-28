import { ButtonBase } from '@mui/material'
import { FC } from 'react'

import Logo from '../../../ui-component/Logo'

const LogoSection: FC = () => (
	<ButtonBase disableRipple>
		<Logo />
	</ButtonBase>
)

export default LogoSection
