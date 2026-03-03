import WebsiteLogoHeader from "../../components/WebsiteLogoHeader";
import UserJournals from "./UserJournals";
import './YourJournalsPage.css';

export default function YourJournalsPage({ userJournals }) {
    return (
        <section className="your-journals-page page">
            <WebsiteLogoHeader />

            <h2>User's Journals</h2>

            <UserJournals userJournals={userJournals} />
        </section>
    );
}