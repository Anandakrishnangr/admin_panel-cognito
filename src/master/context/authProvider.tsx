import React, { useState, useEffect, useTransition, useCallback } from 'react';
import { signIn, signOut, signUp, confirmSignUp, getCurrentUser, resendSignUpCode, } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import { awsConfigDev } from '../config/amplify';
import { User } from '../types';
import { AuthContext } from './authContext';
import { useImmer } from 'use-immer';
import { Loader } from '../../components';
Amplify.configure(awsConfigDev);


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        localStorage.getItem('isAuthenticated') === 'true'
    );
    const [user, updateUser] = useImmer<User | null>(
        localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null
    );

    const [isPending, setTransition] = useTransition()

    const checkAuthState = useCallback(async () => {
        setTransition(async () => {
            try {
                // const s = () => new Promise((resolve) => setTimeout(resolve, 5000));
                // await s();
                const currentUser = await getCurrentUser();
                setIsAuthenticated(true);
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('user', JSON.stringify(currentUser));
            } catch (error) {
                console.log(error);
                setIsAuthenticated(false);
                updateUser(null);
                localStorage.removeItem('isAuthenticated');
                localStorage.removeItem('user');
            }
        })
    }, [updateUser])

    useEffect(() => {
        checkAuthState();
    }, [checkAuthState]);

    const signInUser = async ({ email = '', password = '' }: { email: string, password: string }) => {
        try {
            const user = await signIn({ username: email, password });
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('user', JSON.stringify(user));
            checkAuthState()
        } catch (error) {
            console.log({ email, password })
            console.log(error);
            throw error;
        }
    };

    const signOutUser = async () => {
        try {
            await signOut();
            setIsAuthenticated(false);
            updateUser(null);
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('user');
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    const signUpUser = async ({ name, password, email }: { name: string, password: string, email: string, phone: string }) => {
        try {
            await signUp({
                username: email,
                password,
                options: { userAttributes: { name } },
            });
            updateUser((draft: User | null) => {
                if (!draft) {
                    return { email, name }; // Ensure draft is not null
                }
                draft.email = email;
                draft.name = name;
            })

        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    const resendConfirmationCode = async () => {
        try {
            if (user?.email)
                await resendSignUpCode({ username: user?.email });
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
    const confirmSignUpUser = async (code: string) => {
        try {
            if (user?.email && code) {
                await confirmSignUp({ username: user?.email, confirmationCode: code });
            } else {
                console.log({ user, code })
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
    // Function already exists as signOutUser in the context - here it is for reference:

    const value = {
        isAuthenticated,
        user,
        signInUser,
        signOutUser,
        signUpUser,
        confirmSignUpUser,
        isPending,
        resendConfirmationCode
    };

    return <AuthContext.Provider value={value}>{isPending ? <Loader /> : children}</AuthContext.Provider>;
};
