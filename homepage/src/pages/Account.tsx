import { Box, Container, Heading, Spinner, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { api } from "../test/mock/api";

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

function AccountInfo<Info extends {title: string, desc: string | Array<any> }>(obj: Info ) {
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

    const [user, setUser] = useState<null | UserData>()   
    const navigate = useNavigate();
    const {id} = useParams()
    const {userId} = useContext(AppContext)

    if(id !== userId){
        navigate('/')
    }

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUser(data)
        }

        getData()
    }, [])
    

    return (
            <Container margin={'auto'} flex={'auto'} display='flex' flexWrap='wrap' alignContent={'flex-start'} maxW={'container.md'}> 
                { user === undefined || user === null ?
                (
                    <Container> <Spinner /> </Container>
                ) : (        
                    <>         
                    <AccountInfo title={`Welcom ${user?.name}!`} desc={[`email: ${user?.email}`,<br></br>,`balance: ${user?.balance}`]}  />
                    <AccountInfo title='More Info' desc='More description and more and more and more and more and more' />
                    <AccountInfo title='More Info' desc='More description and more and more and more and more and more' />
                    <AccountInfo title='More Info' desc='More description and more and more and more and more and more' />
                    <AccountInfo title='More Info' desc='More description and more and more and more and more and more' />
                    </>
                )}
            </Container>
    )
}

export default Account