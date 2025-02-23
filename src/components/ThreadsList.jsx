import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadsList({ threads }) {
  return (
    <div className="threads-list">
      {
         threads.map((thread) => (
           <ThreadItem key={thread.id} {...thread} />
         ))
      }
    </div>
  );
}

// TalksList.propTypes = {
//   talks: PropTypes.arrayOf(PropTypes.shape(talkItemShape)).isRequired,
//   like: PropTypes.func.isRequired,
// };

export default ThreadsList;
