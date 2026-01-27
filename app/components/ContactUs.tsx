import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  User,
  Mail as MailIcon,
} from "lucide-react";
import ButtonBg from "@/components/ButtonBg";

export default function ContactUs() {
  return (
    <section id="contactUs" className="w-full py-16 md:py-12  md:mt-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-[45px] leading-tight text-[#191B21]">
              Let’s Connect

            </h2>
            <p className="font-poppins font-medium text-base md:text-[16px] leading-relaxed text-gray-600 max-w-lg">
              Get in touch with our team for questions, support, or to plan your next event.

            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#191B21]/5 flex items-center justify-center">
                <MailIcon className="w-5 h-5 text-[#191B21]" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-[#191B21]">
                  Email
                </h3>
                <p className="font-poppins font-medium text-gray-600 mt-1">
                  support@freakychimp.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#191B21]/5 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#191B21]" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-[#191B21]">
                  Phone
                </h3>
                <p className="font-poppins font-medium text-gray-600 mt-1">
                  +41 90000 00000
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#191B21]/5 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#191B21]" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-[#191B21]">
                  Location
                </h3>
                <p className="font-poppins font-medium text-gray-600 mt-1">
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <Card className="border border-gray-200 shadow-lg rounded-2xl overflow-hidden bg-white">
          <CardHeader className="pb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#191B21]/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-[#191B21]" />
              </div>
              <CardTitle className="font-poppins font-bold text-2xl text-[#191B21]">
                Send us a message
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent>
            <form className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <Label
                    htmlFor="name"
                    className="font-poppins font-semibold text-[#191B21]"
                  >
                    Full Name
                  </Label>
                </div>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="font-poppins bg-white border-gray-300 focus:border-[#191B21] focus:ring-1 focus:ring-[#191B21] rounded-lg h-12"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <Label
                    htmlFor="email"
                    className="font-poppins font-semibold text-[#191B21]"
                  >
                    Email Address
                  </Label>
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="font-poppins bg-white border-gray-300 focus:border-[#191B21] focus:ring-1 focus:ring-[#191B21] rounded-lg h-12"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-gray-400" />
                  <Label
                    htmlFor="message"
                    className="font-poppins font-semibold text-[#191B21]"
                  >
                    Message
                  </Label>
                </div>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  className="font-poppins bg-white border-gray-300 focus:border-[#191B21] focus:ring-1 focus:ring-[#191B21] rounded-lg resize-none"
                />
              </div>

              <ButtonBg className="w-full h-12 text-base font-poppins font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </ButtonBg>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
