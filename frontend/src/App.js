import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CatData from './ajax-component';

function App() {

  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const handleButtonClick1 = () => {
    setShowInfo1(!showInfo1);
  };

  const handleButtonClick2 = () => {
    setShowInfo2(!showInfo2);
  };

  return (
    <div className="App">
      <header className="bg-primary text-white text-center py-4">
        <h1>Cat Info</h1>
        <a className="text-white" style={{ margin: 10 }} href='./quiz.html'>quiz</a>
        <a className="text-white" style={{ margin: 10 }} href='./login.html'>login</a>
      </header>

      <main className="container my-4">
        <h2>Welcome to the Cat Info Page!</h2>
        <div className="row">
          <div className="col-md-6">
            <img src="https://petsi.net/images/catbreed/siamskaya.jpg" alt="Cat 1" className="img-fluid mb-3" style={{ width: '600px', height: '400px' }} />
          </div>
          <div className="col-md-6">
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQM7fxw5TAZmJzbgj9HCn9tHNCss_MqKztLy6gL3IR-oic0Z9XT" alt="Cat 2" className="img-fluid mb-3" style={{ width: '600px', height: '400px' }}  />
          </div>
        </div>
        <button className="btn btn-primary mb-3" onClick={handleButtonClick1}>
          {showInfo1 ? 'Hide Information' : 'Show More Information'}
        </button>
        
        {showInfo1 && (
          <div className="card mb-3">
            <div className="card-body">
              <p>
                The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively stocky body, thick coat, and broad face. The most familiar colour variant is the "British Blue", with a solid grey-blue coat, pineapple eyes, and a medium-sized tail. The breed has also been developed in a wide range of other colours and patterns, including tabby and colourpoint.
              </p>
            </div>
          </div>
        )}
        
        <button className="btn btn-primary mb-3" onClick={handleButtonClick2}>
          {showInfo2 ? 'Hide Information' : 'Show More Information'}
        </button>
        
        {showInfo2 && (
          <div className="card mb-3">
            <div className="card-body">
              <p>
                The Siamese cat (Thai: แมวไทย, Maeo Thai; แมวสยาม, Maeo Sayam) is one of the first distinctly recognised breeds of Asian cat. Derived from the Wichianmat landrace, one of several varieties of cats native to Thailand (formerly known as Siam), the original Siamese became one of the most popular breeds in Europe and North America in the 19th century. Siamese cats have a distinctive colourpoint coat, resulting from a temperature-sensitive type of albinism.
              </p>
            </div>
          </div>
        )}
        <CatData />
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Cat Info. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
