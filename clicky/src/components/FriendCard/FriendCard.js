import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
    <div className="card">
        <img alt={props.name} src={props.image} />
        <span onClick={() => props.removeFriend(props.id)} className="remove">Click</span>
    </div>
)

export default FriendCard;