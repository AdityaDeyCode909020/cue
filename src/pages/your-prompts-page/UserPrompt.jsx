import './UserPrompt.css';

export default function UserPrompt({userJournalPrompt}) {
    console.log(userJournalPrompt);
    return (
        <div className="user-prompt">
            <h3>{userJournalPrompt.promptQuestion}</h3>
            <button className="delete-user-prompt-button">Delete</button>
        </div>
    ); 
}