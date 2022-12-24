import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import auth from './firebaseAuth'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function SignUp() {
  const [userInput, setUserInput] = useState({
    user_email: '',
    user_password: '',
  })

  const navigate = useNavigate()
  
  const signUp = () => {
    createUserWithEmailAndPassword(
      auth,
      userInput.user_email,
      userInput.user_password
    )
      .then((cred) => {
        console.log(cred.user_displayName)
        alert('you have signed up', cred)
        navigate('/dish')
      })
      .catch((error) => {
        console.log(error.message)
        alert(error.message)
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    signUp()
    setUserInput({
      user_email: '',
      user_password: '',
    })
  }
  const handleTextChange = (event) => {
    setUserInput({ ...userInput, [event.target.id]: event.target.value })
  }

  return (
    <div className='bg-white font-family-karla h-screen'>
      <div className='w-full flex flex-wrap'>
        <div className='w-full md:w-1/2 flex flex-col'>
          <div className='flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32'>
            <p className='text-center text-3xl'>Sign Up</p>
            <form
              className='flex flex-col pt-3 md:pt-8'
              onSubmit={handleSubmit}
            >
              <div className='flex flex-col pt-4'>
                <input
                  type='email'
                  id='user_email'
                  value={userInput.user_email}
                  onChange={handleTextChange}
                  placeholder='your@email.com'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>

              <div className='flex flex-col pt-4'>
                <input
                  type='password'
                  id='user_password'
                  value={userInput.user_password}
                  onChange={handleTextChange}
                  placeholder='Password'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>

              <input
                type='submit'
                value='Log In'
                className='bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8'
              />
            </form>
            <div className='text-center pt-12 pb-12'>
              <p>
                Have an Account? <Link to={'/login'}> Login</Link>
              </p>
            </div>
          </div>
        </div>

        <div className='w-1/2 shadow-2xl'>
          <img
            className='object-cover w-full h-screen hidden md:block'
            src='https://images.unsplash.com/photo-1611315764615-3e788573f31e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80'
            alt='pic'
          />
        </div>
      </div>
    </div>
  )
}

export default SignUp
