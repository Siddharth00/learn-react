export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Concepts</h1>
        <nav>
          <ul>
            <li>
              <a href={`/class-component`}>Class Component</a>
            </li>
            <li>
              <a href={`/functional-component`}>
                Functional Component
              </a>
            </li>
            <li>
              <a href={`/debouncing`}>Debouncing</a>
            </li>
            <li>
              <a href={`/memoization`}>Memoization</a>
            </li>
            <li>
              <a href={`/context-api`}>Context API</a>
            </li>
            <li>
              <a href={`/ref`}>Ref</a>
            </li>
            <li>
              <a href={`/forward-ref`}>Forward-Ref</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
