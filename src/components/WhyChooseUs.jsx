import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: 'fas fa-truck',
      title: 'Free Delivery',
      description: 'Receive your order without any additional cost',
    },
    {
      icon: 'fas fa-undo-alt',
      title: '45 days Return',
      description: 'You can return the product and get a replacement if you find any issue with the product within 45 days',
    },
    {
      icon: 'fas fa-dollar-sign',
      title: '100% Money Back Guarantee',
      description: 'You will get your money back if there is any problem with the product you got',
    },
    {
      icon: 'fas fa-clock',
      title: '24 / 7 Service',
      description: 'We are available and at your service at any time',
    },
  ];

  return (
    <div className="text-center my-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-green-50 p-6 rounded-lg shadow-md flex items-start space-x-4 opacity-0 transform transition duration-700 ease-out animate__animated animate__fadeInUp`}
            style={{
              animationDelay: `${index * 200}ms`,
              animationFillMode: 'forwards',
            }}
          >
            <div className="text-red-500 text-3xl">
              <i className={feature.icon}></i>
            </div>
            <div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
