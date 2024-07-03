import { createContext } from "react";
import { useQueries } from "@/hooks/useQueries";
import Cookies from "js-cookie";

export const UserContext = createContext({});

export default function UserContextProvider({children, ...props}){
const {data: userData} = useQueries({
  prefixUrl: "",
  headers : {Authorization : `Bearer ${Cokies.get("user_token")}`},
});

return(
  <UserContext.Provider value = {userData?.data || null} {...props}>
    {children}
  </UserContext.Provider>
)
}