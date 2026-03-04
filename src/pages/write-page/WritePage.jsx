import WebsiteLogoHeader from "../../components/WebsiteLogoHeader";
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from "@tiptap/extension-placeholder";
import dayjs from "dayjs";
import { useNavigate, useSearchParams } from "react-router";
import './WritePage.css';
import { useEffect, useState } from "react";

export default function WritePage({ journalPrompts, setUserJournals, userJournals }) {
    const [searchParams] = useSearchParams();
    const promptId = searchParams.get('promptId');
    const userJournalId = searchParams.get('userJournalId');
    const navigate = useNavigate();

    let userJournal;
    if (userJournalId) {
        for (let uj of userJournals) {
            if (uj.userJournalId === userJournalId) {
                userJournal = uj;
            }
        }
    }

    const [isEmpty, setIsEmpty] = useState(true)

    

    let selectedPrompt;
    for (let prompt of journalPrompts) {
        if (prompt.id === promptId) {
            selectedPrompt = prompt;
        }
    }

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: false,
            }),
            Placeholder.configure({
                placeholder: `Write your answer to the journal prompt here...`,
            }),
        ],
        onUpdate: ({ editor }) => {
            setIsEmpty(editor.isEmpty)
        },
        content: userJournal ? userJournal.answerJournal : '',
    })

    useEffect(() => {
        setIsEmpty(editor.isEmpty);
    }, [editor.isEmpty]);

    const handleSave = () => {
        if (!editor) return;

        const html = editor.getHTML();
        const text = editor.getText();

        if (userJournal) {
            userJournal.answerJournal = html;
            userJournal.answerJournalAsText = text;
            userJournal.editDate = dayjs().format('DD/MM/YYYY');

            localStorage.setItem('cue-user-journals', JSON.stringify(userJournals));

            setUserJournals(userJournals);
        } else {
            const newUserJournals = [
                {
                    promptQuestion: selectedPrompt.promptQuestion,
                    answerJournal: html,
                    promptQuestionId: promptId,
                    userJournalId: crypto.randomUUID(),
                    answerJournalAsText: text,
                    editDate: dayjs().format('DD/MM/YYYY'),
                },
                ...userJournals
            ]

            localStorage.setItem('cue-user-journals', JSON.stringify(newUserJournals));

            setUserJournals(newUserJournals);
        }

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