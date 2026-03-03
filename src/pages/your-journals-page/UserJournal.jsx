import './UserJournal.css';
import truncateWords from '../../utils/truncateWords';

export default function UserJournal({ userJournal }) {
    return (
        <div className="user-journal">
            <h3>{userJournal.promptQuestion}</h3>
            <p>{truncateWords(userJournal.answerJournalAsText, 20)}</p>
            <button className="open-journal-button">Open</button>
            <button className="delete-journal-button">Delete</button>
        </div>
    );
}