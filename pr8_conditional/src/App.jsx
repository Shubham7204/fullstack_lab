import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NotLoggedIn from './components/NotLoggedIn';
import Edit from './components/Edit';
import SwitchComponent from './components/Switch';

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const [currentView, setCurrentView] = useState('home'); 

    return (
        <>
            {isLogin ? <Header username="Shubham" /> : <NotLoggedIn />}
            <Edit isLogin={isLogin} setIsLogin={setIsLogin} />
            <div>
              <br />
            </div>
            {isLogin ? (
                <>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={() => setCurrentView('home')}>Home</button>
                        <button onClick={() => setCurrentView('about')}>About Us</button>
                        <button onClick={() => setCurrentView('learn')}>Learn</button>
                    </div>
                    <SwitchComponent currentView={currentView} />
                </>
            ) : null}
        </>
    );
}

export default App;