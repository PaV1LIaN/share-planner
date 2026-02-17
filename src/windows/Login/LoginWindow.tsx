import './LoginWindow.css'
import Input from './../../components/Input/Input.tsx';
import DefaultButton from './../../components/Buttons/DefaultButton';
import { useState } from 'react';

function LoginWindow() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div className="login-window">
                <Input placeholder="User"
                    height={10}
                    width={200}
                    value={user}
                    onChange={e => setUser(e.target.value)}/>
                <Input placeholder="Password"
                    height={10}
                    width={200}
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                <DefaultButton content="Enter"
                    height={10}
                    width={200}
                    disabled={!user || !password}
                    onClick={() => onEnterButtonClick()} />
            </div>
        </>
    )
}

function onEnterButtonClick() {
    alert("");
}

export default LoginWindow
