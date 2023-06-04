import { Button } from "@chakra-ui/react"
import LoginService from "../../services/login-service"
import { MouseEventHandler } from "react"

interface ILoginButton {
	event: MouseEventHandler,
	name: string,
	password: string
}
export const LoginButton = ({event, name, password}: ILoginButton ) => {
	return(
		<Button
			className='loginButton'
			onClick={event}
			form="formLogin"
			type="submit"
			colorScheme="teal"
			size={'sm'}
			width={'100%'}			
			disabled={(!LoginService.isValidEmail(name) || !password)} // if email or password is not valid, button is disabled
			>
			Log-in!
		</Button>
	)
}