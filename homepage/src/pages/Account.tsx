import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react"

function AccountInfo<Info extends {title: string, desc: string }>(obj: Info ) {
    const {title, desc, ...rest} = obj
    return(
        <Box p={5} shadow='md' borderWidth='1px' {...rest}>
            <Heading fontSize='2xl'>
                {title}
            </Heading>
            <Text mt={3} fontSize='md'>
                {desc}
            </Text>
        </Box>
    )
}

const Account = () => {
    
    return (
        <Container flex='auto'>
            <Stack
                direction={'row'}
                spacing={8}
                paddingTop={'4%'}
            >
                <AccountInfo title='test info' desc='description'  />
                <AccountInfo title='More Info' desc='More description' />
            </Stack>
        </Container>
    )
}

export default Account