"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Lightbulb,
  Globe,
  Award,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Instagram,
  ExternalLink,
  Quote,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BUDETECLanding() {
  const donateUrl = "https://checkout.fapshi.com/donation/55703338"

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Top Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 shadow-lg">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span className="text-base sm:text-lg font-semibold text-center">
            Your Donation Powers Africa's Future Leaders. Give Now.
          </span>
          <Button
            asChild
            size="sm"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 sm:px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            <Link href={donateUrl} target="_blank" rel="noopener noreferrer">
              DONATE NOW
            </Link>
          </Button>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 sm:p-3 rounded-lg shadow-lg">
                <Image
                  src="/images/budetec-logo.png"
                  alt="BUDETEC"
                  width={140}
                  height={45}
                  className="h-8 sm:h-10 w-auto"
                />
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="#impact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Impact
            </Link>
            <Link href="#team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Team
            </Link>
            <Link href="#partners" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Partners
            </Link>
          </nav>

          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-3 sm:px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            <Link href={donateUrl} target="_blank" rel="noopener noreferrer">
              <span className="hidden sm:inline">DONATE NOW</span>
              <span className="sm:hidden">DONATE</span>
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/75 to-yellow-600/65 z-10"></div>
        <div className="absolute inset-0">
          <Image src="/images/hero-main.jpg" alt="BUDETEC participants" fill className="object-cover opacity-80" />
        </div>

        <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-blue-300/30">
                <Image
                  src="/images/budetec-logo.png"
                  alt="BUDETEC"
                  width={180}
                  height={60}
                  className="h-12 sm:h-16 w-auto"
                />
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Every Donation
            <span className="block text-yellow-300">Transforms a Life</span>
            <span className="block text-blue-200">Shapes Africa's Future</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Your contribution directly empowers the next generation of African leaders, innovators, and changemakers
            through BUDETEC 2025.
          </p>
          <div className="space-y-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <Link href={donateUrl} target="_blank" rel="noopener noreferrer">
                DONATE NOW - TRANSFORM LIVES
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Thematic Focus Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              BUDETEC 2025: <span className="text-yellow-600">Thematic Focus</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Each edition of BUDETEC aligns with a rotating set of UN Sustainable Development Goals. For 2025, our
              strategic focus centers on three critical areas for Africa's development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">4</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Education</h3>
                <p className="text-gray-600 leading-relaxed">
                  Enhancing critical thinking, communication skills, and academic excellence through structured debate
                  and intellectual discourse.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-100 hover:border-yellow-300 transition-colors bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">9</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation & Infrastructure</h3>
                <p className="text-gray-600 leading-relaxed">
                  Driving technological advancement and sustainable infrastructure development through youth-led
                  innovation and hackathons.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 hover:border-green-300 transition-colors bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">13</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Climate Action</h3>
                <p className="text-gray-600 leading-relaxed">
                  Amplifying African voices on climate challenges and developing sustainable solutions for environmental
                  resilience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Unleashing Africa's
                <span className="text-blue-600"> Untapped Potential</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Across Cameroon, brilliant young minds are brimming with ideas, yet often lack the platforms to express
                themselves, collaborate, and solve real-world problems. BUDETEC bridges this gap, creating a dynamic
                space where debate, public speaking, and technology converge to build critical skills and drive tangible
                solutions for a thriving Africa.
              </p>
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-blue-800 font-semibold text-base sm:text-lg">
                  Our vision: To become Africa's leading youth platform for debate, digital innovation, and leadership
                  development.
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/images/vision-youth.jpg"
                alt="Engaged African youth"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover w-full h-64 sm:h-80 lg:h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About BUDETEC 2025 Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              BUDETEC 2025:
              <span className="text-yellow-600"> Innovate. Communicate. Excel.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Pan-African University Debate and Technology Challenge
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Main Event</h3>
                </div>
                <p className="text-gray-700 mb-2">
                  <strong>Dates:</strong> July 17-19, 2025
                </p>
                <p className="text-gray-700">
                  <strong>Venue:</strong> Redemption Higher Institute of Biomedical and Management Sciences (RHIBMS),
                  Buea
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-100 hover:border-yellow-300 transition-colors bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Pre-Event</h3>
                </div>
                <p className="text-gray-700 mb-2">
                  <strong>Date:</strong> Saturday, June 28, 2025
                </p>
                <p className="text-gray-700">
                  <strong>Venue:</strong> Technipole Building, Polytechnique Yaounde
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 hover:border-green-300 transition-colors bg-white md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Participants</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>100+ University Students</strong> from Across Cameroon
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">
                    British Parliamentary Debate
                  </Badge>
                  <Badge variant="outline" className="mr-2">
                    Public Speaking
                  </Badge>
                  <Badge variant="outline">30-Hour Hackathon</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Your Donation.
              <span className="text-blue-600">Their Future.</span>
              <span className="text-yellow-600"> Africa's Progress.</span>
            </h2>
          </div>

          <div className="grid gap-8 sm:gap-12">
            {/* Impact Point 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/impact-awards.jpg"
                  alt="Students receiving awards"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full h-48 sm:h-64"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Nurturing Leaders</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Empowering university students with essential critical thinking, persuasive communication, and
                  problem-solving skills. Contributing to SDG 4: Quality Education and SDG 5: Gender Equality by
                  ensuring equal opportunities for all students.
                </p>
              </div>
            </div>

            {/* Impact Point 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-6">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/impact-innovation.jpg"
                  alt="Technology innovation"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full h-48 sm:h-64"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Fostering Innovation</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Driving technological innovation and youth-led solutions for real-world challenges, fostering an
                  ecosystem that supports SDG 9: Industry, Innovation, and Infrastructure and SDG 8: Decent Work and
                  Economic Growth.
                </p>
              </div>
            </div>

            {/* Impact Point 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/vision-youth.jpg"
                  alt="Group interaction and networking"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full h-48 sm:h-64"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 mr-3" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Building Community & Networks</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Connecting students with mentors, industry professionals, and policymakers, strengthening
                  inter-university collaboration and career opportunities. Supporting SDG 10: Reduced Inequalities and
                  SDG 17: Partnerships for the Goals.
                </p>
              </div>
            </div>

            {/* Impact Point 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-6">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/hero-main.jpg"
                  alt="Students with national flag"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full h-48 sm:h-64"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Global Voice for Africa</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Ensuring strong Cameroonian representation in pan-African and global debate championships, amplifying
                  Africa's voice on critical issues including climate action. Contributing to SDG 13: Climate Action and
                  SDG 16: Peace, Justice and Strong Institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Voices of Transformation
            </h2>
            <p className="text-xl text-gray-600">
              Testimonials from Buea University participants who have experienced transformation through BUDETEC
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-blue-50 border-l-4 border-blue-600">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-4 italic">
                  "BUDETEC transformed my perspective on public speaking and critical thinking. The debate sessions at
                  Buea University prepared me for international competitions and boosted my confidence tremendously."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Mbah</p>
                    <p className="text-sm text-gray-600">Computer Science, University of Buea</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 border-l-4 border-yellow-600">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-yellow-600 mb-4" />
                <p className="text-gray-700 mb-4 italic">
                  "The hackathon component of BUDETEC opened my eyes to technological solutions for African problems. I
                  developed skills that landed me an internship at a tech startup in Douala."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-900">Emmanuel Tabi</p>
                    <p className="text-sm text-gray-600">Engineering, University of Buea</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-l-4 border-green-600">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-green-600 mb-4" />
                <p className="text-gray-700 mb-4 italic">
                  "BUDETEC connected me with mentors and peers from across Cameroon. The network I built has been
                  invaluable for my career development and continues to inspire my work in climate advocacy."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-900">Grace Foncha</p>
                    <p className="text-sm text-gray-600">Environmental Science, University of Buea</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              The Driving Force Behind BUDETEC
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Petiho Beatrice",
                role: "Founder & President",
                image: "/images/team/petiho-beatrice.png",
              },
              {
                name: "Lehdufe Ethel",
                role: "Vice President in Charge of Projects and Programs",
                image: "/images/team/lehdufe-ethel.png",
              },
              {
                name: "Dolorès Mache",
                role: "Ban Ki-moon Global Citizens Scholar 2021",
                image: "/images/team/dolores-mache.png",
              },
              {
                name: "Bill Agha",
                role: "Founder and President at TIC",
                image: "/images/team/bill-agha.png",
              },
              {
                name: "Rodrigue Tamukong",
                role: "Founding President Mind Reformers Global Network",
                image: "/images/team/rodrigue-tamukong.png",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow border border-gray-200 bg-white"
              >
                <CardContent className="p-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-200">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Valued Partners & Media
            </h2>
          </div>

          <div className="relative">
            <div className="flex animate-scroll hover:pause-animation">
              <div className="flex space-x-8 min-w-full">
                {[
                  "MINESUP",
                  "Nature Gives Back",
                  "Yoli Technologies",
                  "Tech Innovation Center",
                  "CRTV",
                  "The Guardian Post",
                  "Redemption Higher Institute",
                  "Polytechnique Yaounde",
                  "Mind Reformers Global Network",
                ].map((partner, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded-lg p-6 min-w-48 h-24 flex items-center justify-center hover:bg-blue-50 transition-colors"
                  >
                    <span className="text-gray-700 text-sm font-medium text-center">{partner}</span>
                  </div>
                ))}
              </div>
              <div className="flex space-x-8 min-w-full">
                {[
                  "MINESUP",
                  "Nature Gives Back",
                  "Yoli Technologies",
                  "Tech Innovation Center",
                  "CRTV",
                  "The Guardian Post",
                  "Redemption Higher Institute",
                  "Polytechnique Yaounde",
                  "Mind Reformers Global Network",
                ].map((partner, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="bg-gray-100 rounded-lg p-6 min-w-48 h-24 flex items-center justify-center hover:bg-blue-50 transition-colors"
                  >
                    <span className="text-gray-700 text-sm font-medium text-center">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
            Join Us. Transform Africa.
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
            BUDETEC Africa 2025 is more than a competition; it's a movement. Every contribution directly empowers a
            young African leader, fuels innovation, and builds a brighter future for the continent. Your support lays
            the foundation for something truly transformative.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-12 py-4 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            <Link href={donateUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              DONATE NOW
            </Link>
          </Button>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">A Collaborative Initiative</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 sm:p-3 rounded-lg">
                <Image
                  src="/images/baseline-orator-logo.png"
                  alt="Baseline Orators Network"
                  width={120}
                  height={40}
                  className="h-6 sm:h-8 w-auto"
                />
              </div>
              <span className="text-gray-400 text-lg sm:text-xl">+</span>
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 sm:p-3 rounded-lg">
                <Image
                  src="/images/tic-foundation-logo.png"
                  alt="TIC Foundation"
                  width={100}
                  height={35}
                  className="h-5 sm:h-7 w-auto"
                />
              </div>
              <span className="text-gray-400 text-lg sm:text-xl">=</span>
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 sm:p-3 rounded-lg">
                <Image
                  src="/images/budetec-logo.png"
                  alt="BUDETEC"
                  width={140}
                  height={45}
                  className="h-8 sm:h-10 w-auto"
                />
              </div>
            </div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              BUDETEC is proudly brought to you through the partnership of Baseline Orators Network and TIC Foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <Image
                src="/images/baseline-orator-logo.png"
                alt="Baseline Orators Network"
                width={120}
                height={40}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">
                Empowering Africa's future through debate, innovation, and leadership development.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>contact@baselineoratornetwork.org</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+237 650 498 550</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+237 652 828 762</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Address</h3>
              <p className="text-gray-400">
                Monté Chapelle Obili
                <br />
                Yaoundé, Cameroon
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
              <p className="text-gray-400 mt-4">
                <Link href="https://baselineoratornetwork.org" className="hover:text-white transition-colors">
                  baselineoratornetwork.org
                </Link>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Baseline Orators Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
