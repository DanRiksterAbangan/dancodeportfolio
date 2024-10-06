import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import { color } from 'three/webgpu';
import Button from '../components/Button';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(
            "danriksterabangan@gmail.com"
        );

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }

    return(
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="Grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">
                                Hi, I'm Dan!
                            </p>
                            <p className="grid-subtext">
                                Work with me! I am more than happy to make your dreams come true. Together, let's make your ideas become realistic!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="Grid-2" className="w-full sm:w-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">
                                Tech Stack
                            </p>

                            <p className="grid-subtext">
                                I specialize in HTML, CSS, Javascript, and PHP with a focus on React.JS, Three.JS, Next.JS ecosystems, and Laravel.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe 
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 10.2084984, lng: 123.7572942,
                                    text: "I'm Here!",
                                    color: "white",
                                    size: 1000000,
                                }]}
                            />
                        </div>

                        <div>
                            <p className="grid-headtext">
                                I work remotely across all timezones.
                            </p>
                            <p className="grid-subtext">
                                I'm from the Philippines. With remote work, I'm always available!
                            </p>
                            <a href="#contact">
                                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="Grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">
                                My Passion for Coding
                            </p>

                            <p className="grid-subtext">
                                I love solving problems and creating things through codes. Making your ideas into reality is what makes me happy.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="Grid 4" className="w-full  md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                            
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">
                                Contact Me!
                            </p>

                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="Copy" />

                                <p className="lg:text-xl md:text-lg font-medium text-grey_gradient text-white">
                                    danriksterabangan@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About