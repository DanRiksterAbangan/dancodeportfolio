import React from 'react';

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p className="">
                    Terms and Conditions
                </p>
                <p className="">
                   |
                </p>
                <p className="">
                   Privacy Policy
                </p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="https://www.facebook.com/DanAcademicsAccount" target="_blank" className="flex justify-center align-center texts-center">
                    <img src="/assets/facebook.svg" alt="Facebook" className="w-1/2 h-1/2" />
                    </a>
                </div>

                <div className="social-icon">
                    <a href="https://www.behance.net/danriksterabangan" target="_blank" className="flex justify-center align-center texts-center">
                        <img src="/assets/behance.svg" alt="Behance" className="w-1/2 h-1/2" />
                    </a>
                </div>

                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/dan-rikster-abangan-2557a5262/" target="_blank" className="flex justify-center align-center texts-center">
                        <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-1/2 h-1/2" />
                    </a>
                </div>
            </div>

            <p className="text-white-500">
                &copy; 2024 <a href="https://www.facebook.com/DanAcademicsAccount" target="_blank" className="hover:underline"> Dan Rikster Abangan. </a> All Rights Reserved.
            </p>
        </section>
    )
}
export default Footer