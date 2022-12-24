import auth from './firebaseAuth'
import { signOut } from 'firebase/auth'
import { useContext } from 'react'
import { CurrentUserContext } from '../Components/CurrentUserContext'
import { useNavigate, Link } from 'react-router-dom'
function SignOut() {
  const currentUser = useContext(CurrentUserContext)

  const navigate = useNavigate()

  const userSignOut = () => {
    signOut(auth)
      .then((cred) => {
        currentUser.setCurrentUser('')
        console.log(cred)
        alert('user signed out', cred)
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message)
        alert(error.message)
      })
  }
  return (
    <li>
      <h1 className='px-3 py-2 flex items-center text-4xl	 font-bold leading-snug text-[#EBB755] hover:text-white'>
        <Link to='/signup' onClick={userSignOut}>
          LogOut
        </Link>
      </h1>
    </li>
  )
}

export default SignOut
