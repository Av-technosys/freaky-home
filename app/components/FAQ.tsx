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
        title: "What services do you offer?",
        content:
          "We offer a variety of services including web development, mobile app development, and IT consulting.",
      },
      {
        title: "Why to choose Freaky Chimp?",
        content:
          "We provide high-quality service, expert team members, and fast delivery.",
      },
      {
        title: "How can I contact support?",
        content:
          "You can easily reach us through email or by filling out the contact form on our website.",
      },
    ];

    return (
      <div className="max-w-6xl my-20 mx-auto grid grid-cols-1 md:grid-cols-2  ">
        <div className="flex flex-col px-10 py-8 max-sm:py-8   max-sm:text-center  ">
          <h1 className=" text-4xl max-sm:text-2xl   font-semibold ">
            FAQs
          </h1>

          <p className="mt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam a reiciendis ratione! Lorem ipsum dolor sit.
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
