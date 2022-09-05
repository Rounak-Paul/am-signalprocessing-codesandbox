import React from "react"

import Navigation from "./containers/navigation"
import Input from "./components/input"
import Output1 from "./components/output1"
import Output2 from "./components/output2"


function App() {
    const [formData, setFormData] = React.useState(
        {   
            c: 0, 
            fm: 0, 
            fc: 0 
        }
    )

    function timeline() {
        // var time = formData.fm + formData.fc
        const start = 0;
        const end = 2;
        const step =1/1000;
        const arrayLength = Math.floor(((end - start) / step)) + 1;
        const range = [...Array(arrayLength).keys()].map(x => (x * step) + start);
        // console.log(range)
        return range
    }

    const timeArr = timeline()
    var cosfmArr = timeArr.map(t => Math.cos(2*Math.PI*formData.fm*t))
    var cosfcArr = timeArr.map(t => Math.cos(2*Math.PI*formData.fc*t))
    var am = timeArr.map((t) => {
            // console.log(formData.c)
            return (formData.c*1 + Math.cos(2*Math.PI*formData.fm*t))*(Math.cos(2*Math.PI*formData.fc*t))
        })
    var amEnvUp = timeArr.map((t) => {
            // console.log(formData.c)
            return (formData.c*1 + Math.cos(2*Math.PI*formData.fm*t))
    })
    var amEnvDown = timeArr.map((t) => {
            // console.log(formData.c)
            return -(formData.c*1 + Math.cos(2*Math.PI*formData.fm*t))
    })
    
    return(
        <>
            <Navigation />
            <Input 
                formData={formData}
                setFormData={setFormData}
            />
            <Output1 
                timeArr={timeArr}
                cosfmArr={cosfmArr}
                cosfcArr={cosfcArr}
            />
            <Output2 
                am={am}
                amEnvUp={amEnvUp}
                amEnvDown={amEnvDown}
                timeArr={timeArr}
                
            />
            
        </>
    )
}

export default App