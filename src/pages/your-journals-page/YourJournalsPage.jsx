import WebsiteLogoHeader from "../../components/WebsiteLogoHeader";
import UserJournals from "./UserJournals";
import './YourJournalsPage.css';
import YourJournalsPageSubheader from "./YourJournalsPageSubheader";

export default function YourJournalsPage({ userJournals, setUserJournals }) {
    return (
        <section className="your-journals-page page">
            <WebsiteLogoHeader />

            <YourJournalsPageSubheader />

            <UserJournals userJournals={userJournals} setUserJournals={setUserJournals} />
        </section>
    );
}