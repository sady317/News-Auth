
import { useContext } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { sendEmailVerification, updateProfile } from 'firebase/auth'



function Register() {
    const {handleRegisterWithEmailAndPass,loading}=useContext(AuthContext)
    const handleRegisterBtn=(e)=>{
        e.preventDefault()
        const target=e.target
        const name=target.name.value
        const email=target.email.value
        const image=target.images.value
        const password=target.password.value
        console.log(name,email,image,password)
        handleRegisterWithEmailAndPass(email,password)
        .then((res)=>{
            console.log(res,"Response");
            updateProfile(res.user,{ displayName: name, photoURL: image })
            .then((res)=>console.log(res))
          
            sendEmailVerification(res.user)
            .then((res)=>{
                console.log(res,"email res")
            })
        })

        
    }
  return (
    <>
      <div className="flex items-center py-12 justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={(e)=>{handleRegisterBtn(e)}}  className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />



          <input
            type="text"
            name="images"
            placeholder="Image"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

<input
  type="password"
  name="password"
  placeholder="Password"
  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
  required
/>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            {/* Register */}
            {loading? (<span className="loading loading-bars loading-md"></span>):"Register"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to={"/login"}>
          <span className="text-indigo-600 cursor-pointer hover:underline">
            Login
          </span>
          </Link>
        </p>
      </div>
    </div>
  



    </>
  )
}

export default Register