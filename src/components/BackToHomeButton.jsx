import { useNavigate } from "react-router";

export default function BackToHomeButton() {
    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/');
    }

    return (
        <button className="subheader-button back-to-home-button" onClick={backToHome}>Back To Home</button>
    );
}