import { User } from "./user";

export interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    signInUser: (params:{email: string, password: string}) => Promise<void>;
    signOutUser: () => Promise<void>;
    signUpUser: (params: { name: string, password: string, email: string, phone: string }) => Promise<void>;
    confirmSignUpUser: ( code: string) => Promise<void>;
    isPending: boolean;
    resendConfirmationCode: (email?: string) => Promise<void>;
}
