import React, { Suspense, lazy } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent')); // Adjust the path if necessary

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
};

export default App;
