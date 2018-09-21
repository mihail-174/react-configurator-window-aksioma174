import React, { Component } from 'react';

export default class Wf extends Component {
  render() {
    const {context} = this.props,
          state = context.state;

    // const list = Object.keys(state).map((field, key) => {
    //     return (
    //         <div key={key}>{field}</div>
    //     )
    // });

    // const list = Object.keys(state).map((field, key) => {
    //     return (
    //         <div key={key}>{state[field].frame__1__width}</div>
    //     )
    // });

    return (
      <div className='wf wf1'>
        <div className='wf__message'></div>
        <form className="wf__form" action="/submit.php" method="POST">
          <div className='wf__inner'>
            <div className='wf__markup'>Мы посчитаем стоимость окна и перезвоним в ближайшее время.</div>
            <div className='wf__fields'>
              <div className='wf__field wf__name'>
                <input required type='text' name='name' placeholder='Имя'/>
              </div>
              <div className='wf__field wf__phone'>
                <input required type='text' name='phone' placeholder='Телефон'/>
              </div>
              <div className='wf__field wf__calculated'>
                  <input type='text' name='phone' value={'Общая ширина: ' + state.width} />
                  <input type='text' name='phone' value={'Общая высота: ' + state.height} />
                  {state.frame__1 && <textarea name='frame1' value={`Первая створка: \n— Ширина створки: ${state.frame__1__width} \n— Дверь: ${state.frame__1__door?'да':'нет'} \n— Горизонтальное открытие: ${state.frame__1__open_horizontal}`} />}
                  {state.frame__2 && <textarea name='frame1' value={`Вторая створка: \n— Ширина створки: ${state.frame__2__width} \n— Дверь: ${state.frame__2__door?'да':'нет'} \n— Горизонтальное открытие: ${state.frame__2__open_horizontal}`} />}
                  {state.frame__3 && <textarea name='frame1' value={`Третья створка: \n— Ширина створки: ${state.frame__3__width} \n— Дверь: ${state.frame__3__door?'да':'нет'} \n— Горизонтальное открытие: ${state.frame__3__open_horizontal}`} />}

              </div>
              <input type='hidden' name='cost' value='' />
            </div>
            <div className='wf__privacy'>Отправляя данную форму, я подтверждаю,что ознакомлен с <a href='/privacy'>Политикой конфиденциальности</a>, и согласен на хранение и обработку предоставленных персональных данных.</div>
            <div className='wf__action'>
              <input type="submit" name='submit' value="Отправить"/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

/*


*/
// <textarea name='calculated' value={`Общая ширина: ${state.width} \nОбщая высота: ${state.height} \nВысота окна: ${state.height_wind} \nВысота двери: ${state.height_door} \n\nПервая створка: \n— Ширина створки: ${state.frame__1__wind?state.frame__1__width:"нет"}`} />
