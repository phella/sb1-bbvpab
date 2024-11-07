import React from 'react';
import { Clock, MapPin } from 'lucide-react';

interface RideRequest {
  id: number;
  name: string;
  from: string;
  to: string;
  time: string;
}

const rideRequests: RideRequest[] = [
  {
    id: 1,
    name: "Philopateer Nabil",
    from: "Lorem ipsum",
    to: "Lorem ipsum",
    time: "5:00 pm"
  },
  {
    id: 2,
    name: "Philopateer Nabil",
    from: "Lorem ipsum",
    to: "Lorem ipsum",
    time: "5:00 pm"
  },
  {
    id: 3,
    name: "Philopateer Nabil",
    from: "Lorem ipsum",
    to: "Lorem ipsum",
    time: "5:00 pm"
  }
];

export default function RideRequests() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">MY RIDES</h2>
        <div className="space-y-4">
          {rideRequests.map((request) => (
            <div key={request.id} className="bg-[#EBF3F5] rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <h3 className="text-xl font-bold">{request.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">is requesting for your shared ride:</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="text-red-500" />
                  <span className="font-medium">From:</span>
                  <span className="text-gray-600">{request.from}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-red-500" />
                  <span className="font-medium">To:</span>
                  <span className="text-gray-600">{request.to}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-gray-500" />
                  <span className="font-medium">At:</span>
                  <span className="text-gray-600">{request.time}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                  Decline
                </button>
                <button className="bg-[#E84C3D] text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
                  Accept
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}