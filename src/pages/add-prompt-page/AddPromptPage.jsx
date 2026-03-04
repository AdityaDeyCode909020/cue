import { useState } from "react";
import WebsiteLogoHeader from "../../components/WebsiteLogoHeader";
import './AddPromptPage.css';
import { useNavigate } from "react-router";

export default function AddPromptPage({ journalPrompts, setJournalPrompts }) {
    const [promptQuestionText, setPromptQuestionText] = useState('');

    const handleInputChange = (event) => {
        setPromptQuestionText(event.target.value);
    }

    const navigate = useNavigate();

    const createPromptQuestion = () => {
        const newJournalPrompts = [
            {
                id: crypto.randomUUID(),
                promptQuestion: promptQuestionText.trim(),
                isByUser: true,
            },
            ...journalPrompts,
        ]

        localStorage.setItem('cue-journal-prompts', JSON.stringify(newJournalPrompts))

        setJournalPrompts(newJournalPrompts);

        navigate('/');
    }

    return (
        <section className="page add-prompt-page">
            <WebsiteLogoHeader />

            <h2>Create your own prompt</h2>

            <input type="text" value={promptQuestionText} onChange={handleInputChange} placeholder="Enter your prompt question here."/>

            <button disabled={promptQuestionText.trim() === ''} className="create-prompt-button" onClick={createPromptQuestion}>Create</button>
        </section>
    );
}