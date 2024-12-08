import React from "react";
import Form from "next/form";
import FormRow from "@/components/FormRow";
import TextArea from "@/components/TextArea";
const ContactSection = () => {
  return (
    <div>
      <h1
        id="Contact"
        className=" font-extrabold mb-[6rem] text-[2.5rem] md:text-[3.5rem]"
      >
        Contact me
      </h1>

      <Form action="/" className="grid grid-cols-2 gap-[1rem] md:gap-[4rem]">
        <FormRow type="text" name="name" noValidation={true} />
        <FormRow type="email" name="email" noValidation={true} />
        <div />
        <TextArea name="message" noValidation={true} />
        <button
          className="bg-cyan100 text-black md:text-medium col-span-2
        rounded-xl w-[100%] h-[2rem] md:h-[3rem]"
        >
          submit
        </button>
      </Form>
    </div>
  );
};

export default ContactSection;
