import React, { useContext } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../AuthProvider/AuthProvider'

function Login() {
  const{handleLogInWithEmailAndPass,loading}=useContext(AuthContext)
  const handleLoginBtn=(e)=>{
       e.preventDefault()
        const target=e.target
        const email=target.email.value
        const password=target.password.value
        console.log(email,password)
        handleLogInWithEmailAndPass(email,password)
  }
  return (
    <>
    <div className=" bg-gray-300 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome back
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={(e)=>{handleLoginBtn(e)}} className="space-y-6">
            {/* Email Field */}
            <div>
              <label  className=" text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                //   autoComplete='off'
                  
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                autoComplete="new-password"
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

        

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {loading?(<span className="loading loading-bars loading-md"></span>):" Log in"}
               
              </button>
            </div>
          </form>

       <div className='text-lg text-center my-4'>
     Dont’t Have An Account ?<Link to={"/register"} className='text-blue-800 underline'>Register</Link>
       </div>
        
        </div>
      </div>
    </div>
    </>
  )
}

export default Login