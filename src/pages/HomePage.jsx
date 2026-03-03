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
        </section>
    );
}

export default HomePage;