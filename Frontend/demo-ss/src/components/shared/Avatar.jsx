import React from 'react';
import './Avatar.css';

const Avatar = ({ size = 'md', src, alt, name }) => {
  // If no image is provided, use initials
  const getInitials = (name) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const avatarSizes = {
    sm: 'avatar-sm',
    md: 'avatar-md',
    lg: 'avatar-lg'
  };

  const avatarClass = `avatar ${avatarSizes[size] || 'avatar-md'}`;

  return (
    <div className={avatarClass}>
      {src ? (
        <img src={src} alt={alt || name || 'User avatar'} />
      ) : (
        <div className="avatar-initials">{getInitials(name)}</div>
      )}
    </div>
  );
};

export default Avatar;