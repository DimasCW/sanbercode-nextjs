import { 
  Heading,
  FormControl,
  Input,
  Button,
  Flex,
  Stack,
  useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { useMutation } from "@/hooks/useMutation";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Login (){
  const  toast  = useToast()
  const { mutate } = useMutation()
  const router = useRouter()
  const [payload, setPayload] = useState({
    email:"",
    password:"",
  });

const HandleSubmit = async () => {
  const response = await mutate({url : "https://service.pace-unv.cloud/api/login", payload});
  if(!response?.success){
    toast({
      title: 'Login Gagal',
      description: "data tidak sesuai",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  }else{
    Cookies.set('user_token', response?.data?.token, {expires : new Date( response?.data?.expires_at), path :"/", })
    router.push("/")
  }
}
  return(
    <>
    <Flex>
      <Stack>
        <Heading>LOGIN</Heading>
        <FormControl>
          <Input value={payload?.email} placeholder="email" onChange={(event) => 
            setPayload({...payload, email: event.target.value})
          } />
        </FormControl>
        <FormControl>
          <Input value={payload?.password} placeholder="password" onChange={(event) => 
            setPayload({...payload, password: event.target.value})
          } />
        </FormControl>
        <FormControl>
          <Button onClick={()=> HandleSubmit()} >Login</Button>
        </FormControl>
      </Stack>
    </Flex>
    </>
  )
}