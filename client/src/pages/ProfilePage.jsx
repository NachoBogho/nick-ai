import React from 'react'
import { useAuth } from '../context/AuthContext';
import '../sass/pages-styles/profile-page.scss';

const ProfilePage = () => {
  const { user } = useAuth();

  if (!user) {
      return <div>No hay información del usuario disponible.</div>;
  }
  
  return (
    <div className="user-profile">
    <h2>Perfil del Usuario</h2>
    <div className="profile-details">
        <p><strong>Nombre:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
    </div>
</div>
  )
}

export default ProfilePage
