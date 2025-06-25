import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import { updateProfile } from 'firebase/auth';
import { Navigate } from 'react-router';
import { Toaster, toast } from 'react-hot-toast';
import usePageTitle from '../PageTitle/PageTitle';

const Profile = () => {
  usePageTitle('Profile');
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL });
        toast.success('Profile updated successfully!');
      })
      .catch((error) => {
        console.error(error);
        toast.error('Update failed.');
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-60px)] sm:min-h-screen px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="card w-full max-w-md bg-white shadow-xl p-6 rounded-2xl text-center">
        <img
          src={user.photoURL || 'https://i.ibb.co/2nF4R7c/default-avatar.png'}
          alt="User"
          className="w-24 h-24 rounded-full mx-auto mb-4 border"
        />
        <h2 className="text-xl font-bold">{user.displayName || 'No Name Provided'}</h2>
        <p className="text-gray-600 mb-4">{user.email}</p>

        <form onSubmit={handleUpdate} className="space-y-4 text-left">
          <div>
            <label className="block font-medium mb-1">Display Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter photo URL"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
