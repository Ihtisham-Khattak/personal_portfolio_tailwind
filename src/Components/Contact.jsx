import React from "react";

function Contact() {

  function handleEvent (e) {
    e.preventDefault();

  }
  return (
    <div
      name="contact"
      className="w-full h-screen items-center p-4 flex justify-center bg-[#1e293b]  "
    >
      <form action="" className="flex flex-col max-w-[1000px] w-full" onSubmit={handleEvent}>
        <div className="pb-8">
          <p className=" text-4xl text-center font-bold border-b-4 inline border-pink-700 items-center justify-center text-white" >Contact</p>
        </div>

        <input name='name' type="text" placeholder="Name" className="bg-[#ccd6f6] p-1" />
        <input name='email'type="email" placeholder="Email" className="bg-[#ccd6f6] my-4 p-1"/>
        <textarea name="message" cols='30' rows='5' className="bg-[#ccd6f6] rounded-sm p-1" placeholder="Message" />
        <button type="submit" className="text-base font-bold text-white border-4 hover:bg-pink-600 hover:border-pink-600 px-4 py-1 my-2 flex items-center mx-auto">Let's Collaborates</button>

      </form>
    </div>
  );
}

export default Contact;
