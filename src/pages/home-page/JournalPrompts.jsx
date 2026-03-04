import JournalPrompt from "./JournalPrompt";
import './JournalPrompts.css';

export default function JournalPrompts({ selectedPromptId, setSelectedPromptId, journalPrompts, startIndex, promptsPerPage }) {
    return (
        <div className="journal-prompts-container">
            {
                journalPrompts.slice(startIndex, startIndex + promptsPerPage).map(journalPrompt => {
                    return (
                        <JournalPrompt
                            key={journalPrompt.id}
                            journalPrompt={journalPrompt}
                            isSelected={journalPrompt.id === selectedPromptId}
                            setSelectedPromptId={setSelectedPromptId}
                        />
                    );
                })
            }
        </div>
    );
}