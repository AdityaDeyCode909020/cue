import { useState } from "react";
import WebsiteLogoHeader from "../../components/WebsiteLogoHeader";
import './HomePage.css';
import JournalPrompts from "./JournalPrompts";

function HomePage() {

    const [visibleCount, setVisibleCount] = useState(4);
    const [journalPrompts, setJournalPrompts] = useState([
        "How did I feel today?",
        "What made me smile today?",
        "What challenged me today and how did I respond?",
        "What am I grateful for right now?",
        "What is one thing I learned about myself recently?",
        "What is a fear I want to overcome?",
        "Describe a happy memory from childhood.",
        "What does success mean to me?",
        "What am I proud of accomplishing this week?",
        "How do I show love to myself?",
        // "What are my top three priorities in life?",
        // "What habit do I want to start or stop?",
        // "Who inspires me and why?",
        // "What am I avoiding and why?",
        // "Write a letter to your future self.",
        // "What does my ideal day look like?",
        // "How do I handle stress?",
        // "What does self-care mean to me?",
        // "What are my short-term goals?",
        // "What are my long-term goals?",
        // "What am I grateful for in my relationships?",
        // "What makes me feel alive?",
        // "How do I express creativity?",
        // "What is my biggest strength?",
        // "What is a weakness I want to improve?",
        // "What do I need to let go of?",
        // "Describe a recent challenge and what I learned.",
        // "What energizes me the most?",
        // "What drains my energy?",
        // "How do I define happiness?",
        // "What are my favorite books or movies and why?",
        // "What do I want to achieve this month?",
        // "How do I react to criticism?",
        // "Who do I need to forgive?",
        // "What are three things I love about myself?",
        // "What does peace mean to me?",
        // "What motivates me?",
        // "Describe a time I felt proud of myself.",
        // "What role does nature play in my life?",
        // "What am I most passionate about?",
        // "What are my favorite rituals or routines?",
        // "What scares me most about the future?",
        // "How do I show kindness to others?",
        // "What is a mistake I learned from?",
        // "How do I spend my free time?",
        // "What does balance mean in my life?",
        // "What am I currently obsessed with?",
        // "What small wins can I celebrate today?",
        // "How do I handle disappointment?",
        // "What does freedom mean to me?",
        // "What are three things I want to accomplish this year?",
        // "What lessons have I learned from relationships?",
        // "What do I wish I could tell my younger self?",
        // "How do I want to be remembered?",
        // "What boundaries do I need to set?",
        // "What makes me feel safe?",
        // "What does my dream home look like?",
        // "How do I express gratitude?",
        // "What are my favorite quotes or sayings?",
        // "What do I need to forgive myself for?",
        // "What brings me comfort during tough times?",
        // "What are my spiritual beliefs or practices?",
        // "How do I show appreciation to others?",
        // "What hobbies bring me joy?",
        // "How do I define success in my career?",
        // "What are my financial goals?",
        // "What does love mean to me?",
        // "What is a life-changing lesson I’ve learned?",
        // "What fears are holding me back?",
        // "How do I celebrate accomplishments?",
        // "What do I want to improve about myself?",
        // "What role does family play in my life?",
        // "How do I want to grow emotionally?",
        // "What inspires me creatively?",
        // "How do I deal with anger?",
        // "What memories make me laugh?",
        // "What are my favorite childhood traditions?",
        // "What do I want to create in my life?",
        // "How do I define personal growth?",
        // "What are my health and wellness goals?",
        // "What would I do if I had no fear?",
        // "What does happiness look like today?",
        // "How do I show empathy?",
        // "What are three things I love about my life?",
        // "What is a habit I want to break?",
        // "What is a habit I want to build?",
        // "How do I connect with others?",
        // "What inspires me to learn?",
        // "What is a dream I’ve let go of?",
        // "What steps can I take to achieve my dreams?",
        // "What am I most thankful for today?",
        // "What does balance look like in my work and life?",
        // "How do I define my purpose?",
        // "What do I need more of in my life?",
        // "What do I need less of in my life?",
        // "Who do I admire and why?",
        // "What is a goal I want to accomplish this week?",
        // "What does courage mean to me?",
        // "What small act of kindness can I do today?",
        // "How do I recharge my energy?",
        // "What is something I’ve always wanted to learn?",
        // "What does self-love look like for me?"
    ]);

    function loadMorePrompts() {
        setVisibleCount(prev => {
            const nextCount = prev + 2;
            return nextCount > journalPrompts.length
                ? journalPrompts.length
                : nextCount;
        });
    }

    return (
        <section className="home-page page">
            <title>Cue</title>

            <WebsiteLogoHeader />

            <h2 className="greet-user-text">Hi, User👋</h2>

            <h3 className="heading-question">What do you want to reflect on?</h3>
            <p className="heading-question-para">Choose your prompt.</p>

            <JournalPrompts visibleCount={visibleCount} journalPrompts={journalPrompts} setJournalPrompts={setJournalPrompts} />

            <div className="home-page-buttons-cont">
                <button className="more-prompts-button" onClick={loadMorePrompts} disabled={visibleCount >= journalPrompts.length}>More Prompts</button>
                <button className="add-prompt-button">Add Prompt</button>
            </div>
        </section>
    );
}

export default HomePage;