export function ContactPage() {
  return (
    <>
      <h1 className="tittle">{"Contact Me!"}</h1>
      <div className="contact-box">
        <form action="https://formspree.io/f/xdknlqzj" method="POST">
          <input
            type="text"
            className="field"
            placeholder="Full Name"
            required
            name="name"
          />
          <input
            type="email"
            className="field"
            placeholder="E-mail Address"
            required
            name="email"
          />
          <textarea
            cols={30}
            rows={10}
            className="field"
            placeholder="Your Menssage"
            required
            name="message"
          />
          <input type="submit" className="btn" value="Send Menssage" />
        </form>
      </div>
    </>
  )
}
