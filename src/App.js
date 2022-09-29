import './App.css';
import Activity from './Component/Activity/Activity';
import Header from './Component/Header/Header';
import QuestionAndAnswer from './Component/QuestionAndAnswer/QuestionAndAnswer';

function App() {
  return (
    <div>
      <Header></Header>
      <Activity></Activity>
      <QuestionAndAnswer></QuestionAndAnswer>
    </div>
  );
}

export default App;
