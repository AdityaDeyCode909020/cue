import UserPrompt from "./UserPrompt";

export default function UserPrompts({journalPrompts}) {
    let userJournalPrompts = journalPrompts.filter(journalPrompt => journalPrompt.isByUser);
    
    return (
        <div className="user-prompts-container">
            {
                userJournalPrompts.map(userJournalPrompt => {
                    return <UserPrompt key={userJournalPrompt.id} userJournalPrompt={userJournalPrompt} />
                })
            }
        </div>
    );
}