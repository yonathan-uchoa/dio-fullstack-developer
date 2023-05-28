import { 
    Box,
    Center,
    Input,
		Flex,
		useColorModeValue,
		Stack
 } from "@chakra-ui/react"

import { login } from "../../services/login"
import { LoginButton } from "./LoginButton"
import { useState } from "react"

export const Login = () => {
	const [message, setMessage] = useState('')
	const handleChange = (event: any) => {
		setMessage(event.target.value)
	}

	return(
		<Flex
		  minH={'100vh'}
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('gray.50', 'gray.800')}
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
					<Input placeholder="email" type="email" width={'sm'} onChange={handleChange}/>
					<Input placeholder="password" type="password"/>
					<Center>
					<LoginButton event={()=> login(message)}/>
					</Center>
				</Stack>
				
			</Box>
		</Flex>
	)
}