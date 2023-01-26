import Sections from "./Section/Sections"
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
       <Sections good={1} neutral={2} bad={2} total={3} positivePercentage={3}/>
    </div>
  );
};
