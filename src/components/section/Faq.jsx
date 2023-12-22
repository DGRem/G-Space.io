import { useState } from 'react';

const Faq = () => {
  const faqs = [
    {
      question: 'What types of games are available at the arcade?',
      answer: 'Our arcade offers a variety of games, including classic arcade games, modern video games, and multiplayer experiences.'
    },
    {
      question: 'How can I rent a gaming hub?',
      answer: 'To rent a gaming hub, visit our front desk or book online through our website. Choose your preferred time and date for the ultimate gaming experience.'
    },
    {
      question: 'Are there age restrictions for the arcade?',
      answer: 'The arcade is open to all ages. However, some games may have age restrictions, and parental guidance is advised for younger players.'
    },
    {
      question: "Operating Hours and Days: When We're Available to Serve You?",
      answer: "Monday to Sunday: Our services are available from 10AM to 12MN.",
    },
    {
      question: 'Do you offer group discounts for gaming hub rentals?',
      answer: 'Yes, we offer group discounts for gaming hub rentals. Contact our customer service for more information on group rates and special packages.'
    },
    {
      question: "Do you offer exclusive access to limited-edition game content?",
      answer: "Yes, we collaborate with game developers to provide exclusive access to limited-edition game content or early releases. Stay updated on our latest offerings!."
    },
    {
      question: "Can I book the gaming rooms for group events or parties?",
      answer: "Absolutely! Our spacious gaming rooms are perfect for hosting group events, birthday parties, or gaming gatherings. Contact us for special group booking options."
    },
    {
      question: "Are there themed gaming rooms available?",
      answer: "Yes, we offer an array of themed rooms inspired by popular games or eras. Immerse yourself in themed environments designed to elevate your gaming experience."
    },
    {
      question: "Can I bring my own gaming equipment?",
      answer: "Of course! Feel free to bring your gaming gear. However, we also provide high-quality gaming equipment for your convenience."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <section id="faq">
        <div className='flex justify-center py-20'>
            <div className="container">
                <h1 className="text-4xl font-BrunoSC text-green mb-6 drop-shadow-lg">FAQ's</h1>
                {faqs.map((faq, index) => (
                    <div className=''>
                        <div key={index} className="font-Titilium border-gray border-[1px] rounded p-4 mb-4">
                        <div
                            className="flex justify-between"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3>{faq.question}</h3>
                            <span className="">{activeIndex === index ? '▼' : '▼'}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="">
                                <p className="italic text-green font-Titilium">{faq.answer}</p>
                            </div>
                        )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
  );
};

export default Faq;