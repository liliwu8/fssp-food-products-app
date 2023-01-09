import auth from './firebaseAuth';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { CurrentUserContext } from '../Components/CurrentUserContext';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignOut() {
  const currentUser = useContext(CurrentUserContext);

  const navigate = useNavigate();

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        currentUser.setCurrentUser('');

        alert('user signed out')
        navigate('/')
        notify();
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  const notify = () => {
    toast.success('You have successfully log out!', {
      position: 'top-center',
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      navigate('/');
    }, 3100);
  };
  return (
    <>
      <li>
        <h1 className='px-3 py-2 flex items-center text-4xl	 font-bold leading-snug text-[#EBB755] hover:text-white'>
          <Link to='/' onClick={userSignOut}>
            LogOut
          </Link>
        </h1>
      </li>
      <ToastContainer autoClose={2000} theme='light' />
    </>
  );
}

export default SignOut;
