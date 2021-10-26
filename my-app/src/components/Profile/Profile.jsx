import React, { Profiler } from 'react';
import s from './Profile.module.css';
import MyPost from './MyPost/MyPosts';
const Profile = () => {
    return (
        <div >
        <div>
      <img className={s.contentImg} src="https://i.pinimg.com/originals/44/1d/32/441d32aa5624ef0011d57ab26798f215.jpg" alt="LogoCont" />
      </div>
      <div>
      <img className={s.pug} src="https://i.pinimg.com/originals/e2/cc/8f/e2cc8fabf8a293e3bedf36673f47175b.png" alt="pug" />
      </div>
      <MyPost />
      </div>
    )
}
export default Profile