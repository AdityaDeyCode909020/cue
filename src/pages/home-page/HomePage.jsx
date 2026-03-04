import { useState } from "react";
import WebsiteLogoHeader from "../../components/WebsiteLogoHeader";
import './HomePage.css';
import JournalPrompts from "./JournalPrompts";
import { useNavigate } from "react-router";
import HomePageSubheader from "./HomePageSubheader";

function HomePage({ journalPrompts, setJournalPrompts }) {
    const [startIndex, setStartIndex] = useState(0);
    const promptsPerPage = 4;

    const [selectedPromptId, setSelectedPromptId] = useState(null);

    function loadMorePrompts() {
        setSelectedPromptId(null);

        setStartIndex(prev => {
            const next = prev + promptsPerPage;
            if (next >= journalPrompts.length) {
                return 0;
            }
            return next;
        });
    }

    const navigate = useNavigate();

    const writeJournal = () => {
        navigate(`/write?promptId=${selectedPromptId}`);
    }

    const goToAddPromptPage = () => {
        navigate('/add-prompt');
    }

    return (
        <section className="home-page page">
            <WebsiteLogoHeader />

            <HomePageSubheader />

            <h3 className="heading-question">What do you want to reflect on?</h3>
            <p className="heading-question-para">Choose your prompt.</p>

            <JournalPrompts selectedPromptId={selectedPromptId} setSelectedPromptId={setSelectedPromptId} promptsPerPage={promptsPerPage} startIndex={startIndex} journalPrompts={journalPrompts} setJournalPrompts={setJournalPrompts} />

            <div className="home-page-buttons-cont">
                <div>
                    <button className="more-prompts-button button" onClick={loadMorePrompts}>More Prompts</button>
                    <button className="add-prompt-button button" onClick={goToAddPromptPage}>Add Prompt</button>
                </div>
                <button onClick={writeJournal} className={selectedPromptId !== null ? 'write-button' : ''} disabled={selectedPromptId === null}>Write</button>
            </div>
        </section>
    );
}

export default HomePage;