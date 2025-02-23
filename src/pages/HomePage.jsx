import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action'
import ThreadsList from '../components/ThreadsList';

const HomePage = () => {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states); 
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);
  
  const threadList = threads.map((thread) => ({
    ...thread,
    // user: users.find((user) => user.id === talk.user),
    // authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <ThreadsList threads={threadList} />
    </section>
  )
}

export default HomePage