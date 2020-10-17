import React, {useEffect} from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddEvent.css';
const AddEvent = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [submitMsg, setSubmitMsg] = useState('');
  const onSubmit = data => {
      fetch('https://immense-gorge-54834.herokuapp.com/addevent',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
          setSubmitMsg('Event setted Successfully!')
          document.getElementById('title').value = '';
          document.getElementById('eventDate').value = '';
          document.getElementById('description').value = '';
          document.getElementById('banner').value = '';
      })
  }
    return (
        <div className="admin-event-area">
            <h4>Add event</h4>
            <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
                <div className="add-event-area">
                <div className="row">
                    <div className="col-md-6">
                        <label>Event title</label>
                        <input id="title" name="title" type="text" className="form-control" ref={register({ required: true })} placeholder="Enter title"/>
                        {errors.title && <span>Title is required</span>}
                    </div>    
                    <div className="col-md-6">
                        <label>Event Date</label>
                        <input id="eventDate" type="date"  name="eventDate" className="form-control" ref={register({ required: true })} />
                        {errors.eventDate && <span>Event Date is required</span>}    
                    </div>    
                    <div className="col-md-6">
                        <label>Description</label>
                        <textarea id="description" name="description" placeholder="Enter Description" className="form-control" ref={register({ required: true })}></textarea>
                        {errors.description && <span>Event Description is required</span>}    
                    </div>    
                    <div className="col-md-6">
                        <label>Banner</label>
                        <input id="banner" placeholder="Upload image" type="file" className="form-control" ref={register({ required: true })} />
                        {errors.banner && <span>Event Banner is required</span>}    
                    </div>    
                </div>
                {submitMsg && <h1 className="text-success">{submitMsg}</h1>}
            </div>
            <input className="btn btn-primary" type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default AddEvent;