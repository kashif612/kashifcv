import React from 'react'

const prices = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [header] = React.useState({
        mainHeader: 'Knowledge & Language',
        subHeader: 'Language & Framework',
        text: 'below are the detail in which framework i am comfortable in doing the development of website'
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state] = React.useState([
        {id: 1, heading:'Front-End', msg1:'JavaScript', msg2:'React',msg3:'Html',msg4:'Css'},
  {id: 2, heading:'Back_End', msg1:'JavaScript', msg2:'C++',msg3:'Node',msg4:'Express'},
    {id: 3, heading:'DATA BASE & FW', msg1:'MongoDb', msg2:'SQL',msg3:'VUE',msg4:'REACT'},
        ]);
    return (
        <div className = "Knowledge">
        <div className ="conatiner">
                        <div className="common">
                <h3 className="heading">{header.mainHeader}</h3>
                <h1 className ="Mainheading">{header.subHeader}</h1>
                <p className="MainText">{header.text}</p>
                <div className="commonBorder">

                </div>
                 </div>
        <div className ="row">
  {state.map(prices=>(
                <div className ="col-4" key={prices.id}>
                <div className="knowledges">
                    <div className ="Front">{prices.heading}</div>
                    <ul>
                                            <li>{prices.msg1}</li>
                        <li>{prices.msg2}</li>

                        <li>{prices.msg3}</li>
                        <li>{prices.msg4}</li>
                    </ul>
                </div>
            </div>
  ))}
        </div>
        </div>  
        </div>
    )
}
export default prices;