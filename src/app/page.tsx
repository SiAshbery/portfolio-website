import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <NavBar />
            <div className="container mt-16 mx-auto px-12 py-8">
                <HeroSection />
                <AboutMe />
                <Projects />
            </div>
        </main>
    );
}
