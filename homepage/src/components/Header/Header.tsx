import { Button } from '@chakra-ui/react'
import './Header.css'
import { useNavigate } from 'react-router-dom' 
import {changeLocalStorage} from '../../services/storage'
import { useContext } from 'react'
import { AppContext } from '../AppContext'


const LogginHeader = (logout: () => void) => {  
  return(
    <nav className='header' >
        Dio Bank
        <Button
          onClick={logout}
          colorScheme="teal"
          size={'sm'}
          float='right'
        >
          Log-out!
        </Button>
    </nav>
  )
}

const DefaultHeader = () => {
  return (
    <div className='header'>
      Dio Bank
    </div>
  )
}

export const Header = () => {
  const {isLoggedIn} = useContext(AppContext)
  const navigate = useNavigate()
  const { setItemState } = useContext(AppContext)

  const logout = () => {
    setItemState('isLoggedIn', false)
    changeLocalStorage('isLoggedIn', 'false')
    navigate('/')
  }
  if(isLoggedIn)
    return LogginHeader(logout)
  return DefaultHeader()
}