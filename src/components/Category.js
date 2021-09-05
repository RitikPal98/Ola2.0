import React,{useState} from "react";
import CategoryCard from "./category/CategoryCard";
import "./category/Category.css";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

function Category() {
  const [boxid,setBoxid]=useState(4)

  
  function buttonClick(e){
    let targetElm
    targetElm=document.getElementById(boxid)
        targetElm.scrollIntoView(true);
        if(boxid==4){
          setBoxid(1)
        }else if(boxid==1){
          setBoxid(4)
        }
  }
  
  return (
    <div className="category">
    <div onClick={(e)=>buttonClick(e)} className="prev-button">
      <NavigateBeforeIcon />
    </div>
    <div className="cards-container">
        <CategoryCard bid="1" image="images/c1.svg" title="Be entertained with ola play" info="Discover movies and music on your daily ride" />
        <CategoryCard bid="2" image="images/c2.svg" title="Get yourself a Share Pass" info="Enjoy cheapest rides on the go" />
        <CategoryCard bid="3" image="images/c3.svg" title="Upgrade to Ola Select" info="Explore the benefits of Ola Select" />
        <CategoryCard bid="4" image="images/c4.svg" title="Sign up for Ola Corporate" info="Employee travel management made easy" />
    </div>
    <div onClick={(e)=>buttonClick(e)} className="next-button">
      <NavigateNextIcon />
    </div>
    </div>
  );
}

export default Category;
