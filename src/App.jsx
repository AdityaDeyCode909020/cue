import { Routes, Route } from "react-router";
import { useState } from "react";
import HomePage from "./pages/home-page/HomePage";
import WritePage from "./pages/write-page/WritePage";
import YourJournalsPage from "./pages/your-journals-page/YourJournalsPage";
import AddPromptPage from "./pages/add-prompt-page/AddPromptPage";
import YourPromptsPage from "./pages/your-prompts-page/YourPromptsPage";

function App() {
  const [journalPrompts, setJournalPrompts] = useState(JSON.parse(localStorage.getItem('cue-journal-prompts')) || [
    { id: "550e8400-e29b-41d4-a716-446655440001", promptQuestion: "How did I feel today and why?" },
    { id: "550e8400-e29b-41d4-a716-446655440002", promptQuestion: "What made me smile today?" },
    { id: "550e8400-e29b-41d4-a716-446655440003", promptQuestion: "What challenged me today?" },
    { id: "550e8400-e29b-41d4-a716-446655440004", promptQuestion: "What am I grateful for right now?" },
    { id: "550e8400-e29b-41d4-a716-446655440005", promptQuestion: "What is something I learned today?" },
    { id: "550e8400-e29b-41d4-a716-446655440006", promptQuestion: "How did I take care of myself today?" },
    { id: "550e8400-e29b-41d4-a716-446655440007", promptQuestion: "What drained my energy today?" },
    { id: "550e8400-e29b-41d4-a716-446655440008", promptQuestion: "What gave me energy today?" },
    { id: "550e8400-e29b-41d4-a716-446655440009", promptQuestion: "What is one small win I had today?" },
    { id: "550e8400-e29b-41d4-a716-446655440010", promptQuestion: "What could I have done better today?" },

    { id: "550e8400-e29b-41d4-a716-446655440011", promptQuestion: "What is currently worrying me?" },
    { id: "550e8400-e29b-41d4-a716-446655440012", promptQuestion: "What is within my control right now?" },
    { id: "550e8400-e29b-41d4-a716-446655440013", promptQuestion: "What does my ideal day look like?" },
    { id: "550e8400-e29b-41d4-a716-446655440014", promptQuestion: "What habits are helping me grow?" },
    { id: "550e8400-e29b-41d4-a716-446655440015", promptQuestion: "What habits are holding me back?" },
    { id: "550e8400-e29b-41d4-a716-446655440016", promptQuestion: "What motivates me the most?" },
    { id: "550e8400-e29b-41d4-a716-446655440017", promptQuestion: "What does success mean to me?" },
    { id: "550e8400-e29b-41d4-a716-446655440018", promptQuestion: "What does happiness mean to me?" },
    { id: "550e8400-e29b-41d4-a716-446655440019", promptQuestion: "What is something I need to forgive myself for?" },
    { id: "550e8400-e29b-41d4-a716-446655440020", promptQuestion: "What is something I need to let go of?" },

    { id: "550e8400-e29b-41d4-a716-446655440021", promptQuestion: "What are my top three priorities this week?" },
    { id: "550e8400-e29b-41d4-a716-446655440022", promptQuestion: "What is one fear I want to overcome?" },
    { id: "550e8400-e29b-41d4-a716-446655440023", promptQuestion: "What kind of person do I want to become?" },
    { id: "550e8400-e29b-41d4-a716-446655440024", promptQuestion: "What does my future self look like?" },
    { id: "550e8400-e29b-41d4-a716-446655440025", promptQuestion: "What makes me feel confident?" },
    { id: "550e8400-e29b-41d4-a716-446655440026", promptQuestion: "When do I feel most alive?" },
    { id: "550e8400-e29b-41d4-a716-446655440027", promptQuestion: "What triggers stress in my life?" },
    { id: "550e8400-e29b-41d4-a716-446655440028", promptQuestion: "How do I usually respond to stress?" },
    { id: "550e8400-e29b-41d4-a716-446655440029", promptQuestion: "What boundaries do I need to set?" },
    { id: "550e8400-e29b-41d4-a716-446655440030", promptQuestion: "What does rest mean to me?" },

    { id: "550e8400-e29b-41d4-a716-446655440031", promptQuestion: "What is something I am avoiding?" },
    { id: "550e8400-e29b-41d4-a716-446655440032", promptQuestion: "What would I do if I was not afraid?" },
    { id: "550e8400-e29b-41d4-a716-446655440033", promptQuestion: "Who inspires me and why?" },
    { id: "550e8400-e29b-41d4-a716-446655440034", promptQuestion: "What are my strengths?" },
    { id: "550e8400-e29b-41d4-a716-446655440035", promptQuestion: "What are my weaknesses?" },
    { id: "550e8400-e29b-41d4-a716-446655440036", promptQuestion: "What lessons did this week teach me?" },
    { id: "550e8400-e29b-41d4-a716-446655440037", promptQuestion: "What relationships matter most to me?" },
    { id: "550e8400-e29b-41d4-a716-446655440038", promptQuestion: "How can I improve my communication?" },
    { id: "550e8400-e29b-41d4-a716-446655440039", promptQuestion: "What does love mean to me?" },
    { id: "550e8400-e29b-41d4-a716-446655440040", promptQuestion: "What makes me feel valued?" },

    { id: "550e8400-e29b-41d4-a716-446655440041", promptQuestion: "What are three things I appreciate about myself?" },
    { id: "550e8400-e29b-41d4-a716-446655440042", promptQuestion: "What limiting belief do I need to change?" },
    { id: "550e8400-e29b-41d4-a716-446655440043", promptQuestion: "What is one goal I am working toward?" },
    { id: "550e8400-e29b-41d4-a716-446655440044", promptQuestion: "Why is that goal important to me?" },
    { id: "550e8400-e29b-41d4-a716-446655440045", promptQuestion: "What progress have I made recently?" },
    { id: "550e8400-e29b-41d4-a716-446655440046", promptQuestion: "What distracts me the most?" },
    { id: "550e8400-e29b-41d4-a716-446655440047", promptQuestion: "How can I improve my focus?" },
    { id: "550e8400-e29b-41d4-a716-446655440048", promptQuestion: "What does discipline mean to me?" },
    { id: "550e8400-e29b-41d4-a716-446655440049", promptQuestion: "How do I define personal growth?" },
    { id: "550e8400-e29b-41d4-a716-446655440050", promptQuestion: "What is something new I want to try?" },

    { id: "550e8400-e29b-41d4-a716-446655440051", promptQuestion: "What does balance look like in my life?" },
    { id: "550e8400-e29b-41d4-a716-446655440052", promptQuestion: "How do I recharge emotionally?" },
    { id: "550e8400-e29b-41d4-a716-446655440053", promptQuestion: "What makes me feel overwhelmed?" },
    { id: "550e8400-e29b-41d4-a716-446655440054", promptQuestion: "What is one decision I need to make?" },
    { id: "550e8400-e29b-41d4-a716-446655440055", promptQuestion: "What advice would I give my younger self?" },
    { id: "550e8400-e29b-41d4-a716-446655440056", promptQuestion: "What advice would my future self give me?" },
    { id: "550e8400-e29b-41d4-a716-446655440057", promptQuestion: "What are my core values?" },
    { id: "550e8400-e29b-41d4-a716-446655440058", promptQuestion: "How aligned is my life with my values?" },
    { id: "550e8400-e29b-41d4-a716-446655440059", promptQuestion: "What does freedom mean to me?" },
    { id: "550e8400-e29b-41d4-a716-446655440060", promptQuestion: "What makes me feel stuck?" },

    { id: "550e8400-e29b-41d4-a716-446655440061", promptQuestion: "What small action can I take today toward my goals?" },
    { id: "550e8400-e29b-41d4-a716-446655440062", promptQuestion: "What am I procrastinating on?" },
    { id: "550e8400-e29b-41d4-a716-446655440063", promptQuestion: "Why am I procrastinating on it?" },
    { id: "550e8400-e29b-41d4-a716-446655440064", promptQuestion: "What does courage mean to me?" },
    { id: "550e8400-e29b-41d4-a716-446655440065", promptQuestion: "How can I show myself more compassion?" },
    { id: "550e8400-e29b-41d4-a716-446655440066", promptQuestion: "What does my ideal morning routine look like?" },
    { id: "550e8400-e29b-41d4-a716-446655440067", promptQuestion: "What does my ideal night routine look like?" },
    { id: "550e8400-e29b-41d4-a716-446655440068", promptQuestion: "What habits do I want to build?" },
    { id: "550e8400-e29b-41d4-a716-446655440069", promptQuestion: "What habits do I want to break?" },
    { id: "550e8400-e29b-41d4-a716-446655440070", promptQuestion: "What inspires creativity in me?" },

    { id: "550e8400-e29b-41d4-a716-446655440071", promptQuestion: "How do I define success in relationships?" },
    { id: "550e8400-e29b-41d4-a716-446655440072", promptQuestion: "What makes me feel secure?" },
    { id: "550e8400-e29b-41d4-a716-446655440073", promptQuestion: "What makes me feel anxious?" },
    { id: "550e8400-e29b-41d4-a716-446655440074", promptQuestion: "How do I handle criticism?" },
    { id: "550e8400-e29b-41d4-a716-446655440075", promptQuestion: "What does self respect mean to me?" },
    { id: "550e8400-e29b-41d4-a716-446655440076", promptQuestion: "What does integrity mean to me?" },
    { id: "550e8400-e29b-41d4-a716-446655440077", promptQuestion: "How can I improve my physical health?" },
    { id: "550e8400-e29b-41d4-a716-446655440078", promptQuestion: "How can I improve my mental health?" },
    { id: "550e8400-e29b-41d4-a716-446655440079", promptQuestion: "How can I improve my emotional resilience?" },
    { id: "550e8400-e29b-41d4-a716-446655440080", promptQuestion: "What brings peace into my life?" },

    { id: "550e8400-e29b-41d4-a716-446655440081", promptQuestion: "What makes me proud of myself?" },
    { id: "550e8400-e29b-41d4-a716-446655440082", promptQuestion: "What kind of environment helps me thrive?" },
    { id: "550e8400-e29b-41d4-a716-446655440083", promptQuestion: "What is something I want to master?" },
    { id: "550e8400-e29b-41d4-a716-446655440084", promptQuestion: "What kind of legacy do I want to leave?" },
    { id: "550e8400-e29b-41d4-a716-446655440085", promptQuestion: "What are three things I can improve tomorrow?" },
    { id: "550e8400-e29b-41d4-a716-446655440086", promptQuestion: "What does gratitude mean to me?" },
    { id: "550e8400-e29b-41d4-a716-446655440087", promptQuestion: "What does patience mean to me?" },
    { id: "550e8400-e29b-41d4-a716-446655440088", promptQuestion: "How do I handle failure?" },
    { id: "550e8400-e29b-41d4-a716-446655440089", promptQuestion: "What did failure teach me?" },
    { id: "550e8400-e29b-41d4-a716-446655440090", promptQuestion: "What does growth feel like?" },

    { id: "550e8400-e29b-41d4-a716-446655440091", promptQuestion: "What is something I am grateful for about today?" },
    { id: "550e8400-e29b-41d4-a716-446655440092", promptQuestion: "What does confidence look like in action?" },
    { id: "550e8400-e29b-41d4-a716-446655440093", promptQuestion: "What do I need more of in my life?" },
    { id: "550e8400-e29b-41d4-a716-446655440094", promptQuestion: "What do I need less of in my life?" },
    { id: "550e8400-e29b-41d4-a716-446655440095", promptQuestion: "What does inner peace mean to me?" },
    { id: "550e8400-e29b-41d4-a716-446655440096", promptQuestion: "What is one step I can take toward self improvement?" },
    { id: "550e8400-e29b-41d4-a716-446655440097", promptQuestion: "How do I want to feel tomorrow?" },
    { id: "550e8400-e29b-41d4-a716-446655440098", promptQuestion: "What intention do I want to set for tomorrow?" },
    { id: "550e8400-e29b-41d4-a716-446655440099", promptQuestion: "What is something I am proud of overcoming?" },
    { id: "550e8400-e29b-41d4-a716-446655440100", promptQuestion: "What does my best self look like?" }
  ]);

  const [userJournals, setUserJournals] = useState(JSON.parse(localStorage.getItem('cue-user-journals')) || []);

  return (
    <Routes>
      <Route index element={<HomePage journalPrompts={journalPrompts} setJournalPrompts={setJournalPrompts} />} />
      <Route path="/write" element={<WritePage userJournals={userJournals} setUserJournals={setUserJournals} journalPrompts={journalPrompts} />} />
      <Route path="/your-journals" element={<YourJournalsPage userJournals={userJournals} setUserJournals={setUserJournals} />} />
      <Route path="/add-prompt" element={<AddPromptPage journalPrompts={journalPrompts} setJournalPrompts={setJournalPrompts} />}/>
      <Route path="/your-prompts" element={<YourPromptsPage journalPrompts={journalPrompts} setJournalPrompts={setJournalPrompts} />} />
    </Routes>
  );
}

export default App;