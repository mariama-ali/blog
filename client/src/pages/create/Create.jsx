import './create.css'
import post2 from "../../assets/img/post2.jpg"
export default function Create() {
  return (
    <div className='create'>
        <img src={post2} alt="" className="createImg" />
       <form action="" className="createForm">
           <div className="createFormGroup">
               <label htmlFor="fileInput">
                   <i className=" createIcon fas fa-plus"></i>
               </label>
               <input type="file" id="fileInput" style={{display: "none"}}/>
               <input type="text" placeholder='Title' className="createInput" autoFocus={true}/>
           </div>
           <div className="createFormGroup">
               <textarea placeholder='Tell your story...' type="text" className='createInput createText'></textarea>
               <button className="createSubmit">Publish</button>
           </div>
       </form>
        
    </div>
  )
}
