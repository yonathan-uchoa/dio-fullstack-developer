import { Button } from "@chakra-ui/react"

interface ILoginButton {
	event: () => void
}

export const LoginButton = ({event}: ILoginButton) => {
	return(
		<Button
			onClick={event}
			colorScheme="teal"
			size={'sm'}
			width={'100%'}			
		>
			Log-in!
		</Button>
	)
}