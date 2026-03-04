import { useNavigate } from 'react-router';
import './WebsiteLogoHeader.css';

function WebsiteLogoHeader() {
    const navigate = useNavigate();

    const returnToHome = () => {
        navigate('/');
    }

    return (
        <header>
            <div className="logo" onClick={returnToHome}>
                <h1>Cue<span className="logo-dot">.</span></h1>
            </div>
        </header>
    );
}

export default WebsiteLogoHeader;