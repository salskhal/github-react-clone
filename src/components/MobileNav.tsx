const dummyData = [
  {
    id: 1,
    name: "adrianhajdin / crwn-clothing",
  },
  {
    id: 2,
    name: "adrianhajdin / crwn-clothing",
  },
  {
    id: 3,
    name: "adrianhajdin / crwn-clothing",
  },
  {
    id: 4,
    name: "adrianhajdin / crwn-clothing",
  },
  {
    id: 5,
    name: "adrianhajdin / crwn-clothing",
  },
];
export default function MobileNav() {
  return (
    <div className="mobile-nav">
      <div>
        <p>Repositories</p>
      </div>
      <div>
      <ul className="space-y-2">
          {dummyData.map((repo) => (
            <li key={repo.id} className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
              <div>
                <h3 className="text-white">{repo.name}</h3>
              </div>
            </li>
          ))}
          </ul>
      </div>
    </div>
  );
}
