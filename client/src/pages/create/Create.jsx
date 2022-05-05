import './create.css'
import post2 from "../../assets/img/post2.jpg"
import { useState } from 'react'
import axios from "axios";
export default function Create() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // setError(false)
        // try {
        //   const res = await axios.post("/posts", {
        //     title, desc, file
        //   })
        // } catch (err) {
        //   setError(true)
        // }
      }
    return (
        <div className='create'>
            <img src={post2} alt="" className="createImg" />
            <form onSubmit={handleSubmit} className="createForm">
                <div className="createFormGroup">
                    <label htmlFor="fileInput">
                        <i className=" createIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" placeholder='Title' className="createInput" autoFocus={true} />
                </div>
                <div className="createFormGroup">
                    <textarea placeholder='Tell your story...' type="text" className='createInput createText'></textarea>
                    <button type="submit" className="createSubmit">Publish</button>
                </div>
            </form>

        </div>
    )
}
