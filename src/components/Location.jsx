import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';
const Location = ({ lat, lng, onClick }) => {
  return (
    <div className="loactionMark" onClick={onClick}>
      <Icon icon={locationIcon} className="locationIcon"></Icon>
    </div>
  );
};

export default Location;
