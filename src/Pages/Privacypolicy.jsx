import React from "react";
import { motion } from "framer-motion";

const Privacypolicy = () => {
    return (
        <div className="bg-gradient-to-br from-blue-700 to-indigo-900 min-h-screen flex flex-col items-center justify-center px-6 py-12">
            
            {/* Animated Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-extrabold text-white text-center mb-6"
            >
                Privacy Policy
            </motion.h1>

            {/* Glassmorphism Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-3xl bg-white/10 backdrop-blur-lg text-white p-8 rounded-2xl shadow-2xl"
            >
                <p className="text-lg font-medium">
                    At <span className="font-bold">Picture to Text</span>, your privacy is our priority.  
                    This Privacy Policy explains how we collect, use, and protect your data.
                </p>

                <div className="border-t border-white/30 my-6"></div>

                <h2 className="text-2xl font-bold">Privacy Policy</h2>
                <p className="text-base mt-2">
                    At work on the website, accessible from picture to text, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by working on the Website and how we use it.
                </p>
                <p className="text-base mt-2">
                    If you have any additional questions or would like more information about our privacy policy, please do not hesitate to contact us by email at contact@picturetotext.co.
                </p>

                <h2 className="text-2xl font-bold mt-6">Log Files</h2>
                <p className="text-base mt-2">
                    Working on the website follows a standard procedure of using log files. These files record visitors when they visit websites. All hosting companies do this and are a part of the hosting services' analytics. The information collected by the log files includes Internet Protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any personally identifiable information. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement around the website, and gathering demographic information.
                </p>

                <h2 className="text-2xl font-bold mt-6">Cookies and Web Beacons</h2>
                <p className="text-base mt-2">
                    Like any other website, work on the website uses "cookies". These cookies are used to store information, including visitors' preferences and the website pages the visitor accessed or visited. The information is used to optimize the user experience by customizing our web page content based on visitors' browser type and/or other information.
                </p>

                <h2 className="text-2xl font-bold mt-6">Google DoubleClick DART Cookies</h2>
                <p className="text-base mt-2">
                    Google is one of our site’s third-party providers. It also uses cookies, known as DART cookies, to serve ads to our site visitors based on their visit to www.picturetotext.co and other sites on the Internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network privacy policy at the following URL – https://policies.google.com/technologies/ads.
                </p>

                <h2 className="text-2xl font-bold mt-6">Privacy Policies</h2>
                <p className="text-base mt-2">
                    You can consult this list to find the privacy policy of each of the advertising partners working on the website. Our Privacy Policy was created using the GDPR Privacy Policy Generator.
                </p>
                <p className="text-base mt-2">
                    Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on the Website, which are sent directly to users’ browsers. They automatically receive your IP address when this happens. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content you see on the websites you visit.
                </p>
                <p className="text-base mt-2">
                    Note that the work on the website has no access to or control over these cookies that are used by third-party advertisers.
                </p>

                <h2 className="text-2xl font-bold mt-6">Third-Party Privacy Policies</h2>
                <p className="text-base mt-2">
                    Work on the website's privacy policy does not apply to other advertisers or websites. Thus, we advise you to consult the respective privacy policies of these third-party ad servers for more detailed information. It may include their practices and instructions on how to opt out of certain options. You can find a complete list of these privacy policies and their links here: Privacy Policy Links.
                </p>
                <p className="text-base mt-2">
                    You can choose to disable cookies through your browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
                </p>

                <h2 className="text-2xl font-bold mt-6">Children's Information</h2>
                <p className="text-base mt-2">
                    Another part of our priority is to add protection for children while using the Internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                </p>
                <p className="text-base mt-2">
                    Work on the Website does not knowingly collect any personally identifiable information from children under the age of 13. If you believe that your child has provided this type of information on our website, we strongly encourage you to contact us immediately, and we will do our best to quickly remove this information from our records.
                </p>

                <h2 className="text-2xl font-bold mt-6">Online Privacy Policy Only</h2>
                <p className="text-base mt-2">
                    This privacy policy applies only to our online activities and is valid for visitors to our website. It does not apply to any information collected offline or via channels other than this website.
                </p>

                <div className="border-t border-white/30 my-6"></div>

                {/* Contact Email */}
                <div className="text-center">
                    <p className="text-lg font-semibold">For any privacy concerns, contact us at:</p>
                    <a
                        href="mailto:contact@picturetotext.co"
                        className="text-lg text-blue-300 hover:text-blue-500 transition-all"
                    >
                        contact@picturetotext.co
                    </a>
                </div>
                </motion.div>
        </div>


    );
};

export default Privacypolicy;
