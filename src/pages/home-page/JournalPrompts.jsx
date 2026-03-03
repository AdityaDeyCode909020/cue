import { useEffect } from "react";
import JournalPrompt from "./JournalPrompt";
import shuffleArray from "../../utils/arrayShuffle";

export default function JournalPrompts({ visibleCount, setJournalPrompts, journalPrompts }) {
    useEffect(() => {
        setJournalPrompts(shuffleArray(journalPrompts));
    }, []);

    return (
        <div className="journal-prompts-container">
            {
                journalPrompts.slice(0, visibleCount).map(journalPrompt => {
                    return (
                        <JournalPrompt key={crypto.randomUUID()} journalPrompt={journalPrompt} />
                    );
                })
            }
        </div>
    );
}