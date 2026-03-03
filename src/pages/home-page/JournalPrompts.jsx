import { useEffect, useState } from "react";
import JournalPrompt from "./JournalPrompt";
import shuffleArray from "../../utils/arrayShuffle";
import './JournalPrompts.css';

export default function JournalPrompts({ visibleCount, setJournalPrompts, journalPrompts }) {
    useEffect(() => {
        setJournalPrompts(shuffleArray(journalPrompts));
    }, []);

    const [selectedPromptId, setSelectedPromptId] = useState(null);

    return (
        <div className="journal-prompts-container">
            {
                journalPrompts.slice(0, visibleCount).map(journalPrompt => {
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