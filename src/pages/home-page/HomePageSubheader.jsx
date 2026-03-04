import { useNavigate } from 'react-router';
import MyPromptsButton from '../../components/MyPromptsButton';
import './HomePageSubheader.css';

export default function HomePageSubheader({ userName }) {
    const navigate = useNavigate();

    const goToUserJournals = () => {
        navigate('/your-journals');
    }

    const goToEditNamePage = () => {
        navigate('/edit-name');
    }

    return (
        <div className="home-page-subheader">
            <div className="lhs">
                <h2 className="greet-user-text">
                    Hi, {userName} 👋
                </h2>
                <button className="edit-name-button subheader-button" onClick={goToEditNamePage}>Edit Name</button>
            </div>
            <div className="rhs">
                <MyPromptsButton />
                <button className="your-journals-button subheader-button" onClick={goToUserJournals}>Your Journals</button>
            </div>
        </div>
    );
}