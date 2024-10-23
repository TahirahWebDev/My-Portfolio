const Skills = () => {
  return (
    <section className="py-12 px-6 bg-gray-50" id="skills">
      {/* Headings */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-teal-800">Skills</h1>
        <p className="text-[#186f78] mt-2">
          Proficient in modern web technologies and frameworks.
        </p>
      </header>

      {/* Skills Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-5xl">
        {/* Skill 1 */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-base font-semibold text-teal-700 mb-2">HTML</h3>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-teal-600 h-full rounded-full" style={{ width: '95%' }}></div>
          </div>
        </div>

        {/* Skill 2 */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-base font-semibold text-teal-700 mb-2">CSS</h3>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-teal-600 h-full rounded-full" style={{ width: '88%' }}></div>
          </div>
        </div>

        {/* Skill 3 */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-base font-semibold text-teal-700 mb-2">JavaScript</h3>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-teal-600 h-full rounded-full" style={{ width: '92%' }}></div>
          </div>
        </div>

        {/* Skill 4 */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-base font-semibold text-teal-700 mb-2">TypeScript</h3>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-teal-600 h-full rounded-full" style={{ width: '78%' }}></div>
          </div>
        </div>

        {/* Skill 5 */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-base font-semibold text-teal-700 mb-2">React</h3>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-teal-600 h-full rounded-full" style={{ width: '67%' }}></div>
          </div>
        </div>

        {/* Skill 6 */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-base font-semibold text-teal-700 mb-2">Node.js</h3>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-teal-600 h-full rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
