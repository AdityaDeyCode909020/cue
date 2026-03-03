import './JournalPrompt.css';

export default function JournalPrompt({ journalPrompt, setSelectedPromptId, isSelected }) {
    const selectPrompt = () => {
        setSelectedPromptId(journalPrompt.id);
    }

    return (
        <div className={`journal-prompt ${isSelected ? 'selected-prompt' : ''}`} onClick={selectPrompt}>
            {journalPrompt.promptQuestion}
        </div>
    );
}

