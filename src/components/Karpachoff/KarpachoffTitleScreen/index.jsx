import React, { Component } from 'react';
import styles from './styles.module.scss'

export default class index extends Component {
  render() {
    return (
      <>
          <section className={styles.title_screen}>
          <div className={styles.container}>
            <h1>
              Академия родительского мастерства <br />
              <span> дмитрия карпачева </span>
            </h1>
            <button> Подробнее о курсе </button>
            <div className={styles.progress_bar_empty}>
              <div className={styles.progress_bar_filled}>
              </div>
            </div>
            <div className={styles.progress_text}>
              <div>
                <p>10</p> 
                <span> Тем всего </span>
              </div>
              <div>
                <p>6</p>
                <span> Тем выполнено </span>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.under_main_screen}>
          <div className={styles.container}>
            <a href="module.html">Главная</a>
            <div className={styles.short_line} />
            <a href="module.html">Курсы</a>
            <div className={styles.short_line} />
            <a href="module.html">Состав курсов</a>
          </div>
        </section>
        <section className={styles.coures_themes}>
          <div className={styles.container}>
            <div className={styles.coures_themes_left_block}>
              <div className={styles.short_line} />
              <a href="module.html">Темы курса</a>
            </div>
            <button className={styles.coures_themes_right_block}>
              <p>Возраст ребенка - 5 лет</p>
              <img src="img/Polygon.svg" alt="spinning_triangle_on_hover" />
            </button>
          </div>
        </section>
        <section className={styles.themes_names}>
          <div className={styles.container}>
            <div className={styles.card}>
              <div className={styles.container}>
                <div className={styles.number_of_theme_block}>
                  <p className={styles.number_of_theme}>01</p>
                  <div className={styles.progress_bar_with_text_alt}>
                    <div className={styles.progress_bar_empty_alt}>
                      <div className={styles.progress_bar_filled_alt} />
                    </div>
                    <p>60%</p>
                  </div>
                </div>
                <div className={styles.card_text}>
                  <h2>ВАЖНЫЕ ТЕМЫ ПРОШЕДШЕГО ВОЗРАСТА</h2>
                  <div>
                    <img src="img/child.svg" alt="child_logo" />
                    <p>до 3 лет 4 месяца</p>
                  </div>
                  <p className={styles.card_description}>В этом модуле содержатся темы, которые были актуальны для более раннего возраста вашего ребенка, но их понимание крайне важно и для дальнейшего воспитания вашего уже более взрослого ребенка.»</p>
                  <p className={styles.card_info}>Будет доступно <a href="module.html">25.03.19</a></p>
                </div>
                <div className={styles.progress_bar_with_text}>
                  <p>60%</p>
                  <div className={styles.progress_bar_empty}>
                    <div className={styles.progress_bar_filled} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.container}>
                <div className={styles.number_of_theme_block}>
                  <p className={styles.number_of_theme}>02</p>
                  <div className={styles.progress_bar_with_text_alt}>
                    <div className={styles.progress_bar_empty_alt}>
                      <div className={styles.progress_bar_filled_alt} />
                    </div>
                    <p>60%</p>
                  </div>
                </div>
                <div className={styles.card_text}>
                  <h2>ВАЖНЫЕ ТЕМЫ ПРОШЕДШЕГО ВОЗРАСТА</h2>
                  <div>
                    <img src="img/child.svg" alt="child_logo" />
                    <p>до 3 лет 4 месяца</p>
                  </div>
                  <p className={styles.card_description}>В этом модуле содержатся темы, которые были актуальны для более раннего возраста вашего ребенка, но их понимание крайне важно и для дальнейшего воспитания вашего уже более взрослого ребенка.»</p>
                  <p className={styles.card_info}>Будет доступно <a href="module.html">25.03.19</a></p>
                </div>
                <div className={styles.progress_bar_with_text}>
                  <p>60%</p>
                  <div className={styles.progress_bar_empty}>
                    <div className={styles.progress_bar_filled} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.container}>
                <div className={styles.number_of_theme_block}>
                  <p className={styles.number_of_theme}>03</p>
                  <div className={styles.progress_bar_with_text_alt}>
                    <div className={styles.progress_bar_empty_alt}>
                      <div className={styles.progress_bar_filled_alt} />
                    </div>
                    <p>60%</p>
                  </div>
                </div>
                <div className={styles.card_text}>
                  <h2>ВАЖНЫЕ ТЕМЫ ПРОШЕДШЕГО ВОЗРАСТА</h2>
                  <div>
                    <img src="img/child.svg" alt="child_logo" />
                    <p>до 3 лет 4 месяца</p>
                  </div>
                  <p className={styles.card_description}>В этом модуле содержатся темы, которые были актуальны для более раннего возраста вашего ребенка, но их понимание крайне важно и для дальнейшего воспитания вашего уже более взрослого ребенка.»</p>
                  <p className={styles.card_info}>Будет доступно <a href="module.html">25.03.19</a></p>
                </div>
                <div className={styles.progress_bar_with_text}>
                  <p>60%</p>
                  <div className={styles.progress_bar_empty}>
                    <div className={styles.progress_bar_filled} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.container}>
                <div className={styles.number_of_theme_block}>
                  <p className={styles.number_of_theme}>04</p>
                  <div className={styles.progress_bar_with_text_alt}>
                    <div className={styles.progress_bar_empty_alt}>
                      <div className={styles.progress_bar_filled_alt} />
                    </div>
                    <p>60%</p>
                  </div>
                </div>
                <div className={styles.card_text}>
                  <h2>ВАЖНЫЕ ТЕМЫ ПРОШЕДШЕГО ВОЗРАСТА</h2>
                  <div>
                    <img src="img/child.svg" alt="child_logo" />
                    <p>до 3 лет 4 месяца</p>
                  </div>
                  <p className={styles.card_description}>В этом модуле содержатся темы, которые были актуальны для более раннего возраста вашего ребенка, но их понимание крайне важно и для дальнейшего воспитания вашего уже более взрослого ребенка.»</p>
                  <p className={styles.card_info}>Будет доступно <a href="module.html">25.03.19</a></p>
                </div>
                <div className={styles.progress_bar_with_text}>
                  <p>60%</p>
                  <div className={styles.progress_bar_empty}>
                    <div className={styles.progress_bar_filled} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.container}>
                <div className={styles.number_of_theme_block}>
                  <p className={styles.number_of_theme}>05</p>
                  <div className={styles.progress_bar_with_text_alt}>
                    <div className={styles.progress_bar_empty_alt}>
                      <div className={styles.progress_bar_filled_alt} />
                    </div>
                    <p>60%</p>
                  </div>
                </div>
                <div className={styles.card_text}>
                  <h2>ВАЖНЫЕ ТЕМЫ ПРОШЕДШЕГО ВОЗРАСТА</h2>
                  <div>
                    <img src="img/child.svg" alt="child_logo" />
                    <p>до 3 лет 4 месяца</p>
                  </div>
                  <p className={styles.card_description}>В этом модуле содержатся темы, которые были актуальны для более раннего возраста вашего ребенка, но их понимание крайне важно и для дальнейшего воспитания вашего уже более взрослого ребенка.»</p>
                  <p className={styles.card_info}>Будет доступно <a href="module.html">25.03.19</a></p>
                </div>
                <div className={styles.progress_bar_with_text}>
                  <p>60%</p>
                  <div className={styles.progress_bar_empty}>
                    <div className={styles.progress_bar_filled} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.container}>
                <div className={styles.number_of_theme_block}>
                  <p className={styles.number_of_theme}>06</p>
                  <div className={styles.progress_bar_with_text_alt}>
                    <div className={styles.progress_bar_empty_alt}>
                      <div className={styles.progress_bar_filled_alt} />
                    </div>
                    <p>60%</p>
                  </div>
                </div>
                <div className={styles.card_text}>
                  <h2>ВАЖНЫЕ ТЕМЫ ПРОШЕДШЕГО ВОЗРАСТА</h2>
                  <div>
                    <img src="img/child.svg" alt="child_logo" />
                    <p>до 3 лет 4 месяца</p>
                  </div>
                  <p className={styles.card_description}>В этом модуле содержатся темы, которые были актуальны для более раннего возраста вашего ребенка, но их понимание крайне важно и для дальнейшего воспитания вашего уже более взрослого ребенка.»</p>
                  <p className={styles.card_info}>Будет доступно <a href="module.html">25.03.19</a></p>
                </div>
                <div className={styles.progress_bar_with_text}>
                  <p>60%</p>
                  <div className={styles.progress_bar_empty}>
                    <div className={styles.progress_bar_filled} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footer_card}>
              <p className={styles.title_text}>Онлайн - школа</p>
              <div className={styles.short_line} />
              <a href="module.html">О школе</a>
              <a href="module.html">Об авторе</a>
              <a href="module.html">Вопрос/ответ</a>
              <a href="module.html">Отзывы</a>
            </div>
            <div className={styles.footer_card}>
              <p className={styles.title_text}>Материалы</p>
              <div className={styles.short_line} />
              <a href="module.html">Мои курсы</a>
              <a href="module.html">Бесплатные курсы</a>
              <a href="module.html">Все о детях</a>
              <a href="module.html">О личности</a>
              <a href="module.html">О семье</a>
              <a href="module.html">Ближайшие курсы</a>
              <a href="module.html">Новинки</a>
            </div>
            <div className={styles.footer_card}>
              <p className={styles.title_text}>Информация</p>
              <div className={styles.short_line} />
              <a href="module.html">Способы оплаты</a>
              <a href="module.html">Политика конфиденциальности</a>
              <a href="module.html">Договор оферты</a>
            </div>
            <div className={styles.footer_card}>
              <p className={styles.title_text}>Контакты</p>
              <div className={styles.short_line} />
              <a href="module.html">info@karpachoff.com</a>
              <a href="module.html">school.karpachoff.com</a>
              <p className={styles.phone}>+38 (044) 35 36 036</p>
              <p className={styles.phone}>+7 (495) 504 36 06</p>
            </div>
          </div>
        </footer>
      </>
    )
  }
}
