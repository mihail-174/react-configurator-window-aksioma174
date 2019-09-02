import React, { Component } from 'react';

export default class Wf extends Component {
  render() {
    const {context} = this.props,
          state = context.state;

    let width = 'Ширина проема: ' + state.width + 'мм';
    let height = '\nВысота проема: ' + state.height + 'мм';

    let type = '';
    let widthFrame1 = '';
    let widthFrame2 = '';
    let widthFrame3 = '';
    let heightWindow = '';
    let heightDoor = '';
    let frame_1_open_horizontal = '';
    let frame_2_open_horizontal = '';
    let frame_3_open_horizontal = '';
    let frame_1_open_vertical = '';
    let frame_2_open_vertical = '';
    let frame_3_open_vertical = '';
    let frame_1_mosquito = '';
    let frame_2_mosquito = '';
    let frame_3_mosquito = '';

    heightWindow = '\nВысота окна: ' + state.height_wind + 'мм';
    if ( state.frame__1__type === 'door' || state.frame__2__type === 'door' || state.frame__3__type === 'door' ) {
        heightDoor = '\nВысота двери: ' + state.height_door + 'мм';
    }

    if ( state.winds === 1 ) {
        if ( state.frame__1__type === 'window' ) {
            type = '\nОдностворчатое окно.';
            switch (state.frame__1__open_horizontal) {
                case 'none':
                    frame_1_open_horizontal = '\nГлухое.';
                    break;
                case 'right':
                    frame_1_open_horizontal = '\nС открытием влево.';
                    break;
                case 'left':
                    frame_1_open_horizontal = '\nС открытием вправо.';
                    break;
                default:
                    frame_1_open_horizontal = '';
                    break;
            }
            if ( state.frame__1__mosquito ) {
                frame_1_mosquito = '\nМоскитная сетка';
            } else {
                frame_1_mosquito = '';
            }
            if ( state.frame__1__open_vertical ) {
                frame_1_open_vertical = '\nВертикальное открытие.';
            }
        }
        if ( state.frame__1__type === 'door' ) {
            type = '\nТип: ' +  'Дверь';
        }
        widthFrame1 = '\nШирина 1 створки: ' + state.frame__1__width + 'мм';

    }
    if ( state.winds === 2 ) {
        if ( state.frame__1__type === 'window' ) {
            type = '\nТип: ' +  'Двухстворчатое окно.';
            // if (state.frame__1__open_horizontal === 'none' && state.frame__2__open_horizontal === 'none') {
            //     frame_2_open_horizontal = '\nГлухое.';
            // }
            switch (state.frame__1__open_horizontal) {
                case 'none':
                    frame_1_open_horizontal = '\nЛевая половина: глухая';
                    break;
                case 'right':
                    frame_1_open_horizontal = '\nЛевая половина: с открытием влево.';
                    break;
                case 'left':
                    frame_1_open_horizontal = '\nЛевая половина: с открытием вправо.';
                    break;
                default:
                    frame_1_open_horizontal = '';
                    break;
            }
            switch (state.frame__2__open_horizontal) {
                case 'none':
                    frame_2_open_horizontal = '\nПравая половина: глухая';
                    break;
                case 'right':
                    frame_2_open_horizontal = '\nПравая половина: с открытием влево.';
                    break;
                case 'left':
                    frame_2_open_horizontal = '\nПравая половина: с открытием вправо.';
                    break;
                default:
                    frame_2_open_horizontal = '';
                    break;
            }
            if ( state.frame__1__mosquito ) {
                frame_1_mosquito = '\nМоскитная сетка для левой створки.';
            }
            if ( state.frame__2__mosquito ) {
                frame_2_mosquito = '\nМоскитная сетка для правой створки.';
            }
            if ( state.frame__1__open_vertical ) {
                frame_1_open_vertical = '\nВертикальное открытие левой створки.';
            }
            if ( state.frame__2__open_vertical ) {
                frame_2_open_vertical = '\nВертикальное открытие правой створки.';
            }
        }
        if ( state.frame__1__type === 'door' ) {
            type = '\nТип: ' +  'Двухстворчатый балконный блок. Дверь слева.';
        }
        if ( state.frame__2__type === 'door' ) {
            type = '\nТип: ' +  'Двухстворчатый балконный блок. Дверь справа.';
        }
        widthFrame1 = '\nШирина 1 створки: ' + state.frame__1__width + 'мм';
        widthFrame2 = '\nШирина 2 створки: ' + state.frame__2__width + 'мм';
    }
    if ( state.winds === 3 ) {
        if ( state.frame__1__type === 'window' ) {
            type = '\nТип: ' +  'Трехстворчатое окно';
        }
        if ( state.frame__1__type === 'door' ) {
            type = '\nТип: ' +  'Трехстворчатый балконный блок. Дверь слева.';
        }
        if ( state.frame__2__type === 'door' ) {
            type = '\nТип: ' +  'Трехстворчатый балконный блок. Дверь по центру.';
        }
        if ( state.frame__3__type === 'door' ) {
            type = '\nТип: ' +  'Трехстворчатый балконный блок. Дверь справа.';
        }
        widthFrame1 = '\nШирина 1 створки: ' + state.frame__1__width + 'мм';
        widthFrame2 = '\nШирина 2 створки: ' + state.frame__2__width + 'мм';
        widthFrame3 = '\nШирина 3 створки: ' + state.frame__3__width + 'мм';
    }

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
              <div className='wf__data'>
                  {
                      <div>
                          <div>{width}</div>
                          <div>{height}</div>

                          <div>{type}</div>

                          <div>{frame_1_open_horizontal}</div>
                          <div>{frame_2_open_horizontal}</div>

                          <div>{frame_1_mosquito}</div>
                          <div>{frame_2_mosquito}</div>

                          <div>{frame_1_open_vertical}</div>
                          <div>{frame_2_open_vertical}</div>
                          
                          <div>{widthFrame1}</div>
                          <div>{widthFrame2}</div>
                          <div>{widthFrame3}</div>
                          <div>{heightWindow}</div>
                          <div>{heightDoor}</div>
                      </div>
                  }
                  <textarea
                  rows='3'
                  hidden
                  name='data'
                  readOnly='true'
                  value={
                      width + height + type + widthFrame1 + widthFrame2 + widthFrame3 + heightWindow + heightDoor
                  }
              />
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
