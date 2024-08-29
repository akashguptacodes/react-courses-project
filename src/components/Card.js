import React, {useState} from 'react';
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';



export const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    const[readmore,setReadmore] = useState(false);

    const descrip = readmore ? (course.description) : (course.description.substr(0,100) + " ...");
    
    function readmoreHandler() {
      setReadmore(!readmore);
    }


    function clickHandler() {
      if(likedCourses.includes(course.id)){
        //pehle se like tha
        setLikedCourses((prev) => prev.filter((cid) => (cid!==course.id)));
        toast.warning("Like removed");
      }
      else{
        //pehle se like nahi tha
        //insert karna hai
        if(likedCourses.length===0){
          //empty hai
          setLikedCourses([course.id]);
        }
        else{
          //non-empty hai
          setLikedCourses((prev) => [...prev,course.id]);

        }
        toast.success("Liked Successfully");

      }
    }



  return (
    <div className='card'>
        <div className="img-div">
            <img src={course.image.url} className='images'></img>
          <div className="like-div">
              <button className='like' onClick={clickHandler}>
                   {
                    likedCourses.includes(course.id) ? (<FcLike fontSize="1.5rem" className = "like-icon"/>) : (<FcLikePlaceholder fontSize="1.5rem" className = "like-icon"/>)
                   }
              </button>
          </div>
        </div>
        <div className="written-content">
          <p className='title'>{course.title}</p>
          <p>
            {descrip}
            <span onClick={readmoreHandler} className='read-more'> {readmore ? "Show Less" : "Read More"}</span>
          </p>
        </div>
        
    </div>
    
  )
}

export default Card;