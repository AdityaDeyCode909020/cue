import WebsiteLogoHeader from "../../components/WebsiteLogoHeader";
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from "@tiptap/extension-placeholder";
import { useNavigate, useSearchParams } from "react-router";
import './WritePage.css';
import { useState } from "react";

export default function WritePage({ journalPrompts, setUserJournals, userJournals }) {
    const [searchParams] = useSearchParams();
    const promptId = searchParams.get('promptId');
    const navigate = useNavigate();

    const [isEmpty, setIsEmpty] = useState(true)

    let selectedPrompt;
    for (let prompt of journalPrompts) {
        if (prompt.id === promptId) {
            selectedPrompt = prompt;
        }
    }

    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: `Write your answer to the journal prompt here...`,
            }),
        ],
        onUpdate: ({ editor }) => {
            setIsEmpty(editor.isEmpty)
        },
        content: '',
    })

    const handleSave = () => {
        if (!editor) return;

        const html = editor.getHTML();
        const text = editor.getText();

        const newUserJournals = [
            {
                promptQuestion: selectedPrompt.promptQuestion,
                answerJournal: JSON.stringify(html),
                promptQuestionId: promptId,
                userJournalId: crypto.randomUUID(),
                answerJournalAsText: text,
            },
            ...userJournals
        ]

        setUserJournals(newUserJournals);

        navigate('/your-journals');
    }

    

    if (!editor) return null

    const backToHome = () => {
        navigate('/');
    }

    return (
        <section className="write-page page">
            <WebsiteLogoHeader />

            <h2 className="write-journal-prompt">{selectedPrompt.promptQuestion}</h2>

            <EditorContent editor={editor} />

            <button className="save-journal-button" onClick={handleSave} disabled={!editor || isEmpty}>Save Journal</button>
            <button className="back-to-home-button" onClick={backToHome}>Back To Home</button>
        </section>
    );
}