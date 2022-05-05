import "./post.css"
import post3 from "../../assets/img/post3.jpg"
import { Link } from 'react-router-dom'

export default function Post({ post }) {
    return (
        <div className="post">
            <img src={post3} alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => (
                        <span className="postCat">{c.name}</span>
                    ))}
                </div>
                <Link className="link" to={`/post/${post._id}`}>
                    <span className="postTitle">
                        {post.title}
                    </span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">
                {post.desc}
            </p>
        </div>
    )
}
