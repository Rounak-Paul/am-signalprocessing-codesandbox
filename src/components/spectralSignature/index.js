import Plot from 'react-plotly.js';

function SpectralSignature() {
    let plotArray = [2, 6, 3,5,8,3,4,5,5,2,10,4,5,12,7]
    return (
    <Plot
        data={[
        {
        y: plotArray,
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: 'red'},
        }
    ]}
        layout={ {width: 600, height: 400, title: 'Spectral Signature'} }
    />
    );
}

export default SpectralSignature