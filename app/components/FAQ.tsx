import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const items = [
    {
      title: "What is Freaky Chimp?",
      content:
        "Freaky Chimp is an all-in-one event management platform that helps users plan, book, and manage events seamlessly. From discovering vendors to handling bookings and payments, everything is managed in one place.",
    },
    {
      title: "What types of events can I book on Freaky Chimp?",
      content:
        "You can book a wide range of events including weddings, birthday parties, corporate events, concerts, private gatherings, and more, along with all the required services.",
    },
    {
      title: "How do I book an event on Freaky Chimp?",
      content:
        "Simply create an account, choose your event type, select services or vendors, set your preferences, and complete the booking using our secure payment system.",
    },

    {
      title: "Can I customize services for my event?",
      content:
        "Absolutely. Freaky Chimp allows you to fully customize your event by selecting vendors, services, schedules, and budgets based on your specific needs.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 my-8 ">
      <div className="flex flex-col px-10 py-20 max-sm:py-8   max-sm:text-center  ">
        <h1 className=" text-4xl max-sm:text-2xl   font-bold ">
          General
          <br className="max-sm:hidden" />
          Questions
        </h1>

        <p className="mt-4 ">Common queries about our services.</p>
      </div>

      <div className="w-full flex max-sm:mb-8 ">
        <Accordion type="single" collapsible className="space-y-2 p-4 w-full">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="rounded-xl border  py-1 px-5 shadow-md"
            >
              <AccordionTrigger>{item.title}</AccordionTrigger>

              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
