import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setByPassUserLoad } from '../redux/features/userSlice'
import { deleteUserProfile } from '../thunk/userThunk'

// Define styles for modal animations
const modalAnimationStyle = `
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    @keyframes slideIn {
        0% { transform: translateY(-20px); }
        100% { transform: translateY(0); }
    }
`;

const DeleteAccountModal = ({ isOpen, onClose }) => {
    const { error, loading } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleDeleteAccount = async (e) => {
        e.preventDefault();

        try {
            await dispatch(deleteUserProfile()).unwrap();
            onClose();
            await dispatch(setByPassUserLoad(true));
            window.location.href = '/login';
        } catch (err) {
            console.error('Failed to delete account:', err);
        }
    }

    if (!isOpen) return null;

    return (
        <>
            {/* Inject animation styles */}
            <style dangerouslySetInnerHTML={{ __html: modalAnimationStyle }} />

            <div
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                onClick={(e) => e.target === e.currentTarget && onClose()}
            >
                <div
                    className="bg-[#272727] rounded-lg p-8 max-w-md w-full mx-4 border border-themeYDark/30 shadow-lg animate-[fadeIn_0.3s_ease-in-out]"
                    style={{ animation: "fadeIn 0.3s ease-in-out, slideIn 0.3s ease-out" }}
                >
                    <h3 className="text-xl font-semibold mb-4 text-white">Delete Account</h3>
                    <div className="mb-6">
                        <p className="text-white/80 mb-2">Are you sure you want to delete your account?</p>
                        <p className="text-red-400 text-sm">This action cannot be undone. All your data will be permanently removed.</p>
                    </div>

                    <div className="mt-8 flex justify-end gap-4">
                        <button
                            type="button"
                            disabled={loading}
                            onClick={onClose}
                            className="px-4 py-2 text-xs bg-transparent border border-white/30 hover:border-white/50 rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Processing...' : 'Cancel'}
                        </button>
                        <button
                            type="button"
                            onClick={handleDeleteAccount}
                            disabled={loading}
                            className="px-4 py-2 text-xs bg-red-600 hover:bg-red-700 rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Processing...' : 'Delete Account'}
                        </button>
                    </div>

                    {loading && (
                        <div className="mt-4 text-center">
                            <p className='text-xs text-white/80'>You will be directed to login after your account deletion is completed.</p>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}

export default React.memo(DeleteAccountModal);
