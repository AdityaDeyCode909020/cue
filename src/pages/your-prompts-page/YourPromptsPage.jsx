import WebsiteLogoHeader from "../../components/WebsiteLogoHeader";
import BackToHomeButton from "../../components/BackToHomeButton";
import UserPrompts from "./UserPrompts";
import './YourPromptsPage.css';

export default function YourPromptsPage({ journalPrompts, setJournalPrompts }) {
    return (
        <section className="page your-prompts-page">
            <WebsiteLogoHeader />

            <div className="ypp-subheader">
                <h2>Your Prompts</h2>
                <BackToHomeButton className="back-button-ypp"/>
            </div>

            <UserPrompts journalPrompts={journalPrompts} setJournalPrompts={setJournalPrompts} />
        </section>
    );
}