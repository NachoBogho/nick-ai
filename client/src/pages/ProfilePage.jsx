import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import '../sass/pages-styles/profile-page.scss';

const ProfilePage = () => {
  const { user, updateUser } = useAuth();
  const [companyName, setCompanyName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    if (user) {
      setCompanyName(user.companyName || '');
      setDescription(user.description || '');
      setLocation(user.location || '');
      setProfileImage(user.profileImage || null);
    }
  }, [user]);

  useEffect(() => {
    if (
      companyName !== (user?.companyName || '') ||
      description !== (user?.description || '') ||
      location !== (user?.location || '') ||
      profileImage !== (user?.profileImage || null)
    ) {
      setIsModified(true);
    } else {
      setIsModified(false);
    }
  }, [companyName, description, location, profileImage, user]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('companyName', companyName);
    formData.append('description', description);
    formData.append('location', location);
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }
    await updateUser(formData);
  };

  if (!user) {
    return <div>No hay información del usuario disponible.</div>;
  }

  return (
    <div className="user-profile">
      <form onSubmit={handleUpdateProfile}>
        <div className="profile-image">
          <img
            src={
              profileImage
                ? URL.createObjectURL(profileImage)
                : user.profileImage || '/default-profile.png'
            }
            alt="Profile"
          />
          <label className="upload-button">
            Seleccionar archivo
            <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} />
          </label>
        </div>
        <div className="profile-details">
          <p><strong>Nombre:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <div>
            <label>Nombre de la empresa:</label>
            <input
              type="text"
              value={companyName}
              placeholder="Introduce el nombre de la empresa"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div>
            <label>Ubicación:</label>
            <input
              type="text"
              value={location}
              placeholder="Introduce la ubicación"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <label>Descripción:</label>
            <textarea
              value={description}
              placeholder="Introduce una descripción"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {isModified && <button type="submit">Actualizar perfil</button>}
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
