import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/placeholder.svg" 
                alt="StudyFetch Logo" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-xl">StudyFetch</span>
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Our Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[400px]">
                      <div className="grid gap-3">
                        <Link href="#" className="block p-2 hover:bg-muted rounded-md">
                          Study Sets
                        </Link>
                        <Link href="#" className="block p-2 hover:bg-muted rounded-md">
                          Interactive Quizzes
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Our Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>For Educators</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[400px]">
                      <div className="grid gap-3">
                        <Link href="#" className="block p-2 hover:bg-muted rounded-md">
                          Teaching Tools
                        </Link>
                        <Link href="#" className="block p-2 hover:bg-muted rounded-md">
                          Resources
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <select className="bg-transparent border rounded-md px-2 py-1">
              <option value="en">🌐 English</option>
            </select>
            <Button variant="outline">Login</Button>
            <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED]">Sign Up</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto mb-8">
            <span className="text-[#2D2B3F]">Create accurate </span>
            <span className="text-emerald-400">|</span>
            <br />
            <span className="text-[#2D2B3F]">with AI from your </span>
            <span className="text-[#4785FF]">course material</span>
            <span className="text-[#2D2B3F]"> in seconds.</span>
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex flex-col items-center gap-2">
              <div className="p-2 rounded-full bg-[#4785FF]/10">
                <svg className="w-6 h-6 text-[#4785FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <span>For Students</span>
              <Button className="bg-[#4785FF] hover:bg-[#3B76E3]">Try for Free</Button>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="p-2 rounded-full bg-[#2D2B3F]/10">
                <svg className="w-6 h-6 text-[#2D2B3F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                </svg>
              </div>
              <span>For Educators</span>
              <Button variant="secondary">Get Started</Button>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="p-2 rounded-full bg-emerald-400/10">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span>For Institutions</span>
              <Button variant="outline" className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10">
                Learn More
              </Button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-12 grayscale opacity-60">
            {['LA Times', 'TechCrunch', 'WSJ', 'Yahoo Finance'].map((brand) => (
              <div key={brand} className="text-sm font-semibold">
                {brand}
              </div>
            ))}
          </div>
        </section>

        {/* Features Preview */}
        <section className="relative bg-[#2D2B3F] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-8">
            <Image
              src="/placeholder.svg"
              alt="StudyFetch Mascot"
              width={200}
              height={200}
              className="hidden md:block"
            />
            <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Create a study set</h3>
                <div className="border-2 border-dashed border-white/20 rounded-lg p-4 text-center">
                  Drag and Drop Your Files Here
                </div>
                <Button className="w-full mt-4 bg-[#8B5CF6] hover:bg-[#7C3AED]">Continue</Button>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Interactive Quizzes</h3>
                <div className="space-y-2">
                  <div className="bg-white/5 rounded p-2">Quiz Option 1</div>
                  <div className="bg-white/5 rounded p-2">Quiz Option 2</div>
                </div>
                <div className="mt-4 text-sm">Current Set Progress: 1/10</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Support Button */}
      <div className="fixed bottom-4 right-4">
        <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED]">
          Need support? Ask AI
        </Button>
      </div>
    </div>
  )
}

