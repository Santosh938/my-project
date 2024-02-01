import React, { useState } from 'react'
import Headers from './Headers'
import DashboardNav from './Dashboard-Nav'
import './css/AddAsana.css'

const AddAsana = () => {
    const [stepData, setStepdata] = useState([{
        step : "",
        img_url : "",
    }])

    const inputChange = (index, e) => {
        const newData = [...stepData];
        newData[index][e.target.name] = e.target.value;
        setStepdata(newData);
    }

    const addStep = () => {
        setStepdata([...stepData, {step: "", img_url: ""}])
    }

    return (
        <>
        <Headers />
        <DashboardNav />
        <div className='container'>
            <h4>Add Asana Form</h4>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Name of the Asana : </label>
                    <input type='text' id='name' placeholder='Enter the name of the asana' />
                </div>
                <div className='form-group'>
                    <label htmlFor='image'>Image of the Asana : </label>
                    <input type='text' id='image' placeholder='Enter the image url of the asana' />
                </div>
                <div className='form-group'>
                    <label>Steps</label>
                    {
                        stepData.map((data, index) => {
                            return(
                            <div className='step' key={index}>
                                <div className='form-group'>
                                    <label>Step {index + 1} :</label>
                                    <input type='text' name='step' value={data.step} onChange={(e) => inputChange(index, e)} placeholder={`Step ${index + 1}`}/>
                                </div>
                                <div className='form-group'>
                                    <label>Image {index + 1} :</label>
                                    <input type='text' name='imageUrl' value={data.img_url} onChange={(e) => inputChange(index, e)} placeholder={`Image URL ${index + 1}`}/>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
                <button className='add-step' type='button' onClick={addStep}>Add one more step</button>
            </form>
            <div className='buttons'>
                <button className='dashboard'>Dashboard page</button>
                <button className='add-asana'>Add Asana</button>
            </div>
        </div>
        </>
    )
}

export default AddAsana
