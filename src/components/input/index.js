import React from "react"
import "./style.css"

function Input(props) {

  function handleChange(event) {
    props.setFormData(prevFormData => {
    // console.log(prevFormData)
    const {name, value} = event.target
        return {
            ...prevFormData,
            [name]: value
        }
        
    })
  }
  return (
    <form>
      <div>
        <label>c </label>
        <input
                  type="number"
                  placeholder= "0"
                  onChange={handleChange}
                  name="c"
                  value={props.formData.firstName}
              />
      </div>
      <div>
        <label>fm </label>
        <input
                  type="number"
                  placeholder= "0"
                  onChange={handleChange}
                  name="fm"
                  value={props.formData.firstName}
              />
      </div>
      <div>
        <label>fc </label>
        <input
                  type="number"
                  placeholder= "0"
                  onChange={handleChange}
                  name="fc"
                  value={props.formData.firstName}
              />
      </div>
    </form>
  )
}

export default Input