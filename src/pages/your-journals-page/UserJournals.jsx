import UserJournal from "./UserJournal";
import './UserJournals.css';

export default function UserJournals({ userJournals, setUserJournals }) {
    return (
        <div className="user-journals-cont">
            {
                userJournals.length !== 0
                    ?
                    (
                        userJournals.map(userJournal => {
                            return <UserJournal key={crypto.randomUUID()} userJournals={userJournals} userJournal={userJournal} setUserJournals={setUserJournals} />
                        })
                    )
                    :   
                    (   
                        <p className="no-user-journals-para">No journals yet. Start writing your first one.</p>
                    )
            }
        </div>
    );
}