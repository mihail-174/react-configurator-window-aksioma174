import React, { Component } from 'react';

export default class Wf extends Component {
  render() {
    const {context} = this.props,
          state = context.state;

    let width = 'Ширина проема: ' + state.width + 'мм';
    let height = '\nВысота проема: ' + state.height + 'мм';

    let typeWindow = '';
    let typeFrame1 = '';
    let typeFrame2 = '';
    let typeFrame3 = '';
    let mosquitoFrame1 = '';
    let mosquitoFrame2 = '';
    let mosquitoFrame3 = '';

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

    heightWindow = '\nВысота окна: ' + state.height_wind + 'мм';
    if ( state.frame__1__type === 'door' || state.frame__2__type === 'door' || state.frame__3__type === 'door' ) {
        heightDoor = '\nВысота двери: ' + state.height_door + 'мм';
    }

    if ( state.winds === 1 ) {
        if ( state.frame__1__type === 'window' ) {
            typeWindow = '\nОдностворчатое окно.';

            if ( state.frame__1__open_horizontal === 'none' && state.frame__1__open_vertical === false ) {
                typeFrame1 = '\nТип створки: глухая.';
            }
            if ( state.frame__1__open_horizontal === 'none' && state.frame__1__open_vertical ) {
                typeFrame1 = '\nТип створки: откидная.';
            }

            if ( state.frame__1__open_horizontal === 'left' && state.frame__1__open_vertical === false ) {
                typeFrame1 = '\nТип створки: поворотная влево.';
            }
            if ( state.frame__1__open_horizontal === 'left' && state.frame__1__open_vertical ) {
                typeFrame1 = '\nТип створки: поворотная влево/откидная.';
            }

            if ( state.frame__1__open_horizontal === 'right' && state.frame__1__open_vertical === false ) {
                typeFrame1 = '\nТип створки: поворотная вправо.';
            }
            if ( state.frame__1__open_horizontal === 'right' && state.frame__1__open_vertical ) {
                typeFrame1 = '\nТип створки: поворотная вправо/откидная.';
            }
            if ( state.frame__1__mosquito ) {
                mosquitoFrame1 = '\nМоскитная сетка: да.';
            } else {
                mosquitoFrame1 = '\nМоскитная сетка: нет.';
            }
        }
        if ( state.frame__1__type === 'door' ) {
            typeWindow = '\nДверь';
        }
        // widthFrame1 = '\nШирина 1 створки: ' + state.frame__1__width + 'мм';

    }
    if ( state.winds === 2 ) {
        if ( state.frame__1__type === 'window' ) {
            typeWindow = '\nДвухстворчатое окно.';

            if ( state.frame__1__open_horizontal === 'none' && state.frame__1__open_vertical === false ) {
                typeFrame1 = '\nТип 1 створки: глухая.';
            }
            if ( state.frame__1__open_horizontal === 'none' && state.frame__1__open_vertical ) {
                typeFrame1 = '\nТип 1 створки: откидная.';
            }

            if ( state.frame__1__open_horizontal === 'left' && state.frame__1__open_vertical === false ) {
                typeFrame1 = '\nТип 1 створки: поворотная влево.';
            }
            if ( state.frame__1__open_horizontal === 'left' && state.frame__1__open_vertical ) {
                typeFrame1 = '\nТип 1 створки: поворотная влево/откидная.';
            }

            if ( state.frame__1__open_horizontal === 'right' && state.frame__1__open_vertical === false ) {
                typeFrame1 = '\nТип 1 створки: поворотная вправо.';
            }
            if ( state.frame__1__open_horizontal === 'right' && state.frame__1__open_vertical ) {
                typeFrame1 = '\nТип 1 створки: поворотная вправо/откидная.';
            }

            if ( state.frame__2__open_horizontal === 'none' && state.frame__2__open_vertical === false ) {
                typeFrame2 = '\nТип 2 створки: глухая.';
            }
            if ( state.frame__2__open_horizontal === 'none' && state.frame__2__open_vertical ) {
                typeFrame2 = '\nТип 2 створки: откидная.';
            }

            if ( state.frame__2__open_horizontal === 'left' && state.frame__2__open_vertical === false ) {
                typeFrame2 = '\nТип 2 створки: поворотная влево.';
            }
            if ( state.frame__2__open_horizontal === 'left' && state.frame__2__open_vertical ) {
                typeFrame2 = '\nТип 2 створки: поворотная влево/откидная.';
            }

            if ( state.frame__2__open_horizontal === 'right' && state.frame__2__open_vertical === false ) {
                typeFrame2 = '\nТип 2 створки: поворотная вправо.';
            }
            if ( state.frame__2__open_horizontal === 'right' && state.frame__2__open_vertical ) {
                typeFrame2 = '\nТип 2 створки: поворотная вправо/откидная.';
            }
            if ( state.frame__1__mosquito ) {
                mosquitoFrame1 = '\nМоскитная сетка 1 створки: да.';
            } else {
                mosquitoFrame1 = '\nМоскитная сетка 1 створки: нет.';
            }
            if ( state.frame__2__mosquito ) {
                mosquitoFrame2 = '\nМоскитная сетка 2 створки: да.';
            } else {
                mosquitoFrame2 = '\nМоскитная сетка 2 створки: нет.';
            }
        }
        // if ( state.frame__1__type === 'door' ) {
        //     type = '\nТип: ' +  'Двухстворчатый балконный блок. Дверь слева.';
        // }
        // if ( state.frame__2__type === 'door' ) {
        //     type = '\nТип: ' +  'Двухстворчатый балконный блок. Дверь справа.';
        // }
        // widthFrame1 = '\nШирина 1 створки: ' + state.frame__1__width + 'мм';
        // widthFrame2 = '\nШирина 2 створки: ' + state.frame__2__width + 'мм';
    }
    // if ( state.winds === 3 ) {
    //     if ( state.frame__1__type === 'window' ) {
    //         type = '\nТип: ' +  'Трехстворчатое окно';
    //     }
    //     if ( state.frame__1__type === 'door' ) {
    //         type = '\nТип: ' +  'Трехстворчатый балконный блок. Дверь слева.';
    //     }
    //     if ( state.frame__2__type === 'door' ) {
    //         type = '\nТип: ' +  'Трехстворчатый балконный блок. Дверь по центру.';
    //     }
    //     if ( state.frame__3__type === 'door' ) {
    //         type = '\nТип: ' +  'Трехстворчатый балконный блок. Дверь справа.';
    //     }
    //     widthFrame1 = '\nШирина 1 створки: ' + state.frame__1__width + 'мм';
    //     widthFrame2 = '\nШирина 2 створки: ' + state.frame__2__width + 'мм';
    //     widthFrame3 = '\nШирина 3 створки: ' + state.frame__3__width + 'мм';
    // }

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
                          <div>{typeWindow}</div>
                          <div>{typeFrame1}</div>
                          <div>{typeFrame2}</div>
                          <div>{mosquitoFrame1}</div>
                          <div>{mosquitoFrame2}</div>
                          <br/>

                          <div>{width}</div>
                          <div>{height}</div>

                          <div>{frame_1_open_vertical}</div>
                          <div>{frame_2_open_vertical}</div>

                          <div>{frame_1_open_horizontal}</div>
                          <div>{frame_2_open_horizontal}</div>


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
                  value=''
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

// onChange={()=>this.horizontalClick(this, 0)}
// onChange={this.horizontalClick.bind(this)}
// (e)=>this.horizontalClick(e, 0)
