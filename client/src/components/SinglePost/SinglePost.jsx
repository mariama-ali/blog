import post3 from "../../assets/img/post3.jpg"
import './Singlepost.css'
export default function SinglePost() {
  return (
    <div className='singlepost'>
        <div className="singlePostWrapper">
            <img src={post3} alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Mariama</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eius dolorem voluptatibus officiis illo accusamus praesentium assumenda recusandae? Q
                    uam esse praesentium repellendus numquam ab autem debitis quia exercitationem nisi, iure dolorum! 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptatem debitis, consequatur, 
                    dignissimos eius earum quos officiis sequi, culpa assumenda praesentium ad corrupti 
                    dolorum nesciunt aliquid modi nulla labore! Qui. 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam rerum deserunt, 
                    velit est maiores enim amet saepe? Ipsum recusandae corrupti sunt dicta, voluptates ullam quisquam doloremque 
                    fugit neque, quae nemo.
            </p>
        </div>
    </div>
  )
}
