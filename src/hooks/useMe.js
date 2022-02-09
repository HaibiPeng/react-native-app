import { useQuery } from "@apollo/client";  
import { ME } from "../graphql/queries";

const useMe = () => { 
  const { data, error, loading } = useQuery(ME);
  
  return { me: data?.me, loading };
};

export default useMe;