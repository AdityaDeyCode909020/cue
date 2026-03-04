import { useNavigate } from 'react-router';
import './CancelButton.css';

export default function CancelButton() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    return (
        <button className="cancel-button" onClick={goToHome}>Cancel</button>
    );
}