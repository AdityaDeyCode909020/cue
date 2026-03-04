import './UserJournal.css';
import truncateText from '../../utils/truncateText';
import { useNavigate } from 'react-router';

export default function UserJournal({ userJournal, setUserJournals, userJournals }) {
    const deleteUserJournal = () => {
        const newUserJournals = [];

        for (let uj of userJournals) {
            if (uj.userJournalId !== userJournal.userJournalId) {
                newUserJournals.push(uj);
            }
        }

        localStorage.setItem('cue-user-journals', JSON.stringify(newUserJournals));

        setUserJournals(newUserJournals);
    }

    const navigate = useNavigate();

    const openJournal = () => {
        navigate(`/write?promptId=${userJournal.promptQuestionId}&userJournalId=${userJournal.userJournalId}`);
    }

    return (
        <div className="user-journal">
            <h3>{userJournal.promptQuestion}</h3>
            <p>Last Edited: <span>{userJournal.editDate}</span></p>
            <p className="user-journal-content">{truncateText(userJournal.answerJournalAsText, 20, 80)}</p>
            <button className="open-journal-button" onClick={openJournal}>Open</button>
            <button className="delete-journal-button" onClick={deleteUserJournal}>Delete</button>
        </div>
    );
}