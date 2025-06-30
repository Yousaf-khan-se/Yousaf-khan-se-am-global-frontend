import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { loadUser } from '../thunk/userThunk';
import { clearError, clearSuccess } from '../redux/features/userSlice';
import Nav from './Nav'
import Footer from './Footer';

const ProtectedRoute = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated, loading, error, user } = useSelector((state) => state.user);
    const [isUserLoadingError, setUserLoadingError] = useState(false);
    const [userLoading, setUserLoading] = useState(true);

    useEffect(() => {
        const loadUserData = async () => {
            if (!user) {
                console.log('ProtectedRoute: Loading user data...');
                try {
                    await dispatch(loadUser()).unwrap();
                    console.log('ProtectedRoute: User data loaded successfully');
                    setUserLoadingError(false);
                } catch (err) {
                    console.error('ProtectedRoute: Failed to load user data', err);
                    setUserLoadingError(true);
                }
            } else {
                // If user data already exists, clear any previous errors
                setUserLoadingError(false);
            }
            setUserLoading(false);
        };

        if (!isAuthenticated && !userLoading) {
            dispatch(clearError());
            dispatch(clearSuccess());
            navigate('/login');
        } else {
            loadUserData();
        }
    }, [dispatch, isAuthenticated, navigate, user, userLoading]);

    if (loading || (isAuthenticated && userLoading)) {
        return <div className="text-center mt-32">🔄 Loading your profile...</div>;
    }

    if (isAuthenticated && error && isUserLoadingError) {
        return <div className="text-center mt-32 text-red-500">⚠️ {error}</div>;
    }

    if (isAuthenticated && !userLoading) {
        return (
            <>
                <Nav />
                <div className='mt-28'>
                    <Outlet />
                </div>
                <Footer />
            </>

        );
    }

    return <div className="text-center mt-32">Redirecting to login...</div>;
};

export default ProtectedRoute;
