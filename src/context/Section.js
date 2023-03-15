import { LevelContext } from './Contexts';

export default function Section({ level = 1, children }) {
  return (
    <div className="section">
      <LevelContext.Provider value={level}>
        {children}
      </LevelContext.Provider>
    </div>
  );
}
