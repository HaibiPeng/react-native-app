import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../graphql/mutations';

const useSignUp = () => {
    const [SignUp, data] = useMutation(SIGN_UP);
    // console.log(data);

    const signUp = async ({ username, password }) => {
        // call the mutate function here with the right arguments
        let res = await SignUp({ variables: { 
            user: { 
                username, 
                password 
            }
        }});
        
        return res;
    };

    return [signUp, data];
};

export default useSignUp;