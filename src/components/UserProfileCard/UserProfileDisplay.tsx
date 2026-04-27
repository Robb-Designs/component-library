import { UserProfileCard } from "./UserProfileCard";

function UserProfileDisplay() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-6 md:px-6 flex flex-col md:flex-row md:w-[90%] gap-6">
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