import UserPrompt from "./UserPrompt";
import './UserPrompts.css';

export default function UserPrompts({journalPrompts, setJournalPrompts}) {
    let userJournalPrompts = journalPrompts.filter(journalPrompt => journalPrompt.isByUser);
    
    return (
        <div className="user-prompts-container">
            {
                userJournalPrompts.length !== 0 
                ?
                userJournalPrompts.map(userJournalPrompt => {
                    return <UserPrompt key={userJournalPrompt.id} userJournalPrompt={userJournalPrompt} journalPrompts={journalPrompts} setJournalPrompts={setJournalPrompts} />
                })
                : <p className="no-user-journal-prompts-text">You haven’t created any journal prompts yet.</p>
            }
        </div>
    );
}