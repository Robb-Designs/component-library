import type { UserProfileCardProps } from "../../types";


// This component displays a user profile card with optional email and role information. Referencing the UserProfileCardProps type for props.
export function UserProfileCard({
  user, 
  showEmail,
  showRole,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <div
      className="rounded-2xl border border-(--border) bg-(--bg) p-6 w-80"
      style={{ boxShadow: "var(--shadow)" }}
    >
      {/* Avatar */}
      {/* Used the root style variable colors react came with from index.css */}
      <div className="w-16 h-16 rounded-full bg-(--accent-bg) text-(--accent) flex items-center justify-center text-xl font-bold mx-auto">
        {user.name.charAt(0)}
      </div>

      <h2 className="text-center text-lg font-semibold text-(--text-h) mt-3">
        {user.name}
      </h2>
      {showEmail && <p>{user.email}</p>}
      {showRole && <p>{user.role}</p>}
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-4 w-full py-2 rounded-lg bg-(--accent) text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Edit
        </button>
      )}
      {children}
    </div>
  );
}
