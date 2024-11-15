

const ContactForm = () => {
  return (
    <div className='form-box'>
      <h2>Get Online Consultation</h2>
      <form>
        <div className='form-group'>
          <label for='name'>Full name</label>
          <input type='text' id='name' name='name' required />
        </div>
        <div className='form-group'>
          <label for='email'>Email adress</label>
          <input type='email' id='email' name='email' required />
        </div>
        <div className='form-group'>
          <label for='specialist'>Specialist</label>
          <select id='droplist' name='droplist'>
            <option value=''>Select a specialist</option>
            <option value='general'>General</option>
            <option value='nurse'>Nurse</option>
            <option value='doctor'>Doctor</option>
            <option value='Physiotherapist'>Physioterapist</option>
            <option value='psychiatrist'>Psychiatrist</option>
          </select>
        </div>
        <button className="btn btn-l" type='submit'>Make an appoinment</button>
      </form>
    
    
    
    </div>
  )
}

export default ContactForm