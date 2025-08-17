import { useState } from "react";
import { motion } from "framer-motion";

import { EarthCanvas } from "./canvas";
import SectionWrapper from './hoc/SectionWrapper';
import { slideIn } from '@/utils/motion'
import { useGetState } from "@/hooks/useGetState";
import useGetAction from "@/hooks/useGetAction";

const Contact = () => {
  const [ loading, setLoading ] = useState(false);
  const { setContactForm, resetContactForm } = useGetAction();
  const { contactFormState } = useGetState();

  const handleGetCV = () => {
    const basePath = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_GIT_HUB_PAGES_BASE_PATH : '';
    window.open(`${basePath}/resume_pdf/Maksym_Mitusov_CV.pdf`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm({name, value });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // setLoading(true)
    // try {
    //   const res = await fetch('/api/email', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(contactFormState),
    //   });

    //   if (res.ok) {
    //     setLoading(false);
    //     resetContactForm();
    //     alert('Email sent successfully!');
    //   } else {
    //     alert('Error while sending email. Try onother time!');
    //   }
    // } catch (error) {
    //   alert('Error while sending email. Try onother time!');
    // }
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >       
        <div className="flex flex-col sm:flex-row sm:items-center">
          <p className='sectionSubText sm:mr-3 mb-3 sm:mb-0'>
            Want to get my CV?
          </p>
          <button
            onClick={ handleGetCV }
            className='bg-black-500 py-3 px-3 rounded-xl outline-none w-fit hover:scale-95 text-white font-bold shadow-md shadow-secondary'
          >
            Download it now
          </button>
        </div>

        <h3 className='sectionHeadText'>Contact me</h3>

        <form
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={contactFormState.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={contactFormState.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              maxLength={ 1500 }
              name='message'
              value={contactFormState.message}
              onChange={handleChange}
              placeholder="Share your question here!"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative w-full'
      >
        <div className='absolute inset-0 w-full h-full'>
          <EarthCanvas />
        </div>
      </motion.div>
    </div>
  )
}
  
export default SectionWrapper(Contact, "contact");