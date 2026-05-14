import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const
  FAQ = () => {
    const items = [
      {
        title: "What services are available on Freaky Chimp?",
        content:
          "Freaky Chimp offers catering, decoration, photography, videography, entertainment, venue booking, and complete event planning services for every occasion.",
      },
      {
        title: "Why should I choose Freaky Chimp?",
        content:
          "We make event planning simple with verified vendors, seamless booking, and a real-time dashboard trusted by 3,000+ customers.",
      },
      {
        title: "How can I contact support?",
        content:
          "You can contact our support team via email, phone, or the Contact Us page. Support is available daily from 10:00 AM to 8:00 PM.",
      },
    ];

    return (
      <div className="max-w-6xl my-20 mx-auto grid grid-cols-1 md:grid-cols-2  ">
        <div className="flex flex-col px-10 py-8 max-sm:py-8   max-sm:text-center  ">
          <h1 className=" text-4xl max-sm:text-2xl   font-semibold ">
            FAQs
          </h1>

          <p className="mt-4 ">
            Plan unforgettable events effortlessly with trusted vendors, seamless bookings, and dedicated support.
          </p>
        </div>


        <div className="w-full flex max-sm:mb-8 ">
          <Accordion
            type="single"
            collapsible
            className="space-y-2 p-4 w-full"

          >
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border py-1 px-5"
              >
                <AccordionTrigger accordionCount={index + 1} >
                  {item.title}
                </AccordionTrigger>

                <AccordionContent>
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    );
  };

export default FAQ;
