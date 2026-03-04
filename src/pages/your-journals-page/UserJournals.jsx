import UserJournal from "./UserJournal";

export default function UserJournals({ userJournals, setUserJournals }) {
    return (
        <div className="user-journals-cont">
            {
                userJournals.map(userJournal => {
                    return <UserJournal key={crypto.randomUUID()} userJournals={userJournals} userJournal={userJournal} setUserJournals={setUserJournals} />
                })
            }
        </div>
    );
}