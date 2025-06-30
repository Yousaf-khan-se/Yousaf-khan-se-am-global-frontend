import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { loadUser } from '../thunk/userThunk';
import { clearError, clearSuccess } from '../redux/features/userSlice';

const AuthRoute = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState(false);
    const { isAuthenticated, loading, byPassUserLoad } = useSelector((state) => state.user);

    useEffect(() => {
        if (byPassUserLoad) {
            console.log('AuthRoute: Bypassing user load check due to byPassUserLoad flag');
            setAuthChecked(true);
            return;
        }

        if (isAuthenticated || authChecked) {
            return;
        }

        if (!loading) {
            console.log('AuthRoute: Checking authentication status...');
            let isCurrent = true;

            dispatch(loadUser())
                .unwrap()
                .then(() => {
                    if (isCurrent) console.log('AuthRoute: User data loaded successfully');
                })
                .catch(() => {
                    if (isCurrent) console.log('AuthRoute: Not authenticated');
                })
                .finally(() => {
                    if (isCurrent) setAuthChecked(true);
                });

            return () => {
                isCurrent = false;
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    if (authChecked && isAuthenticated) {
        console.log('AuthRoute: Redirecting authenticated user to home');
        dispatch(clearError());
        dispatch(clearSuccess());
        navigate('/');
    }

    if (byPassUserLoad) {
        console.log('AuthRoute: Bypassing user load, rendering Outlet', byPassUserLoad);
        return <Outlet />;
    }

    if (!authChecked || loading) {
        return <div className="text-center mt-32">🔄 Loading authentication status...</div>;
    } if (!isAuthenticated) {
        return <Outlet />;
    }

    // Return null when user is authenticated (navigation will happen in useEffect)
    return null;
};

export default AuthRoute;
