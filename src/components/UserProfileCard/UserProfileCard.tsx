
import type { UserProfileCardProps } from '../../types';



export function UserProfileCard({ user, showEmail, showRole, onEdit, children }: UserProfileCardProps) {
  return (
    <div>
      <h2>{user.name}</h2>
      {showEmail && <p>{user.email}</p>}
      {showRole && <p>{user.role}</p>}
      {onEdit && (
        <button onClick={() => onEdit(user.id)}>Edit</button>
      )}
      {children}
    </div>
  );
}