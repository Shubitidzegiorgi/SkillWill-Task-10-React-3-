import './App.css';
import Book from './components/Book'
import Image from './assets/to-kill-a-mockingbird-4.jpg'

function App() {
  const alertInfo = (title,characters) =>{
    alert(`Book Title: ${title}`);
    alert(`Characters: ${characters}`)
  };

  const bookDescription = "Set in the racially charged South during the Depression, the novel follows a young girl and her older brother as they navigate their small town's societal norms and prejudices. Their father, a lawyer, is appointed to defend a black man falsely accused of raping a white woman, forcing the children to confront the harsh realities of racism and injustice. The story explores themes of morality, innocence, and the loss of innocence through the eyes of the young protagonists."

  return (
    <div className="App">
      <Book
      image = {Image}
      title = "To kill a Mockingbird"
      description = {bookDescription}
      characters = {["Dill Harris", "Jem Finch", "Atticus Finch", "Scout Finch"]}
      onBtnClick = {alertInfo}
      />
    </div>
  );
}

export default App;
