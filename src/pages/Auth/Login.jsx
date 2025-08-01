import { Heading, Button, Text} from '../../components'
import {Logo} from '../../assets/images'

const Login = () => {
  return (
    <>
    <div className='w-[450px] mx-auto mt-[137px]' > 
      <img className='pb-[36px]' src={Logo} alt="img" width={50} height={41}/>
      <Heading type={"h1"} title={"Log in to Twitter"} />
      <form>
         <input className="outline-none w-[450px] h-[70px] mt-[36px] border-[#00000033] justify-center border-[1px] p-2  rounded-md" autoComplete="off" required type="text" placeholder="Phone number, email address" name="todo" />
         <input className="outline-none w-[450px] h-[70px] mt-[36px] mb-[25px] border-[#00000033] justify-center border-[1px] p-2  rounded-md" autoComplete="off" required type="text" placeholder="Phone number, email address" name="todo" />
      <Button title={"Log In"} />
      <div className='flex justify-between mt-[40px]'>
           <Text title={"Forgot password?"}/>
           <Text title={"Forgot password?"}/>
      </div>
      </form>
    </div>
    </>
  )
}

export default Login