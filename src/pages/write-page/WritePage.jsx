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

    const [journalText, setJournalText] = useState('');
    const [isEmpty, setIsEmpty] = useState(true)

    let selectedPrompt;
    for (let prompt of journalPrompts) {
        if (prompt.id === Number(promptId)) {
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

        console.log(userJournals);
    }

    const navigate = useNavigate();

    if (!editor) return null

    const backToHome = () => {
        navigate('/');
    }

    return (
        <section className="write-page page">
            <WebsiteLogoHeader />

            <h2 className="write-journal-prompt">{selectedPrompt.promptQuestion}</h2>

            <EditorContent editor={editor} />

            <button className="save-journal-button" onClick={handleSave} disabled={!editor || editor.isEmpty}>Save Journal</button>
            <button className="back-to-home-button" onClick={backToHome}>Back To Home</button>
        </section>
    );
}