import { 
    Box,
    Center,
    Input,
	Flex,
	useColorModeValue,
	Stack
 } from "@chakra-ui/react"
import { LoginButton } from "./LoginButton"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../AppContext"
import { changeLocalStorage } from "../../services/storage"
import LoginService from "../../services/login-service"

export const Login = () => {

	const {setItemState} = useContext(AppContext)
	const [state, setState] = useState({
		email: '' ,
		password: ''
	})
	const handleChange = (event: any) => {
		setState({
			...state,			
			[event.target.name]: event.target.value
		})
	}
	const navigate = useNavigate();
	
	const eventTest = async (email: string, password: string): Promise<void> => {
		const loggedIn = await LoginService.login({email, password})

		if(!loggedIn)
			return alert('Invalid email or password!')

		setItemState('user', loggedIn)
		setItemState('isLoggedIn', 'true')
		changeLocalStorage('isLoggedIn', 'true')
		changeLocalStorage('userName', loggedIn)
		navigate('/conta/1')
	}

	return(
		<Flex
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('gray.50', 'gray.800')}
			flex='auto'			
		>
			<Box
				rounded={'md'}
				backgroundColor='#FFFFFF'
				boxShadow={'sm'}
				py={10}
				px={7}
			>
				<Stack 
					spacing={4}
					mx={'auto'}
					maxW={'lg'}
				>
					<Center>
						<h1>Faça o login</h1>
					</Center>
					<Input 
						name="email" 
						placeholder="email" 
						type="email" 
						value={state.email} 
						onChange={handleChange} 
						width={'sm'}/>
					<Input 
						name="password" 
						placeholder="password" 
						type="password" 
						value={state.password} 
						onChange={handleChange} 
						width={'sm'} />						
					<LoginButton event={() => eventTest(state.email, state.password)} name={state.email} password={state.password} />					
				</Stack>
				
			</Box>
		</Flex>
	)
}