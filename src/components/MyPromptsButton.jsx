import { useNavigate } from "react-router";

export default function MyPromptsButton() {
    const navigate = useNavigate();

    const goToMyPromptsPage = () => {
        navigate('/your-prompts');
    }

    return (
        <button className="subheader-button" onClick={goToMyPromptsPage}>My Prompts</button>
    );
}