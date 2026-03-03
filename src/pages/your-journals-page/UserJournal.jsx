import './UserJournal.css';

export default function UserJournal({ userJournal }) {
    function truncateWords(text, limit) {
        const words = text.trim().split(/\s+/)

        if (words.length <= limit) return text

        return words.slice(0, limit).join(' ') + '...'
    }

    return (
        <div className="user-journal">
            <h3>{userJournal.promptQuestion}</h3>
            <p>{truncateWords(userJournal.answerJournalAsText, 20)}</p>
            <button className="open-journal-button">Open</button>
            <button className="delete-journal-button">Delete</button>
        </div>
    );
}