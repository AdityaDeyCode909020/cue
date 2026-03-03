import UserJournal from "./UserJournal";

export default function UserJournals({ userJournals }) {
    return (
        <div className="user-journals-cont">
            {
                userJournals.map(userJournal => {
                    return <UserJournal key={crypto.randomUUID()} userJournal={userJournal} />
                })
            }
        </div>
    );
}