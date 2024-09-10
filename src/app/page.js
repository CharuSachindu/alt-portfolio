
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button"
// import { FiDownload } from "react-icons/fi"
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span>Software Developer</span>
              <h1 className="h1 mb-6">Hello I'm<br /> <span className="text-green-400">Sachindu</span></h1>
              <p className="max-w-[500px] mb-9 text-white/80">
              I am a 3rd year Information Technology undergraduate at the University of Moratuwa, aspiring to become a software engineer. 
              With a strong foundation in programming and problem-solving, I am passionate about creating innovative solutions that enhance user experiences. 
              I am eager to apply my skills and grow in a dynamic environment.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Dwnload CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-green-400 rounded-full flex
               justify-center items-center text-green-400 text-base hover:bg-green-400 hover:text-primary hover:transition-all duration-500" />
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </>
  )
}

export default Home;