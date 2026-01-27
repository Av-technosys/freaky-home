import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  MessageCircle,
  HelpCircle,
  Clock,
  Shield,
} from "lucide-react";
import Link from "next/link";

const FAQ = () => {
  const items = [
    {
      title: "What services do you offer?",
      content:
      "We provide a full range of event solutions, including birthdays, weddings, corporate events, concerts, baby showers, décor, party planning, vendor management, and more.",
      icon: <MessageCircle className="w-5 h-5" />,
    },
    {
      title: "Why choose FreakyChimp?",
      content:
        "FreakyChimp delivers high-quality services with an expert team, innovative solutions, and a commitment to making every event joyful and stress-free. ",
      icon: <HelpCircle className="w-5 h-5" />,
    },
    {
      title: "How can I contact support?",
      content:
        "You can easily reach us through email, phone, or our website form for quick assistance.",
      icon: <Clock className="w-5 h-5" />,
    }
  ];

  return (
    <section className="w-full py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-[#191B21] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
           Get quick answers to common questions about our services, bookings, and event planning solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - FAQ Items */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline group [&>svg]:hidden">
                    <div className="flex items-center gap-4 w-full">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#191B21]/5 flex items-center justify-center text-[#191B21]">
                        {item.icon}
                      </div>

                      <span className="font-poppins font-semibold text-lg text-[#191B21] text-left group-hover:text-[#191B21]/80 transition-colors">
                        {item.title}
                      </span>

                      {/* YOUR custom chevron */}
                      <ChevronDown className="ml-auto w-5 h-5 text-gray-400 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="font-poppins text-gray-600 px-6 pb-5 pt-2 border-t border-gray-100">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column - Contact Card */}
          <div className=" bg-[#3A3A3A] rounded-2xl p-8 text-white">
            <div className="space-y-6">
              <h3 className="font-poppins font-bold text-2xl">
                Need More Help?
              </h3>

              <p className="text-gray-300">
                Our support team is available 24/7 to help you with any
                questions about our platform.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFC107]/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#FFC107]" />
                  </div>
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p className="text-sm text-gray-400">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFC107]/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#FFC107]" />
                  </div>
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-gray-400">
                      support@freakychimp.com
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/contact-us">
                <Button className="w-full bg-white text-[#191B21] font-semibold text-lg py-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 mt-6">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
