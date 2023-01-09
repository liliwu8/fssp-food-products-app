const About = () => {
    return (
        <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
          <div class="max-h-96 md:h-screen">
            <img class="w-screen h-screen object-cover object-top" src="https://avatars.githubusercontent.com/u/96275694?v=4" alt=""/>
          </div>
          <div class="flex bg-gray-100 p-10">
            <div class="mb-auto mt-auto max-w-lg">
              <h1 class="text-3xl uppercase">Li Li Wu</h1>
              <p class="font-semibold mb-5">Software Engineer</p>
              <p> I am fullstack software engineer in NYC with a Bachelor of
                Business Administration in Marketing. I have a background in
                logistics/ importing. I like to code and create websites. When I
                am not coding, I like to binge on series and try new foods!</p>
            <a href="mailto:lili.wu178@gmail.com">  <button class="bg-black rounded-md py-3 px-7 mt-6 text-white">Email Me</button></a>
            </div>
          </div>
        </div>
      </div>
   )
  };
  
  export default About;

  
  
  
  
  