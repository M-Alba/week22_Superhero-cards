# week22_Superhero-cards

Ответы на вопросы:
1. Что такое props и можно ли использовать props в функциональных компонентах?
props (пропсы) — это входные данные React-компонентов, передаваемые от родительского компонента дочернему компоненту.
Да, можно.

2. Нужно ли выделять в отдельный компонент статью в блоге?
Да, т.к. статей в блоге может быть много, одинаковой структуры, отличаться будут только содержимым.

3. Можно ли использовать React без JSX?
Можно. Все, что может быть сделано при помощи JSX, может быть сделано на чистом JavaScript.

4. Чем отличается JSX от HTML?
По большей части синтаксис и структура JSX и HTML совпадают, но есть
некоторые важные различия:
1. так как это похожий на XML синтаксис, одиночные теги в JSX должны быть
закрыты: <hr /> 
2. вместо атрибута class в JSX используется имя свойства в DOM: className

5. Для чего нам нужны свойства (props) компонентов?
Props нужны для передачи данных внутрь компонентов.

6. В примере с CardList чем можно было бы заменить <React.Fragment> ?
Можно заменить сокращенной записью объявления фрагментов, она выглядит как пустые теги: <></>

7. Можно ли сказать, что классовые и функциональные компоненты
равнозначны по функциональности?
Да, можно.

8. Можно ли полностью описать приложение, используя только
функциональные компоненты?
Думаю можно.

9. Какой командой мы делаем экспорт компонента для возможности его
использования в других местах приложения?
export default

10. Изучите структуру компонент в проекте https://github.com/alisa-
tsvetkova/EthereumUI и напишите, какой именно компонент является самым
верхним, а какой самым «глубоким»?
blockViewer.js верхний
blockTranTable.js нижний

11. Какой командой можно сгенерировать разметку/компоненты на основе
заранее заданного массива элементов? Приведите пример.
map
пример из моей домашки
<div className="App">
          {
            heroes.map((hero) => 
              <Hero name={hero.name} 
              universe={hero.universe} 
              alterego={hero.alterego} 
              occupation={hero.occupation} 
              friends={hero.friends} 
              superpowers={hero.superpowers} 
              url={hero.url}></Hero>
            )
          }
        </div>