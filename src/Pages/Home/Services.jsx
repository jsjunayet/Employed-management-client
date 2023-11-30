// src/components/Services.js



const Services = () => {
    const services = [
        {
            title: 'Personnel Tracking',
            description: 'Efficient and real-time monitoring of your workforce. Keep track of attendance, leave, and performance metrics.',
            features: [
                'Real-time attendance tracking',
                'Leave management system',
                'Performance metric analysis',
            ],
            image: 'https://i.ibb.co/DGkf13k/online-ordering-taxi-car-rent-sharing-using-service-mobile-application-70921-680.jpg', // Add your image file name or URL
        },
        {
            title: 'Collaborative Projects',
            description: 'Streamlined tools for seamless team collaboration. From ideation to execution, foster creativity and innovation.',
            features: [
                'Project ideation and planning',
                'Task assignment and tracking',
                'Document collaboration',
            ],
            image: 'https://i.ibb.co/CJKpnTJ/businessman-shaking-hand-with-his-colleague-office.jpg', // Add your image file name or URL
        },
        {
            title: 'HR Optimization',
            description: 'Future-ready HR solutions for enhanced efficiency. Automate routine tasks and focus on strategic HR initiatives.',
            features: [
                'Automated HR processes',
                'Strategic HR planning tools',
                'Employee lifecycle management',
            ],
            image: 'hr-optimization.jpg', // Add your image file name or URL
        },
        {
            title: 'Task Management',
            description: 'Organize and prioritize tasks with our intuitive management system. Increase productivity with clear goals and timelines.',
            features: [
                'Task organization and prioritization',
                'Deadline management',
                'Team collaboration on tasks',
            ],
            image: 'task-management.jpg', // Add your image file name or URL
        },
        {
            title: 'Employee Engagement',
            description: 'Boost morale and productivity with engagement-focused features. Employee surveys, recognition, and feedback mechanisms.',
            features: [
                'Employee surveys and feedback',
                'Recognition and rewards program',
                'Communication channels',
            ],
            image: 'employee-engagement.jpg', // Add your image file name or URL
        },
        {
            title: 'Performance Analytics',
            description: 'Data-driven insights for informed decision-making. Measure individual and team performance to drive continuous improvement.',
            features: [
                'Individual and team performance metrics',
                'Data analytics tools',
                'Continuous improvement strategies',
            ],
            image: 'performance-analytics.jpg', // Add your image file name or URL
        },
        {
            title: 'Training and Development',
            description: 'Facilitate employee growth with tailored training programs. Track progress and enhance skills for career advancement.',
            features: [
                'Customized training modules',
                'Skill development tracking',
                'Certification programs',
            ],
            image: 'training-and-development.jpg', // Add your image file name or URL
        },
        {
            title: 'Recruitment and Onboarding',
            description: 'Simplify the hiring process and streamline onboarding. Efficiently manage candidate profiles and ensure a smooth transition for new hires.',
            features: [
                'Applicant tracking system',
                'Onboarding automation',
                'New hire documentation',
            ],
            image: 'recruitment-and-onboarding.jpg', // Add your image file name or URL
        },

    ];

    return (
        <div className="max-w-7xl mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-40 object-cover object-center"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <ul className="list-disc pl-6">
                            {service.features.map((feature, i) => (
                                <li key={i} className="text-gray-600">{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;
