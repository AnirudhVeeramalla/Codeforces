import React from 'react';
import './App.css';
import UserInfo from './userInfo';
import Contest from './contests';
import UserFriends from './userFriends';
import UserStatus from './userStatus';
import UserRating from './userRating';
import UserRatedList from './userRatedList';  

// let r=await fetch('https://codeforces.com/api/user.rating?handle=akhildutt81');
// let t=await r.json();
// let t=await r.json();
// let arr=t['result'];
// console.log(arr);

function App() {
  return (
    <div className="bg">
       <UserInfo/>
       <Contest/>
       <UserFriends/>
       <UserStatus/>
       <UserRating/>
       <UserRatedList/>
    </div>
  );
}

export default App;
