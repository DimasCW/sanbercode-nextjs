import { 
  Heading,
  FormControl,
  Input,
  Button,
  Flex,
  Stack
} from "@chakra-ui/react";
import { useState } from "react";
import { useMutation } from "@/hooks/useMutation";

export default function Login (){
  const { mutate } = useMutation()
const [payload, setPayload] = useState({
  email:"",
  password:"",
});

const HandleSubmit = async () => {
  const response = await mutate({url : "https://service.pace-unv.cloud/api/login", payload})
  console.log(`response => `,response)
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