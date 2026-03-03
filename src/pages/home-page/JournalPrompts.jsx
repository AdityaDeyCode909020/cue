import { useEffect } from "react";
import JournalPrompt from "./JournalPrompt";
import shuffleArray from "../../utils/arrayShuffle";
import './JournalPrompts.css';

export default function JournalPrompts({ selectedPromptId, setSelectedPromptId, setJournalPrompts, journalPrompts, startIndex, promptsPerPage }) {
    useEffect(() => {
        setJournalPrompts(shuffleArray(journalPrompts));
    }, []);

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