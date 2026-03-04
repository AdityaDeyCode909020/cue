import BackToHomeButton from '../../components/BackToHomeButton';
import './YourJournalsPageSubheader.css';

export default function YourJournalsPageSubheader({userName}) {
    return (
        <div className="yjp-subheader">
            <h2>{userName}'s Journals</h2>
            <BackToHomeButton />
        </div>
    );
}