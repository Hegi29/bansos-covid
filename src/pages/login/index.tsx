/* eslint-disable @next/next/no-img-element */
import { LoginLayout } from '~/components/.';
import { useLogin } from '~/hooks/.';

const Login = () => {
  const { handleLogin } = useLogin();

  return (
    <LoginLayout>
      <div className="min-h-screen flex justify-center items-center bg-blue-jds">
        <div className="p-10 mt-10 rounded-lg md:shadow-lg flex flex-col items-center md:bg-white">
          <div className="py-8">
            <img alt="logo jds" width="260" className="-mt-10" src="logo-jds.png" />
          </div>
          <input className=" mb-3 py-2 px-4 border-2 border-gray-200 rounded-lg w-80 focus:border-yellow-jds" placeholder="Email" />
          <div className="flex flex-col">
            <input className="py-2 px-4 border-2 border-gray-200 rounded-lg w-80 focus:border-yellow-jds" placeholder="Password" />
          </div>
          <div className="flex flex-col w-full mt-10">
            <button className="w-full bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]" onClick={handleLogin}>Log in</button>
          </div>
        </div>
      </div>
    </LoginLayout>
  )
}

export default Login;
