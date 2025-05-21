import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const ChehProducer = () => {
    const [email, setEmail] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        onBlur={handleEditToggle} // סיים עריכה כשמאבדים פוקוס
                    />
                    <button onClick={handleEditToggle}>שמור</button>
                </div>
            ) : (
                <div>
                    <span>{email}</span>
                    <button onClick={handleEditToggle}>ערוך</button>
                </div>
            )}
            <NavLink to={email}>לפרטים נוספים</NavLink>
            <Outlet />
        </div>
    );
};
