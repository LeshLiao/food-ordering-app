import Header from "@/components/layout/Header"
import Hero from "@/components/layout/Hero"
import HomeMenu from "@/components/layout/HomeMenu"
import SectionHeaders from "@/components/layout/SectionHeader"

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <HomeMenu />
    <section className="text-center my-16">
      <SectionHeaders
      subHeader={'Our Story'}
      mainHeader={'About Us'}/>
      <div className="text-gray-500 max-w-md mx-auto mt-4 flex-col gap-4">
        <p>
          Text...1
        </p>
        <p>
          Text...2
        </p>
      </div>
    </section>
    <section className="text-center my-8">
      <SectionHeaders subHeader={'Don\'t hesitate'}
      mainHeader={'Contact us'}/>
      <div className="mt-8">
        <a className="text-4xl underline text-gray-500" href="tel:+123456789">+46 123 456 789</a>
      </div>
    </section>
    <footer className="border-t p-8 text-center mt-16">
      &copy; 2024 All rights reserved
    </footer>
    </>
  )
}
