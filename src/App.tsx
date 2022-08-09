import React, {useState} from 'react';
import './App.css';
import {StencilInput} from "component-library-react";
import img1Src from "./assets/1.jpg";
import img2Src from "./assets/2.jpg";
import img3Src from "./assets/3.jpg";
import img4Src from "./assets/4.jpg";


function App() {
  const [eventDetail, setEventDetail] = useState({value: "", isValid: false})

  const handleUserInput = (event:CustomEvent<{value:string, isValid:boolean}>) => {
    setEventDetail({...event.detail});
  };

  return (
    <div className="App">
      <div className="App__fixed-section">
        <div className="App__header">Implementation of custom input component</div>

        <StencilInput label={"Webshop URL"} type={"url"} size={"medium"} placeholder={"Type URL"}
                      onUserInput={(event)=> handleUserInput(event)}/>

        <div className="App__text">Event emitted on <code>userInput</code> and passed to parent component:</div>
        <pre>{`
          event: {
            ...,
            detail: {
              value: "${eventDetail.value}",
              isValid: ${eventDetail.isValid}
            }
          }
          `}</pre>
        <div className="App__text">Component repository <a href={"https://github.com/AleksSido/components-kit"} target={"_blank"}>https://github.com/AleksSido/components-kit</a></div>
        <div className="App__text">App demo repository <a href={"https://github.com/AleksSido/stencil-input-app-demo"} target={"_blank"}>https://github.com/AleksSido/stencil-input-app-demo</a></div>
      </div>

      <div className="App__text App__text_u">Notes on implementation:</div>
      <div className="App__text">1. I tried to follow the implementation example given in the task, so I applied all mentioned props beside the <code>isValid</code> prop (explanation is given below). </div>
      <div className="App__text">2. Obviously the two main data props in the input component are string value in the input field (<code>value</code>) and validness of it (<code>isValid</code>). I see two options to handle them: the first, put them into parent component as state props and pass them down to input component; the second, hold them in the input component and pass them to parent component in the event handler. The both options can be applied, but for the task I prefered the second one because it is more close to incapsulated reuseable component. Also there is the third option comprised first two options: make the first option allowable and set the second option by default. But I chose the second one.</div>
      <div className="App__text">3. Event emitted on <code>userInput</code> contains data of <code>value</code> and <code>isValid</code>. They are dynamically output under the input.</div>
      <div className="App__text">4. As I tried to make independent component I added the <code>validationPattern</code> prop, but also the default validation pattern is also can be applied in the case if this prop wasn't mentioned.</div>
      <div className="App__text">5. For the simpler usage I set that none of props is required and some of them has default value.</div>
      <div className="App__text">6. The component has been implemented in React.js app according to stencil.js docs. </div>
      <div className="App__text App__text_u">The code of custom input component:</div>
      <pre>stencil-components/src/components/stencil-input/stencil-input.tsx</pre>
      <img className="App__img" src={img1Src} alt="code snippet"/>
      <img className="App__img" src={img2Src} alt="code snippet"/>
      <img className="App__img" src={img3Src} alt="code snippet"/>
      <div className="App__text App__text_u">The code of implementation of the custom input component in the parent component:</div>
      <pre>app-demo/src/App.tsx</pre>
      <img className="App__img" src={img4Src} alt="code snippet"/>
    </div>
  );
}

export default App;
