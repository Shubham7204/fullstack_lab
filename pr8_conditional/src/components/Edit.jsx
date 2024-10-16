import React from 'react';

const Edit = ({ isLogin, setIsLogin }) => {
    return (
        <div>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default Edit;
