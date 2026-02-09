import User from "./User";

const ContactUs = () => {
  return (
    <>
      <div className='text-xl m-4 p-4'>
        <User name={"Aditi Garg"} location={"India"} />
        <form>
          <input type="text" id="name" placeholder="Enter name" className="border border-black p-2 m-2" />
          <input type="text" id="message" placeholder="Enter message" className="border border-black p-2 m-2" />
          <button className="border rounded-lg border-black bg-gray-100 p-2 m-2 cursor-pointer">Submit</button>
        </form>
      </div>
    </>
  )
}

export default ContactUs
