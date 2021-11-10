import { useEffect, useState } from 'react';

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    updateProfile,
    signOut,
} from 'firebase/auth';
import initAuth from '../components/firebase/firebase.init';

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user.email, user.displayName);
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                // save user to the database
                saveUser(email, name, 'POST');

                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => {
                        // Profile updated!
                        // ...
                    })
                    .catch(error => {
                        // An error occurred
                        // ...
                    });

                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch(error => {
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Signed in
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                console.log(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));
    }, [user.email]);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    };

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };

        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        });
    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        });
    }, [auth]);

    return {
        user,
        admin,
        registerUser,
        loginUser,
        isLoading,
        authError,
        signInUsingGoogle,
        logOut,
    };
};

export default useFirebase;
