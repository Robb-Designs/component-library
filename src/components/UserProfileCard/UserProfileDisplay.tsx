import { UserProfileCard } from "./UserProfileCard";

function UserProfileDisplay() {
  return (
    <section>
        <UserProfileCard
                      user={{
                        id: "1",
                        name: "Robb L.",
                        email: "thisemail@email.com",
                        role: "Software Engineer",
                      }}
                      showEmail={true}
                      showRole={true}
                      onEdit={(userId) => alert(`Edit user with ID: ${userId}`)}
                    />
        
                    <UserProfileCard
                      user={{
                        id: "2",
                        name: "Paul C.",
                        email: "thisemail@email.com",
                        role: "CEO of Company",
                      }}
                      showEmail={false}
                      showRole={true}
                      onEdit={(userId) => alert(`Edit user with ID: ${userId}`)}
                    />
        
                    <UserProfileCard
                      user={{
                        id: "2",
                        name: "Paul C.",
                        email: "thisemail@email.com",
                        role: "CEO of Company",
                      }}
                      showEmail={false}
                      showRole={false}
                      onEdit={(userId) => alert(`Edit user with ID: ${userId}`)}
                    />
    </section>
  )
}

export default UserProfileDisplay;