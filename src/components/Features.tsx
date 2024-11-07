import React from 'react';
import { Shield, Users, Clock } from 'lucide-react';
import HomeImage from './Home.png';
import HomeTwo from './HomeTwo.png';
import RequestPng from './Request.png';
import './Hero.css';

const features = [
  {
    icon: Shield,
    title: 'Safety First',
    description:
      'Verified drivers, real-time tracking, and 24/7 support for peace of mind.',
  },
  {
    icon: Users,
    title: 'Smart Matching',
    description:
      'Advanced algorithm to match you with the perfect travel companions.',
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Find rides that match your schedule, any time of the day.',
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          Why Choose Dayry?
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="lowerSection">
        <div className="lowerSectionItem">
          <img src={HomeImage} alt="Dayry3" />
          <div className="stepsNumber">1</div>
          <p>
            The easiest way to share rides, save money, and connect with others.
          </p>
        </div>

        <div className="lowerSectionItem">
          <img src={HomeTwo} alt="Dayry3" />
          <div className="stepsNumber">2 </div>
          <p>
            Enter your ride details, and we’ll calculate a fair fare for you.
            You can then share it on Facebook and in the app.
          </p>
        </div>

        <div className="lowerSectionItem">
          <img src={RequestPng} alt="Dayry3" />
          <div className="stepsNumber">3</div>
          <p>
            You can review the requests and choose to accept or decline them.
          </p>
        </div>
      </div>
    </section>
  );
}
