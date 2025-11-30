// import '../component/contact&about.css'
import '../styles/contact&about.css'


function Contact () {

    return (
        <>
        <main>  
<div class="contact-container">
  <h2>Contact</h2>
<section class="contact">

  <form  method="post">

    <section class="section">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" required/>
    </section>

    <section class="section">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" required/>
    </section>

    <section class="section">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="6" placeholder="Type your message here..." required></textarea>
    </section>

    <section class="button-section">
      <button type="reset" class="send-btn" >Send</button>
    </section>

  </form>

</section>
</div>
</main>
</>
    )
}

export default Contact;