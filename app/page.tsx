import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/AnimatedText"
import BackgroundPaths from "@/components/BackgroundPaths"
import { Navbar } from "@/components/Navbar"
import { MusicPlayer } from "@/components/MusicPlayer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <BackgroundPaths title="Jayanth Studios" />
      <Navbar />
      <main className="flex-1 z-10 relative flex items-center">
        <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between">
          {/* Image Section - 5/12 */}
          <div className="mt-8 lg:mt-0 lg:w-5/12 flex justify-center">
            <Image
              alt="Portrait by the ocean"
              className="rounded-xl object-cover object-center"
              height={500}
              width={500}
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullSizeRender-36bJNjLSAO3TMbCbmGBPi8xkwWXOfB.jpeg"
              priority
            />
          </div>

          {/* Text Content Section - 7/12 */}
          <div className="flex flex-col justify-center space-y-4 lg:w-7/12 max-w-[700px] mt-4">
            <div className="space-y-2">
              <AnimatedText />
              <p className="text-gray-500 md:text-lg dark:text-gray-400 mt-3 mb-3">
              Hi, I'm Jayanth! I'm a student passionate about Machine Learning, AI, and full-stack development using the MERN stack. I love building intelligent and scalable applications that create meaningful digital experiences.              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="w-full px-12   sm:w-auto">
                <Link href="/projects">View My Projects</Link>
              </Button>
              <Button variant="outline" asChild className="w-full px-12 sm:w-auto">
                <Link href="https://github.com/Jayanthram7" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="GitHub"
                    className="w-5 h-5 mr-2"
                  />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full px-12 sm:w-auto">
                <Link href="https://www.linkedin.com/in/jayanthram-k-j181104/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    alt="LinkedIn"
                    className="w-5 h-5 mr-2"
                  />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-4 px-4 md:px-6 border-t z-10">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
            © 2025 Jayanth Studios. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4" href="#contact">
              Contact Me
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Twitter
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              GitHub
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
