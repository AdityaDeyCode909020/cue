import { useNavigate } from 'react-router';
import MyPromptsButton from '../../components/MyPromptsButton';
import './HomePageSubheader.css';

export default function HomePageSubheader() {
    const navigate = useNavigate();

    const goToUserJournals = () => {
        navigate('/your-journals');
    }

    return (
        <div className="home-page-subheader">
            <div className="lhs">
                <h2 className="greet-user-text">
                    Hi, User 👋
                </h2>
                <button className="edit-name-button subheader-button">Edit Name</button>
            </div>
            <div className="rhs">
                <MyPromptsButton />
                <button className="your-journals-button subheader-button" onClick={goToUserJournals}>Your Journals</button>
            </div>
        </div>
    );
}