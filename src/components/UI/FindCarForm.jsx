
import React from 'react'
import '../../Styles/find-car-form.css'
import { Form, FormGroup } from 'reactstrap'

const FindCarForm = () => {
  return <Form className='form'>
      <div className='d-flex align-items-center justify-content-between flex-wrap'>
        <FormGroup className="form_group">
          <input type="text" placeholder='From address' required />
        </FormGroup>

        <FormGroup className="form_group">
          <input type="text" placeholder='To address' required />
        </FormGroup>

        <FormGroup className="form_group">
          <input type="date" className='journey_date' required />
        </FormGroup>

        <FormGroup className="form_group">
          <input className='journey_time' type="time" required />
        </FormGroup>

        <FormGroup className="select_group">
          <select >
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form_group">
          <button className='btn find_car-btn'>Find Car</button>
        </FormGroup>

      </div>
    </Form>
}

export default FindCarForm