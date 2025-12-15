import React from 'react'

const contact = () => {
  return (
    <>
    <h2>Contact</h2>
    <div className="contact-containre">
    <form action="">
        <div className="contact-block">
        <label htmlFor="cname">Name : </label>
        <input type="text" name="cname" id="cname" />
        </div>
        <div className="contact-block">
        <label htmlFor="cmail">Mail : </label>
        <input type="mail" name="cmail" id="cmail" />
        </div>
        <div className="contact-block">
        <label htmlFor="comments">Comments : </label>
        <textarea  name="comments" id="comments" />
        </div>
        <br />
        <input type="submit" value="Submit" />
    </form>
    <div className="ids">
        <a href="mailto:bsam53888@gmail.com">Mail</a>
        <a href="http://www.linkedin.com/in/samb19">Linked In</a>
    </div>
    </div>
    </>
  )
}
export default contact