import React from 'react';
import FaBolt from 'react-icons/lib/fa/bolt';
import FaBell from 'react-icons/lib/fa/bell';
import FaAt from 'react-icons/lib/fa/at';
import FaThumbsUpO from 'react-icons/lib/fa/thumbs-o-up';
import FaExclamation from 'react-icons/lib/fa/exclamation';
import FaRocket from 'react-icons/lib/fa/rocket';

const iconSize = 34;

const NotificationIcon = ({ type }) => {
  switch (type) {
    case 'MICRO_TASK':
      return <FaBolt size={iconSize} />
    case 'APPRECIATION':
      return <FaThumbsUpO size={iconSize} />
    case 'MENTION':
      return <FaAt size={iconSize} />
    case 'HELP_WANTED':
      return <FaExclamation size={iconSize} />
    case 'PROGRESS':
      return <FaRocket size={iconSize} />
    default:
      return <FaBell size={iconSize} />
  }
};

export default NotificationIcon;