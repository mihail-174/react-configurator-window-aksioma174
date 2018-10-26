import React, { Component } from 'react';

export default class Wf extends Component {
  render() {
    const {context} = this.props,
          state = context.state;

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
                  <input type='hidden' name='type' value={state.frame__1__type==='door'||state.frame__2__type==='door'||state.frame__3__type==='door'?'Балкон':'Окно'} readOnly />
                  <input type='hidden' name='width' value={state.width} readOnly />
                  <input type='hidden' name='height' value={state.height} readOnly />
                  {state.frame__1 && <textarea hidden="hidden" name='frame1' value={`Первая створка: \n— Ширина створки: ${state.frame__1__width} \n— Дверь: ${state.frame__1__type==='door'?'да':'нет'} \n— Горизонтальное открытие: ${state.frame__1__open_horizontal} \n— Вертикальное открытие: ${state.frame__1__open_vertical?'да':'нет'} \n— Москитная сетка: ${state.frame__1__mosquito?'да':'нет'}`} readOnly />}
                  {state.frame__2 && <textarea hidden="hidden" name='frame1' value={`Вторая створка: \n— Ширина створки: ${state.frame__2__width} \n— Дверь: ${state.frame__2__type==='door'?'да':'нет'} \n— Горизонтальное открытие: ${state.frame__2__open_horizontal} \n— Вертикальное открытие: ${state.frame__2__open_vertical?'да':'нет'} \n— Москитная сетка: ${state.frame__2__mosquito?'да':'нет'}`} readOnly />}
                  {state.frame__3 && <textarea hidden="hidden" name='frame1' value={`Третья створка: \n— Ширина створки: ${state.frame__3__width} \n— Дверь: ${state.frame__3__type==='door'?'да':'нет'} \n— Горизонтальное открытие: ${state.frame__3__open_horizontal} \n— Вертикальное открытие: ${state.frame__3__open_vertical?'да':'нет'} \n— Москитная сетка: ${state.frame__3__mosquito?'да':'нет'}`} readOnly />}
              </div>
            </div>
            <div className='wf__privacy'>Отправляя данную форму, я подтверждаю,что ознакомлен с <a href='/privacy'>Политикой конфиденциальности</a>, и согласен на хранение и обработку предоставленных персональных данных.</div>
            <div className='wf__action'>
              <input type="submit" name='submit' defaultValue="Отправить"/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
