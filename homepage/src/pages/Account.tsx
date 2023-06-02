import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";

function AccountInfo<Info extends {title: string, desc: string }>(obj: Info ) {
    const {title, desc, ...rest} = obj
    return(
        <Box p={5} shadow={'md'} borderWidth='1px' marginTop={'2%'} marginLeft={'2%'} flex={'auto'} minW={'180px'} w={'25%'} {...rest}>
            <Heading fontSize='2xl' >
                {title}     
            </Heading>
            <Text mt={3} fontSize='md'>
                {desc}
            </Text>
        </Box>
    )
}

const Account = () => {

    const navigate = useNavigate();
    const {id} = useParams()
    const {userId} = useContext(AppContext)

    if(id !== userId){
        navigate('/')
        console.log('teste')
    }
        

    return (
            <Container margin={'auto'} flex={'auto'} display='flex' flexWrap='wrap' alignContent={'flex-start'} maxW={'container.md'}> 
                <AccountInfo title='test info' desc='description'  />
                <AccountInfo title='More Info' desc='More description and more and more and more and more and more' />
                <AccountInfo title='More Info' desc='More description and more and more and more and more and more' />
                <AccountInfo title='More Info' desc='More description and more and more and more and more and more' />
                <AccountInfo title='More Info' desc='More description and more and more and more and more and more' />
            </Container>
    )
}

export default Account