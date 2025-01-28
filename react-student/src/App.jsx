import Student from './Student';

function App() {
  return (
    <>
      <Student name="Ali AbdurRaheem" age={18} isStudent={true}/>
      <Student name="Patrick" age={20} isStudent={false}/>
      <Student name="Squag" age={25} isStudent={false}/>
      <Student name="Patar" age={27} isStudent={true}/>
      <Student />
    </>
  );
}

export default App
