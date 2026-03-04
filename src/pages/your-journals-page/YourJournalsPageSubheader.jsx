import BackToHomeButton from '../../components/BackToHomeButton';
import './YourJournalsPageSubheader.css';

export default function YourJournalsPageSubheader() {


    return (
        <div className="yjp-subheader">
            <h2>User's Journals</h2>
            <BackToHomeButton />
        </div>
    );
}