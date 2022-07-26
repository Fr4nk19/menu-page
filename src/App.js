import { useEffect } from 'react';
import './App.css';
import GridMenu from './Components/GridMenu';
import NavSlider from './Components/NavSlider';


function App() {

  useEffect(() => {

    const content = document.querySelectorAll('.dish-content');
    const tab = document.querySelectorAll('.link');
    const slider = document.querySelector('.dish_slider');

      function hideTabContent() {
        content.forEach(item => {
          item.style.display = 'none'; 
        });
        tab.forEach(item => {
          item.classList.remove('active');
        });
      }

        function showTabContent(i = 0) {
          content[i].style.display = 'grid';
          content[i].style.transition = '0.5s ease all';
          tab[i].classList.add('active');
        }


        hideTabContent();
        showTabContent();

      slider.addEventListener("click", (e) => {
        const target = e.target
        if (target) {
          tab.forEach((item, i) => {
                      if (target === item) {
                          hideTabContent();
                          showTabContent(i);
                      }
                  })
        }
      })
  });

  return (

      <div className="tab_cont">
        <div className="countries">
            <div className="container">
        
            <NavSlider/>
            <GridMenu/>                
    </div>
    </div>  
    </div>

  );
}

export default App;
