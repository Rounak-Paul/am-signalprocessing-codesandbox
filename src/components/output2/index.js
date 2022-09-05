import Plot from 'react-plotly.js'

function Output2(props) {

    return(
        <Plot
                data={[
                    {
                    x: props.timeArr,
                    y: props.amEnvUp,
                    type: 'scatter',
                    mode: 'lines',
                    marker: {color: 'cyan'},
                    name: "MESSAGE"
                },
                
                {
                    x: props.timeArr,
                    y: props.am,
                    type: 'scatter',
                    mode: 'lines',
                    marker: {color: 'red'},
                    name: "CARRIER"
                },
                
                {
                    x: props.timeArr,
                    y: props.amEnvDown,
                    type: 'scatter',
                    mode: 'lines',
                    marker: {color: 'cyan'},
                    name: "MESSAGE"
                }
            ]}
                layout={ {width: 600, height: 400, title: 'AM'} }
            />
    )
}

export default Output2