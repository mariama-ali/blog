import "./post.css"
import post3 from "../../assets/img/post3.jpg"
export default function Post() {
    return (
        <div className="post">
           <img src={post3} alt="" className="postImg" />
           <div className="postInfo">
               <div className="postCats">
                   <span className="postCat">Music</span>
                   <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet. 
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>      
            <p className="postDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Odit eveniet quos inventore quod enim ad illo quasi perspiciatis nemo doloremque dicta, 
                provident alias molestiae vero consequuntur nobis porro rerum ut?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Odit eveniet quos inventore quod enim ad illo quasi perspiciatis nemo doloremque dicta, 
                provident alias molestiae vero consequuntur nobis porro rerum ut?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Odit eveniet quos inventore quod enim ad illo quasi perspiciatis nemo doloremque dicta, 
                provident alias molestiae vero consequuntur nobis porro rerum ut?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Odit eveniet quos inventore quod enim ad illo quasi perspiciatis nemo doloremque dicta, 
                provident alias molestiae vero consequuntur nobis porro rerum ut?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Odit eveniet quos inventore quod enim ad illo quasi perspiciatis nemo doloremque dicta, 
                provident alias molestiae vero consequuntur nobis porro rerum ut?

            </p>
        </div>
    )
}
