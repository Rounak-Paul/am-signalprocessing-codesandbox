import Plot from 'react-plotly.js'

function Output1(props) {

    return (
        <>
            <Plot
                data={[
                {
                x: props.timeArr,
                y: props.cosfmArr,
                type: 'scatter',
                mode: 'lines',
                marker: {color: 'cyan'},
                }
            ]}
                layout={ {width: 600, height: 400, title: 'MESSAGE'} }
            />

            <Plot
                data={[
                {
                x: props.timeArr,
                y: props.cosfcArr,
                type: 'scatter',
                mode: 'lines',
                marker: {color: 'red'},
                }
            ]}
                layout={ {width: 600, height: 400, title: 'CARRIER'} }
            />
        </>
        )
}
export default Output1