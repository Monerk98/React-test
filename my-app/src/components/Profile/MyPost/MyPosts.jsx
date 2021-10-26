import React, { Profiler } from 'react';
import s from '../MyPost/MyPosts.module.css';
import Post from './Posts/Post'
const MyPost = () => {
    return (
      <div>
      <ul>
        <li className = {`${s.listMain} ${s.list}`}>Main</li>
        <li className = {`${s.listMain} ${s.list}`}>About</li>
        <li className = {`${s.listMain} ${s.list}`}>Class</li>
      </ul>
      <div className = {s.posts}>
        <Post message="Hi, how are you?" hey="15"/>
        <Post message="It's my new post" hey="234"/>
        <Post message="other" hey="0"/>
      </div>
      </div>
    )
}
export default MyPost