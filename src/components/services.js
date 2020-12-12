import React from 'react';
import {FaGithub,FaCamera,FaCircleNotch,FaApple, FaFileExcel,FaFill} from "react-icons/fa";

const services = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [header] = React.useState(
        {
        mainHeader:"EDUCATION", 
        subHeader:"My Education Qualifcations",
        text:"About my education I had done the engineering in computer science in the year of 2015 know more about me kindly go through my complete portfolio",
    });
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const[state] = React.useState([
            {
            id: 1 , 
            icon: <FaGithub/>,
             heading: 'Bacholar of engineering',
              text:'  I had done the bacholar of engineering in stream of computer science in the year 2015. From the university Jaipur National unversity',
        },
        {
            id: 2, 
            icon: <FaCamera/>,
             heading: 'Front-End Development',
              text:'I have a good knowledge about the front-end and most i commonly use the HTML, CSS, REACT and JAVASCRIPT in the development .',
        },
        {
            id: 3 , 
            icon: <FaCircleNotch/>,
             heading: 'Back-END-Devlopment',
              text:'Back-End is the intersting part of the webdesgin so for back end i preffered C++,NODE JS, and framework VUE JS, Express JS, and REACT JS.',
        },
        {
            id: 4 , 
            icon: <FaApple/>,
             heading: 'DATA-BASE',
              text:'For Data base must be secure and user-friendly acessing for that i recommend to use MongoDb and Sql.',
        },
        {
            id: 5 , 
            icon: <FaFileExcel/>,
             heading: 'Senior Secondary',
              text:'I had done the 12Th at Mahmda Inter-college which is suitauted in siwan i have done in the year of 2011',
        },
        {
            id: 6 , 
            icon: <FaFill/>,
             heading: 'Metriculation',
              text:'In the year of 2009 i have done the metriculation from siwan only and the schooling done in D.A.V Public School',
        },

    ]);
    return (
        <div className="Education">
        <div className="container">
            <div className ="services_header">
                
                <div className="common">
                <h3 className="heading">{header.mainHeader}</h3>
                <h1 className ="Mainheading">{header.subHeader}</h1>
                <p className="MainText">{header.text}</p>
                <div className="commonBorder">

                </div>
                 </div>
                <div className="row bgMain">
                {state.map(info =>(
                    <div className="col-4">
                    <div className="services_box">
                    <div className="commonIcons">{info.icon}</div>
                       <div className ="services_box-header">{info.heading}</div>

                       <div className="Services_box-p">
           {info.text}
            

                      
                    </div>
                    </div>
                </div>

                ))}
             
          
            
                

             </div>
        </div>
            
        </div>
        </div>
       
    )
}

export default services
