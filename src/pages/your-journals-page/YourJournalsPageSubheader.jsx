import { useNavigate } from 'react-router';
import './YourJournalsPageSubheader.css';

export default function YourJournalsPageSubheader() {
    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/');
    }

    return (
        <div className="yjp-subheader">
            <h2>User's Journals</h2>
            <button className="subheader-button" onClick={backToHome}>Back To Home</button>
        </div>
    );
}