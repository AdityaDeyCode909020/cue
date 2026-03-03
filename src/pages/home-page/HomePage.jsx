import WebsiteLogoHeader from "../../components/WebsiteLogoHeader";
import './HomePage.css';
import JournalPrompts from "./JournalPrompts";

function HomePage() {

    return (
        <section className="home-page page">
            <title>Cue</title>

            <WebsiteLogoHeader />

            <h2 className="greet-user-text">Hi, User👋</h2>

            <h3 className="heading-question">What do you want to reflect on?</h3>
            <p className="heading-question-para">Choose your prompt.</p>

            <JournalPrompts />

            <div className="home-page-buttons-cont">
                <button className="more-prompts-button">More Prompts</button>
                <button className="add-prompt-button">Add Prompt</button>
            </div>
        </section>
    );
}

export default HomePage;