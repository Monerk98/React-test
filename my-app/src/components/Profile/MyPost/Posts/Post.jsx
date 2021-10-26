import React, { Profiler } from 'react';
import s from './Post.module.css';
const Post = (props) => {
 
    return (
      <div className={s.avatar}>
        <img src="https://i.pinimg.com/originals/1e/d3/0d/1ed30d98f49be532ae58c62f33677b16.jpg" alt="" />
        <p className={s.text}>{props.message}</p>
        <p>{props.hey} Likes</p>
      </div>
    )
}
export default Post