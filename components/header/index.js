import { Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react";
import { ChevronDownIcon} from "@chakra-ui/Icons";
import { useMutation } from "@/hooks/useMutation";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import Link from "next/link"
import styles from "./styles.module.css"

export default function Header() {
const userData = useContext(UserContext);
const router = useRouter();
const { mutate} = useMutation()

const HandleInput = async () => {
  const response = await mutate({
    url:"",
    method:"GET",
    headers: {
      Authorization: `Bearer ${Cookies.get("user_token")}`,

    },
  });{
  if(!respose?.success){
    console.log("gagal logout");
  }else{
    Cookies.remove("user_token");
    router.push("/login")
  }
};


}
  return (
    <div className={styles.header}> 
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Profile</Link>
        </li>
        <li>
          <Link href="/">Users</Link>
        </li>
        <li>
          <Link href="/">Notes</Link>
        </li>
        <li>
          <Link href="/">Posts</Link>
        </li>
        <li>
          <Menu>
            <MenuButton as= {Button} rightIcon={<ChevronDownIcon/>}>
              {userData?.name}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={()=>HandleInput()}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </li>
      </ul>
    </div>
  )
  }