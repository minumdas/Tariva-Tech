import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function AboutUs() {
    return (
        <section
            id="about-us"
            className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white"
        >
            <div className="absolute inset-0 gradient-bg opacity-5" />

            <div className="relative max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                            About Us
                        </span>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Delivering Reliable Enterprise Testing Solutions
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            We deliver robust automation and quality assurance solutions for
                            enterprise eCommerce platforms, helping businesses accelerate
                            software delivery while ensuring reliability, performance, and a
                            seamless customer experience.
                        </p>

                        <div className="space-y-5 mb-8">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Enterprise Platforms
                                    </h4>
                                    <p className="text-gray-600">
                                        Delivered robust testing solutions for enterprise commerce
                                        platforms including IBM Sterling OMS, IBM Sterling WMS, and
                                        Fluent Commerce.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        UI Testing
                                    </h4>
                                    <p className="text-gray-600">
                                        Ensuring seamless customer journeys, responsive user
                                        interfaces, intuitive workflows, and consistent experiences
                                        across browsers and devices.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        API Testing
                                    </h4>
                                    <p className="text-gray-600">
                                        Validating REST APIs, order lifecycle, system integrations,
                                        and real-time data consistency across enterprise
                                        applications.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Enterprise Focus
                                    </h4>
                                    <p className="text-gray-600">
                                        Proven expertise in warehouse operations, inventory
                                        visibility, fulfillment optimization, and supply chain
                                        workflows.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white font-medium rounded-full shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
                        >
                            Let's Work Together
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="rounded-3xl p-10 bg-gradient-to-br from-primary-50 to-accent-50 shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Why Choose Us?
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold text-primary-600">
                                        Enterprise Automation
                                    </h4>
                                    <p className="text-gray-600">
                                        Robot Framework, Selenium WebDriver, API Automation, and CI/CD integration.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-primary-600">
                                        Faster Releases
                                    </h4>
                                    <p className="text-gray-600">
                                        Reduce regression effort and improve release confidence
                                        through reliable automation.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-primary-600">
                                        Proven Quality
                                    </h4>
                                    <p className="text-gray-600">
                                        End-to-end validation for OMS, WMS, inventory, warehouse,
                                        and fulfillment processes.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-primary-600">
                                         Automation Focus
                                    </h4>
                                    <p className="text-gray-600">
                                        Proven delivery of custom test automation frameworks and AIdriven automation tooling for scalable, intelligent validation.
                                        Our structured approach combines automation, domain knowledge, and performance validation to ensure scalable, reliable commerce systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}