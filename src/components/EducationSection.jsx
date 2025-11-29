import React from "react";
import Card from "./Card";

const EducationSection = () => {
  return (
    <section id="education" className="bg-bgDark text-textMain min-h-screen pt-24">
      {/* Education Section Header */}
      <h2 className="text-4xl font-semibold text-textMain text-center mb-8">
        Education
      </h2>

      {/* Education Entries */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          {/* Center Divider */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-accent"></div>

          {/* Left-Right Alternating Cards */}
          <div className="space-y-8">
            {/* 1 */}
            <div className="flex justify-start">
              <Card
                title="Universal College Of Engineering"
                time="2021 – 2025"
                degree="B.E. - Information Technology"
                score="CGPA - 7.9"
                location="Mumbai, Maharashtra"
                alignment="mr-auto"
              />
            </div>

            {/* 2 */}
            <div className="flex justify-end">
              <Card
                title="Bharati Vidya Bhavan’s College"
                time="2019 – 2021"
                degree="H.S.C - Science"
                score="87.66%"
                location="Mumbai, Maharashtra"
                alignment="ml-auto"
              />
            </div>

            {/* 3 */}
            <div className="flex justify-start">
              <Card
                title="St. Dominic Savio High School"
                time="2007 – 2019"
                degree="S.S.C"
                score="78.20%"
                location="Mumbai, Maharashtra"
                alignment="mr-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
