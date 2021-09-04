import React,{useState} from "react";
import Tabcontent from "./Tabcontent";
import TabLink from "./TabLink";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
function FleetTab() {
const [tabno, setTabno] = useState(2);
  function showFleet(event,fleetName){

      let i, tabcontent,tablinks;
      tabcontent=document.getElementsByClassName("tabContent");
      for(i=0;i<tabcontent.length;i++){
          tabcontent[i].style.display="none";
      }

      tablinks=document.getElementsByClassName("fleetTab-link");
      for(i=0; i<tablinks.length;i++){
          tablinks[i].firstChild.className=tablinks[i].firstChild.className.replace("active");
          tablinks[i].childNodes[2].style.display="none";
      
        }
      document.getElementById(fleetName).style.display="flex";
      event.currentTarget.firstChild.className += " active";
      event.currentTarget.childNodes[2].style.display="block"
    //   event.currentTarget.firstChild.childNodes[1].style.transform="translateX(1px)"
    
  }
//   document.getElementById("defaultOpen").onclick=function(e){showFleet(e,"v1")};

function buttonClick(e){
  let i, tabcontent,targetElm;
  tabcontent=document.getElementsByClassName("tabContent");
  for(i=0;i<tabcontent.length;i++){
      if(tabcontent[i].style.display!="none"){

        if(e.currentTarget.className=="prev-button"){
          console.log(i)
          console.log("tabno",tabno)

          if(i==0){
            setTabno(()=>{return 10})
            // targetElm=document.getElementById("tv11")
            // targetElm.scrollIntoView();
            // return document.getElementById("tv11").click()
          }else if(tabno>1){
            setTabno(()=>tabno-1)
          }
        }else if(e.currentTarget.className=="next-button"){

          if(i==9){
            setTabno(1)
          }else{
            setTabno(Number(tabno)+1)
          }
        }
        // scroll stuf
        targetElm=document.getElementById("tv"+tabno)
        targetElm.scrollIntoView();
       return document.getElementById("tv"+tabno).click()
      }
  }
 
}

  return (
    <div className="fleetTab-container">
      <div className="tab-link-icon-container">
    <div onClick={(e)=>buttonClick(e)} className="prev-button">
      <NavigateBeforeIcon />
    </div>
      <div id="scrollid" className="fleetTab tab">
        <TabLink
          icon1="/images/tabi1.svg"
          icon2="/images/tabi11.svg"
          name="Auto"
          showFleet={showFleet}
          vid="v1"

        />
        <TabLink
          icon1="/images/tabi2.svg"
          icon2="/images/tabi22.svg"
          name="Bike"
          showFleet={showFleet}
          vid="v2"

        />
        <TabLink
          icon1="/images/tabi3.svg"
          icon2="/images/tabi33.svg"
          name="Share"
          showFleet={showFleet}
          vid="v3"

        />
        <TabLink
          icon1="/images/tabi4.svg"
          icon2="/images/tabi44.svg"
          name="Micro"
          showFleet={showFleet}
          vid="v4"

        />
        <TabLink
          icon1="/images/tabi5.svg"
          icon2="/images/tabi55.svg"
          name="Mini"
          showFleet={showFleet}
          vid="v5"

        />
        <TabLink
          icon1="/images/tabi6.svg"
          icon2="/images/tabi66.svg"
          name="Prime Sedan"
          showFleet={showFleet}
          vid="v6"
        />
        <TabLink
          icon1="/images/tabi7.svg"
          icon2="/images/tabi77.svg"
          name="Prime Play"
          showFleet={showFleet}
          vid="v7"
        />
        <TabLink
          icon1="/images/tabi8.svg"
          icon2="/images/tabi88.svg"
          name="Prime SUV"
          showFleet={showFleet}
          vid="v8"
        />
        <TabLink
          icon1="/images/tabi9.svg"
          icon2="/images/tabi99.svg"
          name="LUX"
          showFleet={showFleet}
          vid="v9"
        />
        <TabLink
          icon1="/images/tabi10.svg"
          icon2="/images/tabi1010.svg"
          name="E-Rick"
          showFleet={showFleet}
          vid="v10"
        />
        <TabLink
          icon1="/images/tabi111.svg"
          icon2="/images/tabi1111.svg"
          name="Kaali Peeli "
          showFleet={showFleet}
          vid="v11"
        />
      </div>
      <div onClick={(e)=>buttonClick(e)} className="next-button">
      <NavigateNextIcon  />
    </div>
      </div>
   <div className="tab-content-container-main">
   <div onClick={(e)=>buttonClick(e)} className="prev-button">
      <NavigateBeforeIcon style={{fontSize:"2.6rem"}} />
    </div>
      <div className="fleetTab-content-container">
        <Tabcontent
          vid="v1"
          image="/images/v1.png"
          title="Auto"
          headline="Get an auto at your doorstep"
          info="Hate waiting in the snarling traffic each day? Not anymore as with Ola Bike you can now reduce your travel time by at least 50%. Simply book a bike with a tap of a button and ride away within minutes and all this at the most affordable rates in town!"
        />
        <Tabcontent
          vid="v2"
          image="/images/v2.png"
          title="Bike"
          headline="On Time, Every time."
          info="Hate waiting in the snarling traffic each day? Not anymore as with Ola Bike you can now reduce your travel time by at least 50%. Simply book a bike with a tap of a button and ride away within minutes and all this at the most affordable rates in town."
        />
        <Tabcontent
          vid="v3"
          image="/images/v3.png"
          title="Share"
          headline="Eco-friendly rides at pocket-friendly rate"
          info="Hate waiting in the snarling traffic each day? Not anymore as with Ola Bike you can now reduce your travel time by at least 50%. Simply book a bike with a tap of a button and ride away within minutes and all this at the most affordable rates in town."
        />
        <Tabcontent
          vid="v4"
          image="/images/v4.png"
          title="Micro"
          headline="Small fare for short rides."
          info="Hate waiting in the snarling traffic each day? Not anymore as with Ola Bike you can now reduce your travel time by at least 50%. Simply book a bike with a tap of a button and ride away within minutes and all this at the most affordable rates in town."
        />
        <Tabcontent
          vid="v5"
          image="/images/v5.png"
          title="Mini"
          headline="Small fare for short rides."
          info="Hate waiting in the snarling traffic each day? Not anymore as with Ola Bike you can now reduce your travel time by at least 50%. Simply book a bike with a tap of a button and ride away within minutes and all this at the most affordable rates in town."
        />
        <Tabcontent
          vid="v6"
          image="/images/v6.png"
          title="Prime Sedan"
          headline="Small fare for short rides."
          info="Hate waiting in the snarling traffic each day? Not anymore as with Ola Bike you can now reduce your travel time by at least 50%. Simply book a bike with a tap of a button and ride away within minutes and all this at the most affordable rates in town."
        />
        <Tabcontent
          vid="v7"
          image="/images/v7.png"
          title="Prime Play"
          headline="Small fare for short rides."
          info="Hate waiting in the snarling traffic each day? Not anymore as with Ola Bike you can now reduce your travel time by at least 50%. Simply book a bike with a tap of a button and ride away within minutes and all this at the most affordable rates in town."
        />
        <Tabcontent
          vid="v8"
          image="/images/v8.png"
          title="Prime SUV"
          headline="Small fare for short rides."
          info="Hate waiting in the snarling traffic each day? Not anymore as with Ola Bike you can now reduce your travel time by at least 50%. Simply book a bike with a tap of a button and ride away within minutes and all this at the most affordable rates in town."
        />
        <Tabcontent
          vid="v9"
          image="/images/v9.png"
          title="LUX"
          headline="Small fare for short rides."
          info="Hate waiting in the snarling traffic each day? Not anymore as with Ola Bike you can now reduce your travel time by at least 50%. Simply book a bike with a tap of a button and ride away within minutes and all this at the most affordable rates in town."
        />
        <Tabcontent
          vid="v10"
          image="/images/v10.png"
          title="E-Rick"
          headline="Small fare for short rides."
          info="Hate waiting in the snarling traffic each day? Not anymore as with Ola Bike you can now reduce your travel time by at least 50%. Simply book a bike with a tap of a button and ride away within minutes and all this at the most affordable rates in town."
        />
        <Tabcontent
          vid="v11"
          image="/images/v11.png"
          title="Kaali Peeli"
          headline="Small fare for short rides."
          info="Hate waiting in the snarling traffic each day? Not anymore as with Ola Bike you can now reduce your travel time by at least 50%. Simply book a bike with a tap of a button and ride away within minutes and all this at the most affordable rates in town."
        />
   </div>
   <div onClick={(e)=>buttonClick(e)} className="next-button">
      <NavigateNextIcon style={{fontSize:"2.6rem"}} />
    </div>
    
      </div>
    </div>
  );
}

export default FleetTab;
