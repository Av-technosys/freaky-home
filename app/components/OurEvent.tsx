import Image from "next/image";
import usertesting from "../../public/ajay.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  PartyPopper, 
  Music, 
  Cake, 
  Heart, 
  Sparkles, 
  Baby
} from "lucide-react";

const eventData = [
  {
    img: usertesting,
    title: "Party",
    subtitle: "Celebrate every little moment",
    desc: "Turn life’s everyday moments into memorable celebrations. From concept to execution, we create lively, well-organized celebrations tailored to your style.",
    icon: <PartyPopper className="h-6 w-6" />,
    category: "Entertainment",
    date: "Dec 25, 2024",
    location: "New York",
    attendees: 120,
    color: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    img: usertesting,
    title: "Concert",
    subtitle: "Night full of energy",
    desc: "Unforgettable concert experiences delivered with expert planning, dynamic staging, and powerful production bringing music to life in its most energetic form.",
    icon: <Music className="h-6 w-6" />,
    category: "Music",
    date: "Jan 15, 2025",
    location: "Los Angeles",
    attendees: 500,
    color: "bg-gradient-to-r from-blue-500 to-cyan-500"
  },
  {
    img: usertesting,
    title: "Birthday",
    subtitle: "Celebrate your special day",
    desc: "Personalized birthday celebrations designed around your style - thoughtfully planned, beautifully executed, and truly unforgettable.",
    icon: <Cake className="h-6 w-6" />,
    category: "Personal",
    date: "Ongoing",
    location: "Custom Venues",
    attendees: "50-100",
    color: "bg-gradient-to-r from-orange-500 to-yellow-500"
  },
  {
    img: usertesting,
    title: "Marriage",
    subtitle: "Beginning of forever together",
    desc: "We design and manage weddings with thoughtful details, seamless coordination, and unforgettable experiences—so you can focus on what truly matters.",
    icon: <Heart className="h-6 w-6" />,
    category: "Wedding",
    date: "By Appointment",
    location: "Worldwide",
    attendees: "200+",
    color: "bg-gradient-to-r from-red-500 to-pink-500"
  },
  {
    img: usertesting,
    title: "Decor",
    subtitle: "Transforming spaces with creativity",
    desc: "We combine creativity, style, and attention to detail to create spaces that leave a lasting impression.",
    icon: <Sparkles className="h-6 w-6" />,
    category: "Design",
    date: "Custom",
    location: "Any Venue",
    attendees: "N/A",
    color: "bg-gradient-to-r from-green-500 to-emerald-500"
  },
  {
    img: usertesting,
    title: "Baby Shower",
    subtitle: "Celebrating new beginnings",
    desc: "We craft personalized baby showers with elegant themes, thoughtful details, and stress-free execution.",
    icon: <Baby className="h-6 w-6" />,
    category: "Family",
    date: "Custom",
    location: "Home/Venue",
    attendees: "30-80",
    color: "bg-gradient-to-r from-indigo-500 to-purple-500"
  },
];

const OurEvent = () => {
  return (
    <div id="products" className="max-w-7xl mx-auto  py-8">
      <div className="flex flex-col text-center max-w-5xl mx-auto gap-6 mb-6">
      
        <h1 className="text-4xl font-bold tracking-tight max-sm:text-3xl">
            Our Events
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
         Crafted with precision and creativity, our events are designed to simplify planning while delivering exceptional experiences powered by smart, user-centric solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventData.map((item, index) => (
          <Card 
            key={index} 
            className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card"
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <Image 
                src={item.img} 
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className={`absolute top-4 right-4 ${item.color} p-3 rounded-xl shadow-lg`}>
                {item.icon}
              </div>
            </div>

            <CardContent className="p-2 space-y-2">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
                <Badge variant="outline" className="ml-2">
                  {item.category}
                </Badge>
              </div>
{/* 
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{item.attendees} {typeof item.attendees === 'number' ? 'people' : ''}</span>
                </div>
              </div> */}

              <p className="text-muted-foreground leading-relaxed transition-all duration-300 group-hover:text-foreground">
                {item.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  );
};

export default OurEvent;