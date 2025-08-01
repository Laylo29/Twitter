import { Heading, Button, Text, Input} from '../../components'
import {Logo} from '../../assets/images'

const Login = () => {
  return (
    <>
    <div className='w-[450px] mx-auto mt-[137px]' > 
      <img className='pb-[36px]' src={Logo} alt="img" width={50} height={41}/>
      <Heading type={"h1"} title={"Log in to Twitter"} />
      <form className='pt-[36px] flex flex-col gap-[25px]'>
       <Input type={'text'} placeholder={'Login'}/>
       <Input type={'password'} placeholder={'Password'}/>
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