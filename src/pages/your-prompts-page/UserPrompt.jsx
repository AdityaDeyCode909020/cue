import './UserPrompt.css';

export default function UserPrompt({userJournalPrompt, journalPrompts, setJournalPrompts}) {
    const deleteUserPrompt = () => {
        const promptsByUser = journalPrompts.filter(journalPrompt => journalPrompt.isByUser);
        let deletePrompt;
        for (let promptByUser of promptsByUser) {
            if (userJournalPrompt.id === promptByUser.id) {
                deletePrompt = promptByUser;
            }
        }

        if (!deletePrompt) return;

        const newJournalPrompts = journalPrompts.filter(journalPrompt => {
            return journalPrompt.id !== deletePrompt.id;
        });

        localStorage.setItem('cue-journal-prompts', JSON.stringify(newJournalPrompts));

        setJournalPrompts(newJournalPrompts)

    }

    return (
        <div className="user-prompt">
            <h3>{userJournalPrompt.promptQuestion}</h3>
            <button className="delete-user-prompt-button" onClick={deleteUserPrompt}>Delete</button>
        </div>
    ); 
}