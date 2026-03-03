import { useState } from "react";
import WebsiteLogoHeader from "../../components/WebsiteLogoHeader";
import './HomePage.css';
import JournalPrompts from "./JournalPrompts";
import { useNavigate } from "react-router";

function HomePage() {
    const [journalPrompts, setJournalPrompts] = useState([
        { id: 1, promptQuestion: "How did I feel today and why?" },
        { id: 2, promptQuestion: "What made me smile today?" },
        { id: 3, promptQuestion: "What challenged me today?" },
        { id: 4, promptQuestion: "What am I grateful for right now?" },
        { id: 5, promptQuestion: "What is something I learned today?" },
        { id: 6, promptQuestion: "How did I take care of myself today?" },
        { id: 7, promptQuestion: "What drained my energy today?" },
        { id: 8, promptQuestion: "What gave me energy today?" },
        { id: 9, promptQuestion: "What is one small win I had today?" },
        { id: 10, promptQuestion: "What could I have done better today?" },

        { id: 11, promptQuestion: "What is currently worrying me?" },
        { id: 12, promptQuestion: "What is within my control right now?" },
        { id: 13, promptQuestion: "What does my ideal day look like?" },
        { id: 14, promptQuestion: "What habits are helping me grow?" },
        { id: 15, promptQuestion: "What habits are holding me back?" },
        { id: 16, promptQuestion: "What motivates me the most?" },
        { id: 17, promptQuestion: "What does success mean to me?" },
        { id: 18, promptQuestion: "What does happiness mean to me?" },
        { id: 19, promptQuestion: "What is something I need to forgive myself for?" },
        { id: 20, promptQuestion: "What is something I need to let go of?" },

        { id: 21, promptQuestion: "What are my top three priorities this week?" },
        { id: 22, promptQuestion: "What is one fear I want to overcome?" },
        { id: 23, promptQuestion: "What kind of person do I want to become?" },
        { id: 24, promptQuestion: "What does my future self look like?" },
        { id: 25, promptQuestion: "What makes me feel confident?" },
        { id: 26, promptQuestion: "When do I feel most alive?" },
        { id: 27, promptQuestion: "What triggers stress in my life?" },
        { id: 28, promptQuestion: "How do I usually respond to stress?" },
        { id: 29, promptQuestion: "What boundaries do I need to set?" },
        { id: 30, promptQuestion: "What does rest mean to me?" },

        { id: 31, promptQuestion: "What is something I am avoiding?" },
        { id: 32, promptQuestion: "What would I do if I was not afraid?" },
        { id: 33, promptQuestion: "Who inspires me and why?" },
        { id: 34, promptQuestion: "What are my strengths?" },
        { id: 35, promptQuestion: "What are my weaknesses?" },
        { id: 36, promptQuestion: "What lessons did this week teach me?" },
        { id: 37, promptQuestion: "What relationships matter most to me?" },
        { id: 38, promptQuestion: "How can I improve my communication?" },
        { id: 39, promptQuestion: "What does love mean to me?" },
        { id: 40, promptQuestion: "What makes me feel valued?" },

        { id: 41, promptQuestion: "What are three things I appreciate about myself?" },
        { id: 42, promptQuestion: "What limiting belief do I need to change?" },
        { id: 43, promptQuestion: "What is one goal I am working toward?" },
        { id: 44, promptQuestion: "Why is that goal important to me?" },
        { id: 45, promptQuestion: "What progress have I made recently?" },
        { id: 46, promptQuestion: "What distracts me the most?" },
        { id: 47, promptQuestion: "How can I improve my focus?" },
        { id: 48, promptQuestion: "What does discipline mean to me?" },
        { id: 49, promptQuestion: "How do I define personal growth?" },
        { id: 50, promptQuestion: "What is something new I want to try?" },

        { id: 51, promptQuestion: "What does balance look like in my life?" },
        { id: 52, promptQuestion: "How do I recharge emotionally?" },
        { id: 53, promptQuestion: "What makes me feel overwhelmed?" },
        { id: 54, promptQuestion: "What is one decision I need to make?" },
        { id: 55, promptQuestion: "What advice would I give my younger self?" },
        { id: 56, promptQuestion: "What advice would my future self give me?" },
        { id: 57, promptQuestion: "What are my core values?" },
        { id: 58, promptQuestion: "How aligned is my life with my values?" },
        { id: 59, promptQuestion: "What does freedom mean to me?" },
        { id: 60, promptQuestion: "What makes me feel stuck?" },

        { id: 61, promptQuestion: "What small action can I take today toward my goals?" },
        { id: 62, promptQuestion: "What am I procrastinating on?" },
        { id: 63, promptQuestion: "Why am I procrastinating on it?" },
        { id: 64, promptQuestion: "What does courage mean to me?" },
        { id: 65, promptQuestion: "How can I show myself more compassion?" },
        { id: 66, promptQuestion: "What does my ideal morning routine look like?" },
        { id: 67, promptQuestion: "What does my ideal night routine look like?" },
        { id: 68, promptQuestion: "What habits do I want to build?" },
        { id: 69, promptQuestion: "What habits do I want to break?" },
        { id: 70, promptQuestion: "What inspires creativity in me?" },

        { id: 71, promptQuestion: "How do I define success in relationships?" },
        { id: 72, promptQuestion: "What makes me feel secure?" },
        { id: 73, promptQuestion: "What makes me feel anxious?" },
        { id: 74, promptQuestion: "How do I handle criticism?" },
        { id: 75, promptQuestion: "What does self respect mean to me?" },
        { id: 76, promptQuestion: "What does integrity mean to me?" },
        { id: 77, promptQuestion: "How can I improve my physical health?" },
        { id: 78, promptQuestion: "How can I improve my mental health?" },
        { id: 79, promptQuestion: "How can I improve my emotional resilience?" },
        { id: 80, promptQuestion: "What brings peace into my life?" },

        { id: 81, promptQuestion: "What makes me proud of myself?" },
        { id: 82, promptQuestion: "What kind of environment helps me thrive?" },
        { id: 83, promptQuestion: "What is something I want to master?" },
        { id: 84, promptQuestion: "What kind of legacy do I want to leave?" },
        { id: 85, promptQuestion: "What are three things I can improve tomorrow?" },
        { id: 86, promptQuestion: "What does gratitude mean to me?" },
        { id: 87, promptQuestion: "What does patience mean to me?" },
        { id: 88, promptQuestion: "How do I handle failure?" },
        { id: 89, promptQuestion: "What did failure teach me?" },
        { id: 90, promptQuestion: "What does growth feel like?" },

        { id: 91, promptQuestion: "What is something I am grateful for about today?" },
        { id: 92, promptQuestion: "What does confidence look like in action?" },
        { id: 93, promptQuestion: "What do I need more of in my life?" },
        { id: 94, promptQuestion: "What do I need less of in my life?" },
        { id: 95, promptQuestion: "What does inner peace mean to me?" },
        { id: 96, promptQuestion: "What is one step I can take toward self improvement?" },
        { id: 97, promptQuestion: "How do I want to feel tomorrow?" },
        { id: 98, promptQuestion: "What intention do I want to set for tomorrow?" },
        { id: 99, promptQuestion: "What is something I am proud of overcoming?" },
        { id: 100, promptQuestion: "What does my best self look like?" }
    ]);

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
        navigate(`/write`);
    }

    return (
        <section className="home-page page">
            <WebsiteLogoHeader />

            <h2 className="greet-user-text">Hi, User👋</h2>

            <h3 className="heading-question">What do you want to reflect on?</h3>
            <p className="heading-question-para">Choose your prompt.</p>

            <JournalPrompts selectedPromptId={selectedPromptId} setSelectedPromptId={setSelectedPromptId} promptsPerPage={promptsPerPage} startIndex={startIndex} journalPrompts={journalPrompts} setJournalPrompts={setJournalPrompts} />

            <div className="home-page-buttons-cont">
                <div>
                    <button className="more-prompts-button button" onClick={loadMorePrompts}>More Prompts</button>
                    <button className="add-prompt-button button">Add Prompt</button>
                </div>
                <button onClick={writeJournal} className={selectedPromptId !== null ? 'write-button' : ''} disabled={selectedPromptId === null}>Write</button>
            </div>
        </section>
    );
}

export default HomePage;