import WebsiteLogoHeader from "../../components/WebsiteLogoHeader";
import CancelButton from "../../components/CancelButton";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function EditNamePage({ setUserName }) {
    const [nameText, setNameText] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setNameText(event.target.value);
    }

    const saveName = () => {
        localStorage.setItem('cue-user-name', nameText);
        setUserName(nameText.trim());
        navigate('/');
    }

    return (
        <section className="page editor-name-page">
            <WebsiteLogoHeader />

            <h2>What's your name?</h2>
            <input value={nameText} onChange={handleInputChange} type="text" placeholder="Enter your name here." />

            <button disabled={nameText.trim() === '' || nameText.length > 10} onClick={saveName}>Save</button>
            <CancelButton/>
        </section>
    );
}