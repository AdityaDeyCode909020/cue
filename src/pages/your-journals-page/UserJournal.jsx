import './UserJournal.css';
import truncateText from '../../utils/truncateText';

export default function UserJournal({ userJournal, setUserJournals, userJournals }) {
    const deleteUserJournal = () => {
        const newUserJournals = [];

        for (let uj of userJournals) {
            if (uj.userJournalId !== userJournal.userJournalId) {
                newUserJournals.push(uj);
            }
        }

        setUserJournals(newUserJournals);
    }

    return (
        <div className="user-journal">
            <h3>{userJournal.promptQuestion}</h3>
            <p>{truncateText(userJournal.answerJournalAsText, 20, 80)}</p>
            <button className="open-journal-button">Open</button>
            <button className="delete-journal-button" onClick={deleteUserJournal}>Delete</button>
        </div>
    );
}