import { useApolloClient, useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
    const [SignIn, data] = useMutation(SIGN_IN);
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const signIn = async ({ username, password }) => {
        // call the mutate function here with the right arguments
        let res = await SignIn({ variables: { 
            credentials: { 
                username, 
                password 
            }
        }});

        let token = res?.data?.authenticate?.accessToken;
        if(token) {
            await authStorage.setAccessToken(token);
            apolloClient.resetStore();
        }
        
        return token;
    };

    return [signIn, data];
};

export default useSignIn;