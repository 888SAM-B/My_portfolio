import React from 'react'

const contact = () => {
  return (
    <>
      <h2>Contact</h2>
      <div className="contact-containre">
        <form action="" >
          <div className="form">
          <div className="one">
            <div className="contact-block">
              <label htmlFor="cname">Name : </label>
              <input type="text" name="cname" id="cname" />
            </div>
            <div className="contact-block">
              <label htmlFor="cmail">Mail  &nbsp; : </label>
              <input type="mail" name="cmail" id="cmail" />
            </div>
            
          </div>
          <div className="two">
            <div className="contact-block">
              <label htmlFor="comments">Comments : </label>
              <textarea name="comments" id="comments" />
            </div>
          </div>
          </div>
          <input type="submit" value="Submit" className='submit-btn' />
        </form>

      </div>
    </>
  )
}
export default contact