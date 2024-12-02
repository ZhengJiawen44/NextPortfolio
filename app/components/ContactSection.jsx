import React from "react";
import Form from "next/form";
import FormRow from "@/app/components/FormRow";
import TextArea from "@/app/components/TextArea";
const ContactSection = () => {
  return (
    <>
      <h1 id="Contact" className="font-extrabold text-primaryMedium mb-[9rem] ">
        Contact me
      </h1>
      <Form action="/" className="grid grid-cols-2 gap-[4rem]">
        <FormRow type="text" name="name" />
        <FormRow type="email" name="email" />
        <TextArea name="message" />
        <button
          className="bg-cyan100 text-black text-medium col-span-2
        rounded-xl w-[100%] h-[3rem] mb-[20rem]"
        >
          submit
        </button>
      </Form>
    </>
  );
};

export default ContactSection;
