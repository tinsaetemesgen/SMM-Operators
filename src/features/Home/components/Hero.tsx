import HeroImg from '../../../assets/images/ourTeamm.png'
const Hero = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gray-100/20 z-10">
      <div className="absolute inset-0 z-0 flex items-center justify-center top-8">
        <img 
    src={HeroImg} 
    alt="Hero background"
    className="object-cover sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full xl:w-4xl xl:h-full" 
  />
      </div>
    </div>
  )
}

export default Hero
