import WebsiteLogoHeader from "../components/WebsiteLogoHeader";
import './HomePage.css';

function HomePage() {
    return (
        <section className="home-page page">
            <title>Cue</title>

            <WebsiteLogoHeader />

            <h2 className="greet-user-text">Hi, User👋</h2>

            <h3 className="heading-question">What do you want to reflect on?</h3>
            <p className="heading-question-para">Choose your prompt.</p>

            <div className="journal-prompts-container">
                <div className="journal-prompt">
                    <p>What support do I need to fulfil my goals?</p>
                </div>

                <div className="journal-prompt">
                    <p>What can I learn from this week?</p>
                </div>

                <div className="journal-prompt">
                    <p>What’s weighing on my mind right now?</p>
                </div>
            </div>
        </section>
    );
}

export default HomePage;